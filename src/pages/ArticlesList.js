import ArticleList from "../components/ArticleList";
import articles from "../constants/article-content";

const ArticlesList = () => {
    return (
        <div className="flex flex-col items-start max-w-[720px] m-auto py-10">
            <h1 className="font-bold text-3xl">Articles</h1>
            <ArticleList articles={articles}/>
        </div>
    );
}

export default ArticlesList;