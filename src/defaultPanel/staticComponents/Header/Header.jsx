import style from "./Header.module.css";
import Nav from "./Nav/Nav";
import imgLibrary from "../../assets/images/biblioteka.jpg";

const Header = () => {
    return (
        <div className={style.container}>
            <h1>Little Belle Adventures</h1>
            <Nav/>
            <img src={imgLibrary} alt=""/>
        </div>
    )
}
export default Header;
