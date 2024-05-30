import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true, // usted puede enviar tal cosa
    forbidNonWhitelisted: true, // si usted me envía más no se la acepto y marco error
    transform: true,
  })
  );
  const config = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('Una descripción de la API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
