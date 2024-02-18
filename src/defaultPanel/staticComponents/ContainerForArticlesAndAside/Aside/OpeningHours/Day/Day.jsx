import style from "./Day.module.css";

const Day = (props) => {
    const data = props.data;
    const whichDay = props.whichDay;
    return (
        <div className={style.container}>
            <h5>{whichDay}:</h5>
            <div className={style.blockForHours}>
                <span>{data.open}</span>
                <span> -</span>
                <span>{data.close}</span>
            </div>
        </div>
    )
}
export default Day;
