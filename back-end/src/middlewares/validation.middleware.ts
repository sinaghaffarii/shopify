import type { NextFunction, Request, Response } from 'express';
import { ZodError, type ZodType } from 'zod';
import { ApiError } from '@/utils/api-error.js';

export function validate<T extends ZodType>(schema: T) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const parsed = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      req.validated = parsed as {
        body?: unknown;
        query?: unknown;
        params?: unknown;
      };

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(ApiError.badRequest('Validation failed', error.flatten().fieldErrors));
        return;
      }
      next(error);
    }
  };
}
