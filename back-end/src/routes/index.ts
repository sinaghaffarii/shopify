import { Router, type Router as RouterType } from 'express';
import userRoutes from '@/routes/user.routes.js';

const router: RouterType = Router();

router.use('/users', userRoutes);

export default router;
