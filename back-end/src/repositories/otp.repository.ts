import { prisma } from '@/lib/prisma.js';
import type { OtpCode } from '@/generated/prisma/client.js';

export const otpRepository = {
  async create(data: {
    phone: string;
    code: string;
    expiresAt: Date;
    userId?: string;
  }): Promise<OtpCode> {
    return prisma.otpCode.create({
      data: {
        phone: data.phone,
        code: data.code,
        expiresAt: data.expiresAt,
        ...(data.userId !== undefined && { userId: data.userId }),
      },
    });
  },

  async findLatestActiveByPhone(phone: string): Promise<OtpCode | null> {
    return prisma.otpCode.findFirst({
      where: {
        phone,
        consumedAt: null,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async incrementAttempts(id: string): Promise<void> {
    await prisma.otpCode.update({
      where: { id },
      data: { attempts: { increment: 1 } },
    });
  },

  async markAsConsumed(id: string): Promise<void> {
    await prisma.otpCode.update({
      where: { id },
      data: { consumedAt: new Date() },
    });
  },
};
