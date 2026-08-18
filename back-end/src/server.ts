import app from '@/app.js';
import { env } from '@/config/env.js';
import { connectDatabase, disconnectDatabase } from '@/config/database.js';

async function bootstrap(): Promise<void> {
  await connectDatabase();

  const server = app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
  });

  const shutdown = (signal: string) => {
    console.log(`${signal} received. Shutting down...`);

    server.close(async () => {
      console.log('HTTP Server Closed.');
      await disconnectDatabase();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => {
    shutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    shutdown('SIGTERM');
  });
}

bootstrap().catch((error: unknown) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
