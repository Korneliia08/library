import style from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.container}>
            <Link to="">Home</Link>
            <Link to="">Documents</Link>
            <Link to="">RODO</Link>
            <Link to="">Library</Link>
            <Link to="">Library branches</Link>
            <Link to="">Galleries</Link>
            <Link to="">Contact</Link>
        </div>
    )
}
export default Nav;
