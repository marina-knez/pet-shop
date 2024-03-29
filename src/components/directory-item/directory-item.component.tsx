import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, DirectoryItemBody, BackgroundImage } from "./directory-item.styles";

export type CategoryProps = {
    category: {
        title: string;
        imageUrl: string;
        route: string;
    };
};

const DirectoryItem = ({ category }: CategoryProps) => {

    const { title, imageUrl, route } = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;