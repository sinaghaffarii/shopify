import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authService } from '@/services/auth.service.js';
import { asyncHandler } from '@/utils/async-handler.js';
import {
  setRefreshTokenCookie,
  clearRefreshTokenCookie,
  REFRESH_TOKEN_COOKIE,
} from '@/utils/cookies.js';
import type { SendOtpBody, VerifyOtpBody, LoginBody } from '@/validations/auth.validation.js';

export const authController = {
  requestOtp: asyncHandler(async (req: Request, res: Response) => {
    const { phone } = req.validated?.body as SendOtpBody;
    const result = await authService.requestOtp(phone);

    res.status(StatusCodes.OK).json({ success: true, data: result });
  }),

  verifyOtp: asyncHandler(async (req: Request, res: Response) => {
    const body = req.validated?.body as VerifyOtpBody;
    const result = await authService.verifyOtp(body);

    setRefreshTokenCookie(res, result.refreshToken);

    res.status(StatusCodes.OK).json({
      success: true,
      data: { accessToken: result.accessToken, user: result.user },
    });
  }),

  login: asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.validated?.body as LoginBody;
    const result = await authService.loginWithPassword(email, password);

    setRefreshTokenCookie(res, result.refreshToken);

    res.status(StatusCodes.OK).json({
      success: true,
      data: { accessToken: result.accessToken, user: result.user },
    });
  }),

  refresh: asyncHandler(async (req: Request, res: Response) => {
    const { refreshToken } = req.validated?.cookies as {
      refreshToken: string;
    };
    const result = await authService.refreshTokens(refreshToken);

    setRefreshTokenCookie(res, result.refreshToken);

    res.status(StatusCodes.OK).json({
      success: true,
      data: { accessToken: result.accessToken, user: result.user },
    });
  }),

  logout: asyncHandler(async (req: Request, res: Response) => {
    const token = req.cookies?.[REFRESH_TOKEN_COOKIE] as string | undefined;

    if (token) {
      await authService.logout(token);
    }

    clearRefreshTokenCookie(res);

    res.status(StatusCodes.NO_CONTENT).send();
  }),
};
