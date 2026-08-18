import type { SafeUser } from '@/types/user.types.js';

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  user: SafeUser;
}
