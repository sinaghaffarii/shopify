import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export class ApiError extends Error {
  public readonly statusCode: StatusCodes;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor(
    statusCode: StatusCodes,
    message?: string,
    options?: { isOperational?: boolean; details?: unknown },
  ) {
    super(message ?? getReasonPhrase(statusCode));

    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.isOperational = options?.isOperational ?? true;
    this.details = options?.details;

    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message?: string, details?: unknown): ApiError {
    return new ApiError(StatusCodes.BAD_REQUEST, message, { details });
  }

  static unauthorized(message?: string): ApiError {
    return new ApiError(StatusCodes.UNAUTHORIZED, message);
  }

  static forbidden(message?: string): ApiError {
    return new ApiError(StatusCodes.FORBIDDEN, message);
  }

  static notFound(message?: string): ApiError {
    return new ApiError(StatusCodes.NOT_FOUND, message);
  }

  static conflict(message?: string, details?: unknown): ApiError {
    return new ApiError(StatusCodes.CONFLICT, message, { details });
  }

  static internal(message?: string): ApiError {
    return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, message, {
      isOperational: false,
    });
  }
}
