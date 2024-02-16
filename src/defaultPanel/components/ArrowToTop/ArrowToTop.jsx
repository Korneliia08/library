import style from "./ArrowToTop.module.css";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

const ArrowToTop = () => {
    const [arrowToTop, setArrowToTop] = useState(false);

    function checkY() {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setArrowToTop(true);
                return;
            }
            setArrowToTop(false);
        });
    }

    useEffect(() => {
        document.addEventListener("scroll", checkY)

        return () => {
            document.removeEventListener("scroll", checkY)
        };
    }, []);
    return (
        <div className={style.container} style={{bottom: arrowToTop ? "50px" : "-250px"}}>
            <FontAwesomeIcon icon={faArrowUp} className={style.arrowToTopIcon}/>
        </div>
    )

}
export default ArrowToTop;
