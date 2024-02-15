import style from "./Articles.module.css";
import CardOfArticle from "./CardOfArticle/CardOfArticle";

const Articles = () => {
    return (
        <div className={style.container}>
            <h2 className="titleOfHeading">Articles</h2>
            <CardOfArticle/>
            <CardOfArticle/>
            <CardOfArticle/>
        </div>
    )
}
export default Articles;