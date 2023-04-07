import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export const categories = [
    {
        id: 1,
        title: "Food",
        imageUrl: "/assets/directory-cover-photo/dog-food.jpg",
        route: "shop/food"
    },
    {
        id: 2,
        title: "Bowls",
        imageUrl: "/assets/directory-cover-photo/dog-bowl.jpg",
        route: "shop/bowls"
    },
    {
        id: 3,
        title: "Beds",
        imageUrl: "/assets/directory-cover-photo/dog-beds.jpg",
        route: "shop/beds"
    },
    {
        id: 4,
        title: "Toys",
        imageUrl: "/assets/directory-cover-photo/dog-toys.jpg",
        route: "shop/toys"
    },
    {
        id: 5,
        title: "Hygiene",
        imageUrl: "/assets/directory-cover-photo/dog-hygiene.jpg",
        route: "shop/hygiene"
    }
]

export const Directory = () => {

    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory;