import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
    return(
        <>
        {
            articles.map(article => (
                <div className="flex flex-col items-start py-6 border-b-2 border-black">
                    <Link key={article.name} to={`/articles/${article.name}`}><h2 className="font-bold pb-3 text-xl">{article.title}</h2></Link>
                    <p className="text-left font-medium">{article.content[0].substring(0, 150)}...</p>
                </div>
            ))
        }
        </>
    );
}

export default ArticleList;