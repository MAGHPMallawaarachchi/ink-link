import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
    return(
        <>
        {
            articles.map(article => (
                <div key={article.name} className="flex flex-col items-start py-6 border-b-2 border-black">
                    <Link to={`/articles/${article.name}`}><h2 className="pb-3 text-xl font-bold">{article.title}</h2></Link>
                    <p className="font-medium text-left">{article.content[0].substring(0, 150)}...</p>
                </div>
            ))
        }
        </>
    );
}

export default ArticleList;