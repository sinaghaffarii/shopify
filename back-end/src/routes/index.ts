import { Router } from 'express';

const router: Router = Router();

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy',
  });
});

export default router;
