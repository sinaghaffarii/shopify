import app from '@/app.js';

const PORT = process.env.PORT ?? 4000;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const shutdown = (signal: string) => {
  console.log(`${signal} recived. Shutting down...`);

  server.close(() => {
    console.log('HTTP Server Closed.');
    process.exit(0);
  });
};

process.on('SIGINT', () => {
  shutdown('SIGINT');
});

process.on('SIGTERM', () => {
  shutdown('SIGTERM');
});
