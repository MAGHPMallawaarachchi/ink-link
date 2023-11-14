import { Link } from "react-router-dom";
import articles from "../constants/article-content";

const ArticlesList = () => {
    return (
        <div className="flex flex-col items-start max-w-[720px] m-auto py-10">
            <h1 className="font-bold text-3xl">Articles</h1>
            {
                articles.map(article => (
                    <div className="flex flex-col items-start py-6 border-b-2 border-black">
                        <Link key={article.name} to={`/articles/${article.name}`}><h2 className="font-bold pb-3 text-xl">{article.title}</h2></Link>
                        <p className="text-left font-medium">{article.content[0].substring(0, 150)}...</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ArticlesList;