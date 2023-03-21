import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = process.env.whiltelist.split(',');
  console.log(whitelist, "whitelist");
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  });
  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
