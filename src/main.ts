import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //allow request based on dto
      transform: true, //to convert request data to proper data type based on dto
      forbidNonWhitelisted: true //reject unknown data
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
