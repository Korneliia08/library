import Nav from "./Nav/Nav";
import imgLibrary from "../../assets/images/biblioteka.jpg";
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Little Belle Adventures</h1>
            <Nav/>
            <img src={imgLibrary} alt=""/>
        </div>
    )
}
export default Header;
