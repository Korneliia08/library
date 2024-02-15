import style from "./LinkToBooks.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";

const LinkToBooks = () => {
    return (
        <div className={style.container}>
            <FontAwesomeIcon icon={faBook} className={style.bookIcon}/>
            <span>Catalog</span>
        </div>
    )
}
export default LinkToBooks;
