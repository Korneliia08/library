import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "./components/ArrowToTop/ArrowToTop";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useEffect} from "react";
import {setArticles} from "../data/reducers/articleReducer";
import {setOpeningHours} from "../data/reducers/openingHoursReducer";

const DefaultPanel = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios("http://10.68.6.106:8080/libApi/index.php/pre_articles").then(
            (response) => {
                dispatch(setArticles(response.data.data));
            }
        );
        axios("http://10.68.6.106:8080/libApi/index.php/pre_openHours").then(
            (response) => {
                console.log(response.data.data);
                dispatch(setOpeningHours(response.data.data));

            }
        )
    }, []);
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
