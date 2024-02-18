import style from "./OpeningHours.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import Day from "./Day/Day";

const OpeningHours = () => {
    const allDays = useSelector(state => state.openingHours.openingHours);
    //console.log(allDays);
    //   const day = allDays.map((day, index) => <Day data={day} key={index}/>);
    if (!allDays) return ''
    console.log(allDays);
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Godziny otwarcia:</h4>
                <FontAwesomeIcon icon={faClock} className={style.iconClock}/>
            </div>
            <div className={style.containerForDays}>
                <Day data={allDays.monday} whichDay={"Poniedziałek"}/>
                <Day data={allDays.tuesday} whichDay={"Wtorek"}/>
                <Day data={allDays.wednesday} whichDay={"Środa"}/>
                <Day data={allDays.thursday} whichDay={"Czwartek"}/>
                <Day data={allDays.friday} whichDay={"Piątek"}/>
                <Day data={allDays.saturday} whichDay={"Sobota"}/>
                <Day data={allDays.sunday} whichDay={"Niedziela"}/>
            </div>
        </div>
    )
}
export default OpeningHours;
