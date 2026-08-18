import type { User } from '@/generated/prisma/client.js';
import type { UserRole } from '@/enums/user.enum.js';

export type SafeUser = Omit<User, 'password'>;

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  role?: UserRole | undefined;
}

export interface UpdateUserInput {
  email?: string | undefined;
  name?: string | undefined;
  role?: UserRole | undefined;
}

export interface UserQueryParams {
  page: number;
  limit: number;
  search?: string | undefined;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
