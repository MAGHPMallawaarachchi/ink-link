import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../constants/article-content";
import NotFound from "./NotFound";
import axios from "axios";

const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        fetchData();
    }, [articleId]);

    const article = articles.find(article => article.name === articleId);
    
    if (!article) return <NotFound/>;

    return (
        <div className="max-w-[720px] m-auto flex flex-col items-start py-10">
            <h1 className="pb-6 text-3xl font-bold">{article.title}</h1>
            <h3 className="mb-2 font-medium text-left">This article has {articleInfo.upvotes} upvote(s)</h3>
            {
                article.content.map((paragraph, key) => (
                    <p className="mb-4 font-medium text-justify" key={key}>{paragraph}</p>
                ))
            }
        </div>
    );
}

export default Article;