import style from "./ContainerForArticlesAndAside.module.css";
import Articles from "./Articles/Articles";
import Aside from "./Aside/Aside";

const ContainerForArticlesAndAside = () => {
    return (
        <div className={style.container}>
            <Articles/>
            <Aside></Aside>
        </div>
    )
}
export default ContainerForArticlesAndAside;
