import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticle } from "../../services/articles";
import { IArticle } from "../../types/article.interface";
import { parseDate } from "../../utils";
import { PreviousPage } from "./Previous.page";

export const Article = () => {
    const [article, setArticles] = useState<IArticle>();
    const { id } = useParams();
    useEffect(() => {
        if (id) fetchArticle(id).then(({ data }) => {
            setArticles(data);
        });

    }, [id]);
    return (
        <>
            <PreviousPage />
            <div className="max-w-lg mx-auto">
                <h1 className="font-bold uppercase">Article Details</h1>
                <ul className="mt-5 flex flex-col gap-3 font-semibold">
                    <li>
                        Title: <span className="font-light">{article?.title}</span>
                    </li>
                    <li>
                        Body: <span className="font-light">{article?.body}</span>
                    </li>
                    <li>
                        Create: <span className="font-light">{parseDate(article?.createdAt)}</span>
                    </li>
                    <li>
                        Last Update: <span className="font-light">{parseDate(article?.updatedAt)}</span>
                    </li>
                </ul>

            </div>
        </>)
}