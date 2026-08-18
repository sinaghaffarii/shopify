import { Router, type Router as RouterType } from 'express';
import userRoutes from '@/routes/user.routes.js';
import authRoutes from '@/routes/auth.routes.js';

const router: RouterType = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
