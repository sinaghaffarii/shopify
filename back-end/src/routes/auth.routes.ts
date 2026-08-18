import { Router, type Router as RouterType } from 'express';
import { authController } from '@/controllers/auth.controller.js';
import { validate } from '@/middlewares/validation.middleware.js';
import {
  sendOtpSchema,
  verifyOtpSchema,
  loginSchema,
  refreshTokenSchema,
} from '@/validations/auth.validation.js';

const router: RouterType = Router();

/**
 * @openapi
 * /auth/otp/request:
 *   post:
 *     tags: [Auth]
 *     summary: Request an OTP code for a phone number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [phone]
 *             properties:
 *               phone: { type: string, example: "09121234567" }
 *     responses:
 *       200:
 *         description: OTP sent
 *       400:
 *         description: Cooldown active or invalid phone
 */
router.post('/otp/request', validate(sendOtpSchema), authController.requestOtp);

/**
 * @openapi
 * /auth/otp/verify:
 *   post:
 *     tags: [Auth]
 *     summary: Verify OTP code and login or register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [phone, code]
 *             properties:
 *               phone: { type: string, example: "09121234567" }
 *               code: { type: string, example: "12345" }
 *               name: { type: string, example: "Sina" }
 *     responses:
 *       200:
 *         description: Authenticated successfully, sets refreshToken httpOnly cookie
 *       400:
 *         description: Invalid or expired code
 */
router.post('/otp/verify', validate(verifyOtpSchema), authController.verifyOtp);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Authenticated successfully, sets refreshToken httpOnly cookie
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', validate(loginSchema), authController.login);

/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     tags: [Auth]
 *     summary: Rotate refresh token and issue a new access token (reads refreshToken cookie)
 *     responses:
 *       200:
 *         description: New tokens issued
 *       401:
 *         description: Refresh token missing, invalid, or expired
 */
router.post('/refresh', validate(refreshTokenSchema), authController.refresh);

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Revoke the current refresh token and clear the cookie
 *     responses:
 *       204:
 *         description: Logged out
 */
router.post('/logout', authController.logout);

export default router;
