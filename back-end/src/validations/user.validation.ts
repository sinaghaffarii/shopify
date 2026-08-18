import { z } from 'zod';
import { UserRole } from '@/enums/user.enum.js';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(72, 'Password must be at most 72 characters'),
    name: z.string().min(2).max(100),
    role: z.nativeEnum(UserRole).optional(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid user id'),
  }),
  body: z
    .object({
      email: z.string().email().optional(),
      name: z.string().min(2).max(100).optional(),
      role: z.nativeEnum(UserRole).optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: 'At least one field must be provided',
    }),
});

export const getUserSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid user id'),
  }),
});

export const deleteUserSchema = getUserSchema;

export const listUsersSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
    search: z.string().trim().optional(),
  }),
});

export type CreateUserBody = z.infer<typeof createUserSchema>['body'];
export type UpdateUserBody = z.infer<typeof updateUserSchema>['body'];
export type ListUsersQuery = z.infer<typeof listUsersSchema>['query'];
