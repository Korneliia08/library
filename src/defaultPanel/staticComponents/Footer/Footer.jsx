import style from "./Footer.module.css";
import SocialMedias from "./SocialMedias/SocialMedias";
import Address from "./Address/Address";
import Contact from "./Contact/Contact";

const Footer = () => {
    return (
        <div className={style.container} id="footer">
            <div className={style.blockForCards}>
                <SocialMedias/>
                <Address/>
                <Contact/>
            </div>
            <span className={style.spanPoweredBy}>© 2035 by Little Belle Adventures. Powered and secured by Wix</span>
        </div>
    )
}
export default Footer;
