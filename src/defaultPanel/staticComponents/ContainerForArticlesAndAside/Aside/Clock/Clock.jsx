import style from "./Clock.module.css";
import {useEffect, useState} from "react";

const Clock = () => {
    const [hourFirstPart, setHourFirstPart] = useState();
    const [hourSecondPart, setHourSecondPart] = useState();

    const [minuteFirstPart, setMinuteFirstPart] = useState();
    const [minuteSecondPart, setMinuteSecondPart] = useState();

    const [secondFirstPart, setSecondFirstPart] = useState();
    const [secondSecondPart, setSecondSecondPart] = useState();

    useEffect(() => {
        const intervalFunction = setInterval(startTime, 1000);
        return () => {
            clearInterval(intervalFunction)
        }
    }, []);

    function startTime() {
        const time = new Date();

        const hour = checkTime(time.getHours());
        const minute = checkTime(time.getMinutes());
        const correctSecond = checkTime(time.getSeconds());

        setHourFirstPart(hour.toString().slice(0, 1));
        setHourSecondPart(hour.toString().slice(1, 2));

        setMinuteFirstPart(minute.toString().slice(0, 1));
        setMinuteSecondPart(minute.toString().slice(1, 2));

        setSecondFirstPart(correctSecond.toString().slice(0, 1));
        setSecondSecondPart(correctSecond.toString().slice(1, 2));
    }

    function checkTime(i) {
        if (i < 10) {
            return "0" + i;
        }
        return i
    }


    return (
        <div className={style.container}>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>{hourFirstPart}</div>
                <div className={style.blockForNumber}>{hourSecondPart}</div>
            </div>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>{minuteFirstPart}</div>
                <div className={style.blockForNumber}>{minuteSecondPart}</div>
            </div>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>{secondFirstPart}</div>
                <div className={style.blockForNumber}>{secondSecondPart}</div>
            </div>
        </div>
    )
}
export default Clock;
