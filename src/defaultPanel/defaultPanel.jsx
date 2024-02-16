import Header from "./staticComponents/Header/Header";
import ContainerForArticlesAndAside from "./staticComponents/ContainerForArticlesAndAside/ContainerForArticlesAndAside";
import Footer from "./staticComponents/Footer/Footer";
import ContainerForBlockOfLinksToSites
    from "./staticComponents/ContainerForBlockOfLinksToSites/ContainerForBlockOfLinksToSites";

const DefaultPanel = () => {
    return (
        <div>
            <Header/>
            <ContainerForArticlesAndAside/>
            <ContainerForBlockOfLinksToSites/>
            <Footer/>
        </div>
    );
};
export default DefaultPanel;
