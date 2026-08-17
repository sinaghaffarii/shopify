import express, { type Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { apiRateLimiter } from '@/middlewares/rate-limit.middleware.js';
import routes from '@/routes/index.js';
import { notFoundMiddleware } from '@/middlewares/not-found.middleware.js';
import { errorMiddleware } from '@/middlewares/error.middleware.js';

const app: Express = express();

// App Securitya
app.disable('x-powered-by');

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Body Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Rate Limit
app.use('/api', apiRateLimiter);

// Routes
app.use('/api/v1', routes);

// 404 Not Found
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);

export default app;
