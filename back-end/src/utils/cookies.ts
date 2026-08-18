import type { Response } from 'express';
import { env } from '@/config/env.js';

export const REFRESH_TOKEN_COOKIE = 'refreshToken';

export function setRefreshTokenCookie(res: Response, token: string): void {
  res.cookie(REFRESH_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: 'lax',
    path: '/api/v1/auth',
    maxAge: env.jwtRefreshExpiresInMs,
    ...(env.cookieDomain !== undefined && { domain: env.cookieDomain }),
  });
}

export function clearRefreshTokenCookie(res: Response): void {
  res.clearCookie(REFRESH_TOKEN_COOKIE, {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: 'lax',
    path: '/api/v1/auth',
    ...(env.cookieDomain !== undefined && { domain: env.cookieDomain }),
  });
}
