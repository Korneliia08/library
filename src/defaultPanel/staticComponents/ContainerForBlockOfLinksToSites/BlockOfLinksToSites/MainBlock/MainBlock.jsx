import style from "./MainBlock.module.css";
import line from '../../../../assets/images/line.png'

const MainBlock = () => {
    return (
        <div className={style.container}>
            <img src={line} className={style.line}/>
            <h4 className="titleOfHeading">Links to sites:</h4>
            <span className={style.title}>biuletyn informacji publicznej</span>
            <span className={style.title}>biblioteka narodowa</span>
            <span className={style.title}>narodowy program rozwoju czytelnictwa</span>
            <span className={style.title}>ministerstwo kultury i dziedzictwa narodowego</span>
            <span className={style.title}>podkarpacka biblioteka cyfrowa</span>
            <span className={style.title}>biblioteka portal inny niż wszystkie</span>
            <span className={style.title}>instytut książki</span>
            <span className={style.title}>działaj lojalnie</span>
            <span className={style.title}>strona archiwum 1</span>
            <span className={style.title}>strona archiwum 2</span>
            <span className={style.title}>kab</span>
        </div>
    )
}
export default MainBlock;
