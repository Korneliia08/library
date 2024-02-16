import style from "./CounterVisit.module.css";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CounterVisit = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>View counter</h4>
                <FontAwesomeIcon icon={faEye} className={style.eyeIcon}/>
            </div>
            <div className={style.when}>
                <span>Today:</span>
                <span>8</span>
            </div>
            <div className={style.when}>
                <span>Yesterday:</span>
                <span>18</span>
            </div>
            <div className={style.when}>
                <span>This week:</span>
                <span>40</span>
            </div>
            <div className={style.when}>
                <span>This month:</span>
                <span>85</span>
            </div>
            <div className={style.when}>
                <span>This year:</span>
                <span>400</span>
            </div>
        </div>
    )
}
export default CounterVisit;
