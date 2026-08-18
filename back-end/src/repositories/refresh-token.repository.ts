import { prisma } from '@/lib/prisma.js';
import type { RefreshToken } from '@/generated/prisma/client.js';

export const refreshTokenRepository = {
  async create(data: { token: string; userId: string; expiresAt: Date }): Promise<RefreshToken> {
    return prisma.refreshToken.create({ data });
  },

  async findByToken(token: string): Promise<RefreshToken | null> {
    return prisma.refreshToken.findUnique({ where: { token } });
  },

  async revoke(id: string): Promise<void> {
    await prisma.refreshToken.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  },

  async revokeAllForUser(userId: string): Promise<void> {
    await prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  },
};
