import { z } from 'zod';

const iranianPhoneRegex = /^09\d{9}$/;

export const sendOtpSchema = z.object({
  body: z.object({
    phone: z.string().regex(iranianPhoneRegex, 'Invalid Iranian phone number'),
  }),
});

export const verifyOtpSchema = z.object({
  body: z.object({
    phone: z.string().regex(iranianPhoneRegex, 'Invalid Iranian phone number'),
    code: z.string().length(5, 'Code must be 5 digits'),
    name: z.string().min(2).max(100).optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const refreshTokenSchema = z.object({
  cookies: z.object({
    refreshToken: z.string().min(1, 'Refresh token is missing'),
  }),
});

export type SendOtpBody = z.infer<typeof sendOtpSchema>['body'];
export type VerifyOtpBody = z.infer<typeof verifyOtpSchema>['body'];
export type LoginBody = z.infer<typeof loginSchema>['body'];
