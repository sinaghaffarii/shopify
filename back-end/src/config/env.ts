import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  DATABASE_URL: z.string().url(),

  JWT_ACCESS_SECRET: z.string().min(32, 'JWT_ACCESS_SECRET must be at least 32 characters'),
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),

  JWT_REFRESH_SECRET: z.string().min(32, 'JWT_REFRESH_SECRET must be at least 32 characters'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('30d'),
  JWT_REFRESH_EXPIRES_IN_MS: z.coerce
    .number()
    .int()
    .default(30 * 24 * 60 * 60 * 1000),

  BCRYPT_SALT_ROUNDS: z.coerce.number().int().min(4).max(15).default(10),

  KAVENEGAR_API_KEY: z.string().min(1, 'KAVENEGAR_API_KEY is required'),
  KAVENEGAR_SENDER_TEMPLATE: z.string().default('verify'),

  OTP_LENGTH: z.coerce.number().int().min(4).max(8).default(5),
  OTP_EXPIRES_IN_MINUTES: z.coerce.number().int().default(2),
  OTP_MAX_ATTEMPTS: z.coerce.number().int().default(5),
  OTP_RESEND_COOLDOWN_SECONDS: z.coerce.number().int().default(60),

  COOKIE_DOMAIN: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:');
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const env = {
  nodeEnv: parsed.data.NODE_ENV,
  port: parsed.data.PORT,
  databaseUrl: parsed.data.DATABASE_URL,

  jwtAccessSecret: parsed.data.JWT_ACCESS_SECRET,
  jwtAccessExpiresIn: parsed.data.JWT_ACCESS_EXPIRES_IN,

  jwtRefreshSecret: parsed.data.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: parsed.data.JWT_REFRESH_EXPIRES_IN,
  jwtRefreshExpiresInMs: parsed.data.JWT_REFRESH_EXPIRES_IN_MS,

  bcryptSaltRounds: parsed.data.BCRYPT_SALT_ROUNDS,

  kavenegarApiKey: parsed.data.KAVENEGAR_API_KEY,
  kavenegarSenderTemplate: parsed.data.KAVENEGAR_SENDER_TEMPLATE,

  otpLength: parsed.data.OTP_LENGTH,
  otpExpiresInMinutes: parsed.data.OTP_EXPIRES_IN_MINUTES,
  otpMaxAttempts: parsed.data.OTP_MAX_ATTEMPTS,
  otpResendCooldownSeconds: parsed.data.OTP_RESEND_COOLDOWN_SECONDS,

  cookieDomain: parsed.data.COOKIE_DOMAIN,

  isProduction: parsed.data.NODE_ENV === 'production',
  isDevelopment: parsed.data.NODE_ENV === 'development',
  isTest: parsed.data.NODE_ENV === 'test',
} as const;
