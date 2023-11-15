import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../constants/article-content";
import NotFound from "./NotFound";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import { FaHeart } from "react-icons/fa";
import AddCommentForm from "../components/AddCommentForm";

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

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    };
    
    if (!article) return <NotFound/>;

    return (
        <div className="max-w-[720px] m-auto flex flex-col items-start py-10">
            <h1 className="pb-6 text-3xl font-bold">{article.title}</h1>
            <div className="flex flex-row gap-1 mb-4">
                <button onClick={addUpvote}><FaHeart/></button>
                <h4 className="text-lg font-bold">{articleInfo.upvotes}</h4>
            </div>
            {
                article.content.map((paragraph, key) => (
                    <p className="mb-4 font-medium text-justify" key={key}>{paragraph}</p>
                ))
            }
            <div className="h-8"></div>
            <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
            <div className="h-6"></div>
            <CommentsList comments={articleInfo.comments}/>
        </div>
    );
}

export default Article;