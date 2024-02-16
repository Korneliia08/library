import style from "./OpeningHours.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const OpeningHours = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Opening Hours</h4>
                <FontAwesomeIcon icon={faClock} className={style.iconClock}/>
            </div>
            <div className={style.day}>
                <span>Monday:</span>
                <span>08:00 -</span>
                <span>18:00</span>
            </div>
            <div className={style.day}>
                <span>Tuesday:</span>
                <span>09:00 -</span>
                <span>18:00</span>
            </div>
            <div className={style.day}>
                <span>Wednesday:</span>
                <span>10:00 -</span>
                <span>18:00</span>
            </div>
            <div className={style.day}>
                <span>Thursday:</span>
                <span>08:00 -</span>
                <span>20:00</span>
            </div>
            <div className={style.day}>
                <span>Friday:</span>
                <span>08:00 -</span>
                <span>18:00</span>
            </div>
            <div className={style.day}>
                <span>Saturday:</span>
                <span>closed</span>
            </div>
            <div className={style.day}>
                <span>Sunday:</span>
                <span>closed</span>
            </div>
        </div>
    )
}
export default OpeningHours;
