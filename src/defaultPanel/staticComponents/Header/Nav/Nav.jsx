import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import style from "./Nav.module.css";
import {HashLink} from "react-router-hash-link";

const Nav = () => {
    const navigate = useNavigate();
    const [navFixed, setNavFixed] = useState(false);

    const [heightOfNav, setHeightOfNav] = useState();

    const navElement = useRef();

    function checkY() {
        if (window.pageYOffset > 50) {
            setNavFixed(true);
            return;
        }
        setNavFixed(false);
    }

    useEffect(() => {
        document.addEventListener("scroll", checkY);
        setHeightOfNav(navElement.current.clientHeight);

        return () => {
            document.removeEventListener("scroll", checkY);
        }
    }, []);

    function desplayChoosedOption(event) {
        console.log(event.target.valueOf);
        navigate("/subPage");
    }

    return (
        <>
            <div className={`${style.container} ${navFixed ? style.fixedNav : ""}`} onClick={desplayChoosedOption}
                 style={{position: navFixed ? "fixed" : ""}} ref={navElement}>
                <Link to="">Home</Link>
                <Link to="">Documents</Link>
                <Link to="">RODO</Link>
                <Link to="">Library</Link>
                <Link to="">Library branches</Link>
                <Link to="">Galleries</Link>
                <HashLink smooth to="#footer">Contact</HashLink>

                <Link to="">Library</Link>
                <Link to="">Library branches</Link>
                <Link to="">Galleries</Link>
                <HashLink smooth to="#footer">Contact</HashLink>
                <Link to="">Library</Link>
                <Link to="">Library branches</Link>
                <Link to="">Galleries</Link>
                <HashLink smooth to="#footer">Contact</HashLink>
                <Link to="">Library</Link>
                <Link to="">Library branches</Link>
                <Link to="">Galleries</Link>
                <HashLink smooth to="#footer">Contact</HashLink>
            </div>

            <div className={style.emptyBlock}
                 style={{height: heightOfNav + "px", display: navFixed ? 'block' : 'none'}}></div>
        </>
    )
}
export default Nav;
