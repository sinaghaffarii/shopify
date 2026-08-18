import { userRepository } from '@/repositories/user.repository.js';
import { otpRepository } from '@/repositories/otp.repository.js';
import { refreshTokenRepository } from '@/repositories/refresh-token.repository.js';
import { generateOtpCode, getOtpExpiryDate } from '@/utils/otp.js';
import { sendOtpSms } from '@/lib/sms.js';
import { comparePassword } from '@/utils/password.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '@/utils/jwt.js';
import { ApiError } from '@/utils/api-error.js';
import { env } from '@/config/env.js';
import { UserRole } from '@/enums/user.enum.js';
import type { AuthResult } from '@/types/auth.types.js';

export const authService = {
  async requestOtp(phone: string): Promise<{ expiresInSeconds: number }> {
    const latestOtp = await otpRepository.findLatestActiveByPhone(phone);

    if (latestOtp) {
      const secondsSinceCreated = (Date.now() - latestOtp.createdAt.getTime()) / 1000;

      if (secondsSinceCreated < env.otpResendCooldownSeconds) {
        const remaining = Math.ceil(env.otpResendCooldownSeconds - secondsSinceCreated);
        throw ApiError.badRequest(`Please wait ${remaining} seconds before requesting a new code`);
      }
    }

    const code = generateOtpCode();
    const expiresAt = getOtpExpiryDate();
    const existingUser = await userRepository.findByPhone(phone);

    await otpRepository.create({
      phone,
      code,
      expiresAt,
      ...(existingUser !== null && { userId: existingUser.id }),
    });

    await sendOtpSms(phone, code);

    return { expiresInSeconds: env.otpExpiresInMinutes * 60 };
  },

  async verifyOtp(input: {
    phone: string;
    code: string;
    name?: string | undefined;
  }): Promise<AuthResult> {
    const otp = await otpRepository.findLatestActiveByPhone(input.phone);

    if (!otp) {
      throw ApiError.badRequest(
        'No active code found for this phone number. Please request a new one.',
      );
    }

    if (otp.attempts >= env.otpMaxAttempts) {
      throw ApiError.badRequest(
        'Maximum verification attempts exceeded. Please request a new code.',
      );
    }

    if (otp.code !== input.code) {
      await otpRepository.incrementAttempts(otp.id);
      throw ApiError.badRequest('Invalid verification code');
    }

    await otpRepository.markAsConsumed(otp.id);

    const user = await userRepository.findByPhone(input.phone);

    if (!user) {
      const created = await userRepository.create({
        phone: input.phone,
        name: input.name ?? input.phone,
        role: UserRole.USER,
      });
      return this.issueTokens({ id: created.id, role: created.role });
    }

    return this.issueTokens({ id: user.id, role: user.role });
  },

  async loginWithPassword(email: string, password: string): Promise<AuthResult> {
    const user = await userRepository.findByEmail(email);

    if (!user?.password) {
      throw ApiError.unauthorized('Invalid email or password');
    }

    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
      throw ApiError.unauthorized('Invalid email or password');
    }

    return this.issueTokens({ id: user.id, role: user.role });
  },

  async refreshTokens(token: string): Promise<AuthResult> {
    try {
      verifyRefreshToken(token);
    } catch {
      throw ApiError.unauthorized('Invalid or expired refresh token');
    }

    const stored = await refreshTokenRepository.findByToken(token);

    if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
      throw ApiError.unauthorized('Refresh token is no longer valid');
    }

    await refreshTokenRepository.revoke(stored.id);

    const user = await userRepository.findById(stored.userId);

    if (!user) {
      throw ApiError.unauthorized('User no longer exists');
    }

    return this.issueTokens({ id: user.id, role: user.role });
  },

  async logout(token: string): Promise<void> {
    const stored = await refreshTokenRepository.findByToken(token);

    if (stored && !stored.revokedAt) {
      await refreshTokenRepository.revoke(stored.id);
    }
  },

  async issueTokens(user: { id: string; role: UserRole }): Promise<AuthResult> {
    const accessToken = signAccessToken({ sub: user.id, role: user.role });
    const refreshToken = signRefreshToken({ sub: user.id });

    await refreshTokenRepository.create({
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + env.jwtRefreshExpiresInMs),
    });

    const safeUser = await userRepository.findById(user.id);

    if (!safeUser) {
      throw ApiError.internal('Failed to load user after authentication');
    }

    return { accessToken, refreshToken, user: safeUser };
  },
};
