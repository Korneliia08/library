import style from "./Aside.module.css";
import Clock from "../Clock/Clock";

const Aside = () => {
    return (
        <div className={style.container}>
            <Clock/>
        </div>
    )
}
export default Aside;
