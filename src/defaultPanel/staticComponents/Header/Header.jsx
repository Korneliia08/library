import Nav from "./Nav/Nav";
import imgLibrary from "../../assets/images/biblioteka.jpg";
import style from "./Header.module.css";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef, useState} from "react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const menuMobileRef = useRef()
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndNav}>
                <h1 className={style.title}>Little Belle Adventures</h1>
                <div className={style.blockForIconAndTitle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <FontAwesomeIcon icon={faBars} className={style.iconMenu}/>
                    <span>Menu</span>
                </div>
                <Nav/>
            </div>
            <div className={style.mobileMenuContainer}
                 style={{height: mobileMenuOpen ? menuMobileRef.current.clientHeight + 'px' : '0px'}}>
                <div ref={menuMobileRef}>
                    test<br/>
                    test<br/>
                    test<br/>
                    test<br/>
                    test<br/>
                </div>
            </div>
            <img src={imgLibrary} alt=""/>
        </div>
    )
}
export default Header;
