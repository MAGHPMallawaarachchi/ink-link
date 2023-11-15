import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../constants/article-content";
import NotFound from "./NotFound";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";

const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articleId } = useParams();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        if (isLoading) {
            loadArticleInfo();
        }
    }, [isLoading, user, articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    
    if (!article) return <NotFound/>;

    return (
        <div className="max-w-[720px] m-auto flex flex-col items-start py-10">
            <h1 className="pb-6 text-3xl font-bold">{article.title}</h1>
            <div className="flex flex-row items-center gap-1 mb-4">
                {user
                    ? <button onClick={addUpvote}>{canUpvote ? <FaRegHeart/> : <FaHeart/>}</button>
                    : <FaRegHeart/>
                }
                <h4 className="text-lg font-bold">{articleInfo.upvotes}</h4>
            </div>
            {
                article.content.map((paragraph, key) => (
                    <p className="mb-4 font-medium text-justify" key={key}>{paragraph}</p>
                ))
            }
            <div className="h-8"></div>
            {user
                ? <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
                : <Link to="/login" className="px-2 py-1 text-white bg-black rounded-md">Login to Comment</Link>
            }
            <div className="h-6"></div>
            <CommentsList comments={articleInfo.comments}/>
        </div>
    );
}

export default Article;