import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow all origins for development
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
  console.log(`API running at http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
