import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for browser clients, including Authorization + credentialed requests.
  app.enableCors({
    origin: process.env.FRONTEND_ORIGIN || true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'Accept',
      'Origin',
      'X-Requested-With',
      'user',
    ],
    exposedHeaders: ['Authorization'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
