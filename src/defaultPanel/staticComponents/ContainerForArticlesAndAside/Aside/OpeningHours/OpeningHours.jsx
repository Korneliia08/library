import style from "./OpeningHours.module.css";

const OpeningHours = () => {
    return (
        <div className={style.container}>
            <h4>Opening Hours</h4>
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
