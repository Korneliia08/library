import Header from "./staticComponents/Header/Header";
import ContainerForArticlesAndAside from "./staticComponents/ContainerForArticlesAndAside/ContainerForArticlesAndAside";
import Footer from "./staticComponents/Footer/Footer";

const DefaultPanel = () => {
    return (
        <div>
            <Header/>
            <ContainerForArticlesAndAside/>
            <Footer/>
        </div>
    );
};
export default DefaultPanel;
