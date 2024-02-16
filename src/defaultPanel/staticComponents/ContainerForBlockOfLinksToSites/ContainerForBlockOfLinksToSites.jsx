import style from "./ContainerForBlockOfLinksToSites.module.css";
import BlockOfLinksToSites from "./BlockOfLinksToSites/BlockOfLinksToSites";

const ContainerForBlockOfLinksToSites = () => {
    return (
        <div className={style.container}>
            <BlockOfLinksToSites/>
        </div>
    )
}
export default ContainerForBlockOfLinksToSites;
