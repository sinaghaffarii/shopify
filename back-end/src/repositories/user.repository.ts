import { prisma } from '@/lib/prisma.js';
import type { Prisma, User } from '@/generated/prisma/client.js';
import type { SafeUser } from '@/types/user.types.js';

const SAFE_USER_SELECT = {
  id: true,
  email: true,
  phone: true,
  name: true,
  role: true,
  isProtected: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export const userRepository = {
  async create(data: Prisma.UserCreateInput): Promise<SafeUser> {
    return prisma.user.create({
      data,
      select: SAFE_USER_SELECT,
    });
  },

  async findById(id: string): Promise<SafeUser | null> {
    return prisma.user.findUnique({
      where: { id },
      select: SAFE_USER_SELECT,
    });
  },

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  },

  async findByPhone(phone: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { phone } });
  },

  async findMany(params: { skip: number; take: number; search?: string }): Promise<SafeUser[]> {
    const where: Prisma.UserWhereInput = params.search
      ? {
          OR: [
            { name: { contains: params.search, mode: 'insensitive' } },
            { email: { contains: params.search, mode: 'insensitive' } },
            { phone: { contains: params.search, mode: 'insensitive' } },
          ],
        }
      : {};

    return prisma.user.findMany({
      where,
      select: SAFE_USER_SELECT,
      skip: params.skip,
      take: params.take,
      orderBy: { createdAt: 'desc' },
    });
  },

  async count(search?: string): Promise<number> {
    const where: Prisma.UserWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { phone: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    return prisma.user.count({ where });
  },

  async update(id: string, data: Prisma.UserUpdateInput): Promise<SafeUser> {
    return prisma.user.update({
      where: { id },
      data,
      select: SAFE_USER_SELECT,
    });
  },

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  },

  async countByRole(role: User['role']): Promise<number> {
    return prisma.user.count({ where: { role } });
  },
};
