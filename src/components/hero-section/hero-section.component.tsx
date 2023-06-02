import Slider from '../slider/slider.component';

import { HeroSliderContainer } from './hero-section.styles';

export type HeroSliderData = {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
    imageTitle: string;
    route: string;
};

export const sliderData: HeroSliderData[] = [
    {
        id: 1,
        title: "You went and got yourself a dog, didn't You?",
        subtitle: "Don't worry. We've got You covered! Best brands in one place",
        imageUrl: "/assets/banner/doggo.jpg",
        imageTitle: "Doggo",
        route: "shop"
    },
    {
        id: 2,
        title: "Sniff...sniff...Your pup needs a bath?",
        subtitle: "Check out our products!",
        imageUrl: "/assets/banner/hygiene-products.jpg",
        imageTitle: "Hygiene products",
        route: "shop/hygiene"
    },
    {
        id: 3,
        title: "Is Your pupperony pizza hungry?",
        subtitle: "We've got the right stuff!",
        imageUrl: "/assets/banner/doggo-food.jpg",
        imageTitle: "Doggo Food",
        route: "shop/food"
    }
]

const HeroSection = () => {

    return (
        <HeroSliderContainer>
            <Slider data={sliderData} hero={true} showDots={true} showArrows={true} />
        </HeroSliderContainer>
    )
}

export default HeroSection;