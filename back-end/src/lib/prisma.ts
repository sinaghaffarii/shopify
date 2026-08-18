import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma/client.js';
import { env } from '@/config/env.js';

const adapter = new PrismaPg({
  connectionString: env.databaseUrl,
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: env.isDevelopment ? ['query', 'warn', 'error'] : ['warn', 'error'],
  });

if (!env.isProduction) {
  globalForPrisma.prisma = prisma;
}
