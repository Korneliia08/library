import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "./components/ArrowToTop/ArrowToTop";
import {Outlet} from "react-router-dom";

const DefaultPanel = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
            <Footer/>
            <ArrowToTop/>
        </div>
    );
};
export default DefaultPanel;
