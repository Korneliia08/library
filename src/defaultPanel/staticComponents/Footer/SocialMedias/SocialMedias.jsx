import style from "./SocialMedias.module.css";
import {faFacebook, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialMedias = () => {
    return (
        <div className={style.container}>
            <h4>Social Medias</h4>
            <div className={style.blockForIcons}>
                <FontAwesomeIcon icon={faFacebook} className={style.iconFb}/>
                <FontAwesomeIcon icon={faSquareFacebook} className={style.iconFb}/>
            </div>
        </div>
    )
}
export default SocialMedias;
