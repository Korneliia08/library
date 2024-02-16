import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Nav = () => {
    return (
        <div className={style.container}>
            <Link to="">Home</Link>
            <Link to="">Documents</Link>
            <Link to="">RODO</Link>
            <Link to="">Library</Link>
            <Link to="">Library branches</Link>
            <Link to="">Galleries</Link>
            <HashLink smooth to="#footer">Contact</HashLink>
        </div>
    )
}
export default Nav;
