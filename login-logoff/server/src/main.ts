import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import { LoggerMiddleware } from './middleware/logger.midleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(helmet());
  app.use(cookieParser());
  app.use(new LoggerMiddleware().use);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
