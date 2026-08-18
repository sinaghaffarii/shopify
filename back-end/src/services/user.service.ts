import { userRepository } from '@/repositories/user.repository.js';
import { hashPassword } from '@/utils/password.js';
import { ApiError } from '@/utils/api-error.js';
import type {
  CreateUserInput,
  UpdateUserInput,
  PaginatedResult,
  SafeUser,
} from '@/types/user.types.js';

export const userService = {
  async create(input: CreateUserInput): Promise<SafeUser> {
    const existingUser = await userRepository.findByEmail(input.email);

    if (existingUser) {
      throw ApiError.conflict('A user with this email already exists');
    }

    const hashedPassword = await hashPassword(input.password);

    return userRepository.create({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      ...(input.role !== undefined && { role: input.role }),
    });
  },

  async getById(id: string): Promise<SafeUser> {
    const user = await userRepository.findById(id);

    if (!user) {
      throw ApiError.notFound('User not found');
    }

    return user;
  },

  async list(params: {
    page: number;
    limit: number;
    search?: string | undefined;
  }): Promise<PaginatedResult<SafeUser>> {
    const skip = (params.page - 1) * params.limit;

    const [data, total] = await Promise.all([
      userRepository.findMany({
        skip,
        take: params.limit,
        ...(params.search !== undefined && { search: params.search }),
      }),
      userRepository.count(params.search),
    ]);

    return {
      data,
      meta: {
        page: params.page,
        limit: params.limit,
        total,
        totalPages: Math.ceil(total / params.limit),
      },
    };
  },

  async update(id: string, input: UpdateUserInput): Promise<SafeUser> {
    await this.getById(id);

    if (input.email) {
      const existingUser = await userRepository.findByEmail(input.email);

      if (existingUser && existingUser.id !== id) {
        throw ApiError.conflict('A user with this email already exists');
      }
    }

    return userRepository.update(id, {
      ...(input.email !== undefined && { email: input.email }),
      ...(input.name !== undefined && { name: input.name }),
      ...(input.role !== undefined && { role: input.role }),
    });
  },

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await userRepository.delete(id);
  },
};
