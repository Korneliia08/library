import style from "./CardOfArticle.module.css";
import imageOfArticle from "../../../../assets/images/biblioteka.jpg";
import {maxLenght} from "../../../../../pipes/maxLenght";

const CardOfArticle = (props) => {
    const data = props.data;
    return (
        <div className={style.container}>
            <img src={imageOfArticle} alt=""/>
            <div className={style.blockForTimePublishedAndCategory}>
                <span className="spanCategoryAndWhenPublished">Kategoria: {data.category}</span>
                <span className="spanCategoryAndWhenPublished">Opublikowano: {data.publish_date}</span>
            </div>
            <div className={style.blockForTitleAndShortDescriptionOfArticle}>
                <h3 className="titleOfArticle">{data.title}</h3>
                <p className="contentInArticle" dangerouslySetInnerHTML={{__html: maxLenght(data.body, 525)}}></p>
            </div>
            <a href="" className={style.btnReamMore}>Czytaj więcej</a>
        </div>
    )
}
export default CardOfArticle;
