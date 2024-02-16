import style from "./AccessibilityDeclaration.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUniversalAccess} from "@fortawesome/free-solid-svg-icons";

const AccessibilityDeclaration = () => {
    return (
        <div className={style.container}>
            <FontAwesomeIcon icon={faUniversalAccess} className={style.accessibilityIcon}/>
            <span> AccessibilityDeclaration</span>
        </div>
    )
}
export default AccessibilityDeclaration;
