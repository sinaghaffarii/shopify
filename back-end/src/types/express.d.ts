import type { CreateUserBody, UpdateUserBody, ListUsersQuery } from '@/validations/user.validation.js';

interface ValidatedRequestData {
  body?: unknown;
  query?: unknown;
  params?: unknown;
}

declare global {
  namespace Express {
    interface Request {
      validated?: ValidatedRequestData;
    }
  }
}

export type { CreateUserBody, UpdateUserBody, ListUsersQuery };
