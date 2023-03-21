import { IArticle, IArticleForm } from "../types/article.interface";
import instance from "./axios"

export const getArticleList = async() =>{
    return await instance.get('/articles');
}

export const createArticles = async(data:IArticleForm) =>{
    return await instance.post('/articles', data);
}

export const deleteArticle = async(id: string) =>{
    return await instance.delete('/articles/'+id);
}

export const fetchArticle = async(id: string) =>{
    return await instance.get('/articles/'+id);
}

export const updateArticle = async(id: string, data: Omit<IArticleForm, 'id'|'createdAt'|'updateAt'>) =>{
    return await instance.put('/articles/'+id, data);
}