import { DirectoryItemContainer, BgImg, DirectoryBody } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BgImg style={{ backgroundImage: `url(${imageUrl})`}} />
            <DirectoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;