import sdk from './tracer';
sdk.start();
import { log } from './infra/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3001)
    .then(() => {
      log.info('Aplicação 01 iniciada com sucesso!');
    })
    .catch(() => {
      log.error('Não foi possivél iniciar a Aplicação 01!');
    });
}
bootstrap();