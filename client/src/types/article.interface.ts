export interface IArticle{
    id:string;
    title:string;
    body:string;
    createdAt:string;
    updatedAt:string;
}

export type IArticleForm = Pick<IArticle, 'body'|'title'>