import Slider from '../slider/slider.component';

import { ReviewsSliderContainer, ReviewsSliderBody, ReviewsSliderBodyLeft, SliderBodyTextName, SliderBodyTextTitle, SliderBodyTextSubtitle } from './reviews-section.styles';

export type Review = {
    id: number;
    name: string;
    title: string;
    quote: string;
  };

export const reviews: Review[] = [
    {
        id: 1,
        name: "Slađana N.",
        title: "Member of the SIMBA club",
        quote: "Kind salespeople who are a great help in choosing food and other items for pets."
    },
    {
        id: 2,
        name: "Dražen A.",
        title: "Dog lover",
        quote: "Nothing to say about it. The staff is kind, always asking if assistance is needed, constantly working, and providing excellent service. The store is equipped with various merchandise, lots of items, and everything is easily visible. All praise!"
    },
    {
        id: 4,
        name: "Amalia H.",
        title: "Dog lover",
        quote: "The employees are very knowledgeable and friendly, and the store has the best quality items."
    },
    {
        id: 5,
        name: "Mirjana V.",
        title: "Dog lover",
        quote: "Excellent staff, the manager is a true queen, and every pet feels wonderful with her... all the praise..."
    },
    {
        id: 6,
        name: "Biserka I.",
        title: "Dog lover",
        quote: "From ordering to the delivery of food for my dog, only one day has passed. All the praise for Roberta for her kindness, efficiency, and delivery speed. Congratulations also on the organization of the business, although this should be normal nowadays, we often encounter various difficulties, meaningless excuses, and endless waiting, but it takes good will, a little effort, and everything would be fine"
    },
    {
        id: 7,
        name: "Mateja K.",
        title: "Dog lover",
        quote: "Kind employee, showed and guided us through everything! We received excellent advice and even had a little lecture about the animal world!"
    }
]

const ReviewsSection = () => {

    return (
        <ReviewsSliderContainer>
            <ReviewsSliderBodyLeft>
                <SliderBodyTextName>What do they say about us?</SliderBodyTextName>
                <SliderBodyTextTitle>Satisfied people mean satisfied pets</SliderBodyTextTitle>
                <SliderBodyTextSubtitle>A few words and impressions from happy owners of even happier pets.</SliderBodyTextSubtitle>
            </ReviewsSliderBodyLeft>
            <ReviewsSliderBody>
                <Slider data={reviews} hero={false} showDots={false} showArrows={true} />
            </ReviewsSliderBody>
        </ReviewsSliderContainer>
    )
}

export default ReviewsSection;