import Header from "./staticComponents/Header/Header";
import ContainerForArticlesAndAside from "./staticComponents/ContainerForArticlesAndAside/ContainerForArticlesAndAside";
import Footer from "./staticComponents/Footer/Footer";
import ContainerForBlockOfLinksToSites
    from "./staticComponents/ContainerForBlockOfLinksToSites/ContainerForBlockOfLinksToSites";
import ArrowToTop from "./components/ArrowToTop/ArrowToTop";

const DefaultPanel = () => {
    return (
        <div>
            <Header/>
            <ContainerForArticlesAndAside/>
            <ContainerForBlockOfLinksToSites/>
            <Footer/>
            <ArrowToTop/>
        </div>
    );
};
export default DefaultPanel;
