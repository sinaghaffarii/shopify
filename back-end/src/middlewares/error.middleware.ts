import type { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Prisma } from '@/generated/prisma/client.js';
import { ApiError } from '@/utils/api-error.js';
import { env } from '@/config/env.js';

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  if (error instanceof ApiError) {
    if (!error.isOperational) {
      console.error('Non-operational error:', error);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message,
      ...(error.details !== undefined && { details: error.details }),
    });
    return;
  }

  if (error instanceof SyntaxError && 'body' in error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Malformed JSON in request body',
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: 'A record with this value already exists',
      });
      return;
    }

    if (error.code === 'P2025') {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Record not found',
      });
      return;
    }
  }

  console.error(error);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: env.isDevelopment && error instanceof Error ? error.message : 'Internal server error',
  });
};
