import style from "./CardOfArticle.module.css";
import imageOfArticle from "../../../../assets/images/biblioteka.jpg";

const CardOfArticle = () => {
    return (
        <div className={style.container}>
            <img src={imageOfArticle} alt=""/>
            <div className={style.blockForTimePublishedAndCategory}>
                <span>Category: news</span>
                <span>Published: 15.02.2024</span>
            </div>
            <div className={style.blockForTitleAndShortDescriptionOfArticle}>
                <h3 className="titleOfArticle">Hot news</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem delectus doloribus ducimus eaque
                    eligendi error esse explicabo ipsum laboriosam laborum, magnam nam non numquam, odit officiis quae
                    quam quos reiciendis, suscipit ut vel voluptate voluptatum. Accusamus commodi corporis dicta dolorum
                    explicabo facere fuga id, iusto praesentium repellat rerum sed.</p>
            </div>
        </div>
    )
}
export default CardOfArticle;
