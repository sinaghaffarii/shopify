import type { UserRole } from '@/enums/user.enum.js';

interface ValidatedRequestData {
  body?: unknown;
  query?: unknown;
  params?: unknown;
  cookies?: unknown;
}

declare global {
  namespace Express {
    interface Request {
      validated?: ValidatedRequestData;
      user?: { id: string; role: UserRole };
    }
  }
}

export {};
