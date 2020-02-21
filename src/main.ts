import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  const options = new DocumentBuilder()
      .setTitle(`Julien METRAL's Website API`)
      .setDescription(`API used by Julien METRAL's website at the given address : http://julien-metral.fr`)
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false
  });
  SwaggerModule.setup('/docs', app, document);
  const port = process.env.APP_PORT;

  await app.listen(port ? parseInt(port, 10) : 3000);
}
bootstrap().catch(error => console.log(error));
