import style from "./Aside.module.css";
import Clock from "./Clock/Clock";
import OpeningHours from "./OpeningHours/OpeningHours";
import LinkToBooks from "./LinkToBooks/LinkToBooks";
import OldImage from "./OldImage/OldImage";

const Aside = () => {
    return (
        <div className={style.container}>
            <Clock/>
            <OpeningHours/>
            <LinkToBooks/>
            <OldImage/>
        </div>
    )
}
export default Aside;
