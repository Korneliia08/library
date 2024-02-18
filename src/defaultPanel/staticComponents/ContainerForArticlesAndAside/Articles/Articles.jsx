import style from "./Articles.module.css";
import CardOfArticle from "./CardOfArticle/CardOfArticle";
import {useSelector} from "react-redux";

const Articles = () => {
    const allArticles = useSelector(state => state.articles.articles);
    const articleCard = allArticles.map((article, index) => <CardOfArticle data={article} key={index}/>);
    return (
        <div className={style.container}>
            {articleCard}
            <button className="btnReadMore">Read more</button>
        </div>
    )
}
export default Articles;
