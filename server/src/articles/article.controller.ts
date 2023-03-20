import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { ArticleDTO } from "./article.dto";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";

@Controller('articles')
export class ArticleController{
    constructor(private _articleService: ArticleService){}
    @Get()
    index(){
        return this._articleService.fetchAllArticle()
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() article: ArticleDTO){
        return this._articleService.createArticle(article);
    }

    @Get(':id')
    async show(@Param('id') id: string, @Res() res: Response){
        const article = await this._articleService.showArticle(id);
        if(article != null) return article;
        else return res.status(HttpStatus.NOT_FOUND).json({message:'Not Found'});
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() article: Article, @Res() res: Response) {
        try{
            const updateValue = await this._articleService.updateArticle(id, article);
            if(updateValue[0] == 1){
                res.status(HttpStatus.ACCEPTED).json({message:'Updated'})
            }else{
                res.status(HttpStatus.BAD_REQUEST).json({message:'Fail to Update'})
            }
        }catch(error){
            return res.status(HttpStatus.BAD_REQUEST).json({message: error.message});
        }
        
    }

    @Delete(':id')
    async delete(@Param('id') id:string, @Res() res: Response){
        const deletedArticle = await this._articleService.deleteArticle(id);
        if(deletedArticle){
            res.status(HttpStatus.ACCEPTED).json({message:'Deleted'})
        }else{
            res.status(HttpStatus.BAD_REQUEST).json({message:'Fail to Delete'})
        }
    }

}