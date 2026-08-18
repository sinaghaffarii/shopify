import { Router, type Router as RouterType } from 'express';
import { userController } from '@/controllers/user.controller.js';
import { validate } from '@/middlewares/validation.middleware.js';
import {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
  listUsersSchema,
} from '@/validations/user.validation.js';
import { authenticate, authorize } from '@/middlewares/auth.middleware.js';
import { UserRole } from '@/enums/user.enum.js';

const router: RouterType = Router();

router.use(authenticate, authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN));

/**
 * @openapi
 * /users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, name]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string, minLength: 8 }
 *               name: { type: string }
 *               role: { type: string, enum: [ADMIN, USER] }
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 data: { $ref: '#/components/schemas/User' }
 *       409:
 *         description: Email already exists
 */
router.post('/', validate(createUserSchema), userController.create);

/**
 * @openapi
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: List users (paginated)
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Paginated list of users
 */
router.get('/', validate(listUsersSchema), userController.list);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/:id', validate(getUserSchema), userController.getById);

/**
 * @openapi
 * /users/{id}:
 *   patch:
 *     tags: [Users]
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string, format: email }
 *               name: { type: string }
 *               role: { type: string, enum: [ADMIN, USER] }
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 */
router.patch('/:id', validate(updateUserSchema), userController.update);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
router.delete('/:id', validate(deleteUserSchema), userController.delete);

export default router;
