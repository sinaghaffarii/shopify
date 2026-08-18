import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { userService } from '@/services/user.service.js';
import { asyncHandler } from '@/utils/async-handler.js';
import type {
  CreateUserBody,
  UpdateUserBody,
  ListUsersQuery,
} from '@/validations/user.validation.js';

export const userController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    const body = req.validated?.body as CreateUserBody;
    const user = await userService.create(body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: user,
    });
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.validated?.params as { id: string };
    const user = await userService.getById(id);

    res.status(StatusCodes.OK).json({
      success: true,
      data: user,
    });
  }),

  list: asyncHandler(async (req: Request, res: Response) => {
    const query = req.validated?.query as ListUsersQuery;
    const result = await userService.list(query);

    res.status(StatusCodes.OK).json({
      success: true,
      data: result.data,
      meta: result.meta,
    });
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.validated?.params as { id: string };
    const body = req.validated?.body as UpdateUserBody;
    const user = await userService.update(id, body);

    res.status(StatusCodes.OK).json({
      success: true,
      data: user,
    });
  }),

  delete: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.validated?.params as { id: string };
    await userService.delete(id);

    res.status(StatusCodes.NO_CONTENT).send();
  }),
};
