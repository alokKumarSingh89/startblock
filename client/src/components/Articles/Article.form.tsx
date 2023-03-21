import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as yup from 'yup';

import { IArticle, IArticleForm } from '../../types/article.interface';
import { createArticles, fetchArticle, updateArticle } from '../../services/articles';
import { PreviousPage } from './Previous.page';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    body: yup.string().required('Body is required'),
}).required();

export const ArticleForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [article,setArticles] = useState<IArticle>();
    const { register, handleSubmit, resetField, setValue ,formState: { errors } } = useForm<IArticleForm>({ resolver: yupResolver(schema) });
    useEffect(()=>{
        if(id){
            fetchArticle(id).then(({data})=>{
                setArticles(data);
                setValue('title', data.title);
                setValue('body', data.body);
            });
        }
    },[id]);

    
    const handleSubmitAction = (data: IArticleForm) => {
        if(id){
            updateArticle(id,{...article, ...data}).then(() => {
                navigate("/");
            }).catch(alert);
        }else{
            createArticles(data).then(res => {
                if (res.status === 201) {
                    navigate("/");
                } else {
                    alert(res.data.message);
                }
            }).catch(alert);
        }
        
    }
    return (
        <>
            <PreviousPage/>
            <div className='mt-10 max-w-lg mx-auto border-2 rounded-lg'>

                <form onSubmit={handleSubmit(handleSubmitAction)} className="flex flex-col p-10 bg-gray-200 gap-4 ">
                    <div className='flex flex-col'>
                        <input placeholder='Please enter title' {...register('title')} className={`${errors.title ? 'border-red-500' : 'border-gray-400'} border-2 p-2 rounded-xl`} />
                        {errors.title && <p className='text-red-500 font-extralight pt-1 pl-1'>Title is required.</p>}
                    </div>
                    <div className='flex flex-col mt-2'>
                        <textarea rows={10} style={{'resize':'none'}} placeholder='Please enter body' {...register('body')} className={`${errors.body ? 'border-red-500' : 'border-gray-400'} border-2 p-2 rounded-xl`} />
                        {errors.body && <p className='text-red-500 font-extralight pt-1 pl-1'>body is required.</p>}
                    </div>

                    <input type="submit" className='bg-indigo-600 w-1/2 p-3 text-white rounded-lg mx-auto cursor-pointer border-2 border-indigo-700' />
                </form>
            </div>
        </>
    )
}