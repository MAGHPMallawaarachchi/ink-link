import { useParams } from "react-router-dom";
import articles from "../constants/article-content";

const Article = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    if (!article) return <h1>Article does not exist!</h1>;

    return (
        <div className="max-w-[720px] m-auto flex flex-col items-start py-10">
            <h1 className="font-bold text-3xl pb-6">{article.title}</h1>
            {
                article.content.map((paragraph, key) => (
                    <p className="text-justify font-medium mb-4" key={key}>{paragraph}</p>
                ))
            }
        </div>
    );
}

export default Article;