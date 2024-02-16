import style from "./Aside.module.css";
import Clock from "./Clock/Clock";
import OpeningHours from "./OpeningHours/OpeningHours";
import LinkToBooks from "./LinkToBooks/LinkToBooks";
import AccessibilityDeclaration from "./AccessibilityDeclaration/AccessibilityDeclaration";
import CounterVisit from "./CounterVisit/CounterVisit";

const Aside = () => {
    return (
        <div className={style.container}>
            <Clock/>
            <OpeningHours/>
            <LinkToBooks/>
            <CounterVisit/>
            <AccessibilityDeclaration/>
        </div>
    )
}
export default Aside;
