import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleController } from "./article.controller";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
@Module({
    imports:[SequelizeModule.forFeature([Article])],
    controllers:[ArticleController],
    exports:[SequelizeModule],
    providers:[ArticleService]
})
export class ArticleModule{}