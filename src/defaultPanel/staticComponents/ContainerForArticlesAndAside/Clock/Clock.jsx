import style from "./Clock.module.css";

const Clock = () => {
    return (
        <div className={style.container}>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>0</div>
                <div className={style.blockForNumber}>8</div>
            </div>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>5</div>
                <div className={style.blockForNumber}>8</div>
            </div>
            <div className={style.blockNumbers}>
                <div className={style.blockForNumber}>2</div>
                <div className={style.blockForNumber}>4</div>
            </div>
        </div>
    )
}
export default Clock;
