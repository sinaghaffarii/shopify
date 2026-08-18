import { randomInt } from 'node:crypto';
import { env } from '@/config/env.js';

export function generateOtpCode(): string {
  const min = 10 ** (env.otpLength - 1);
  const max = 10 ** env.otpLength - 1;

  return randomInt(min, max + 1).toString();
}

export function getOtpExpiryDate(): Date {
  return new Date(Date.now() + env.otpExpiresInMinutes * 60 * 1000);
}
