import express, { type Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { apiRateLimiter } from '@/middlewares/rate-limit.middleware.js';
import routes from '@/routes/index.js';
import { notFoundMiddleware } from '@/middlewares/not-found.middleware.js';
import { errorMiddleware } from '@/middlewares/error.middleware.js';
import { swaggerSpec } from '@/config/swagger.js';
import cookieParser from 'cookie-parser';

const app: Express = express();

// App Security
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
app.use(cookieParser());

// Rate Limit
app.use('/api', apiRateLimiter);

// API Docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api/docs.json', (_req, res) => {
  res.json(swaggerSpec);
});

// Routes
app.use('/api/v1', routes);

// 404 Not Found
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);

export default app;
