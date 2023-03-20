import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ArticleDTO } from "./article.dto";
import { Article } from "./article.entity";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article)
        private articleModal: typeof Article
    ) { }
    fetchAllArticle(): Promise<Article[]> {
        return this.articleModal.findAll()
    }
    createArticle(article: ArticleDTO): Promise<Article> {
        return this.articleModal.create(article)
    }

    showArticle(id: string): Promise<Article> {
        return this.articleModal.findOne({ where: { id } })
    }
    updateArticle(id: string, article: Article):Promise<number[]> {
        return this.articleModal.update(article, { where: { id } });
    }

    deleteArticle(id:string){
        return this.articleModal.destroy({ where: { id } });
    }
}