import {  IsNotEmpty } from 'class-validator';
export class ArticleDTO{
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    body:string;
}