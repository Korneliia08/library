import style from "./Nav.module.css";
import {Link, useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useEffect, useState} from "react";

const Nav = () => {
    const navigate = useNavigate();
    const [navFixed, setNavFixed] = useState(false);

    function checkY() {
        if (window.pageYOffset > 0) {
            setNavFixed(true);
            return;
        }
        setNavFixed(false);
    }

    useEffect(() => {
        document.addEventListener("scroll", checkY);
        return () => {
            document.removeEventListener("scroll", checkY);
        }
    }, []);

    function desplayChoosedOption(event) {
        console.log(event.target.valueOf);
        navigate("/subPage");
    }

    return (
        <div className={style.container} onClick={desplayChoosedOption}
             style={{position: navFixed ? "fixed" : ""}}>
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
    )
}
export default Nav;
