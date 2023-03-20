import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Article } from './articles/article.entity';
import { ArticleModule } from './articles/article.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'db',
    port: +process.env.DB_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadModels: true,
    synchronize: true,
    models: [Article],
  }),
    ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
