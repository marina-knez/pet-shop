import { Fragment } from 'react';
import Directory from '../../components/directory/directory.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import Widget from '../../components/widget/widget.component';
import ReviewsSection from '../../components/reviews-section/reviews-section.component';
import PuppyGuide from '../../components/puppy-guide/puppy-guide.component';

const Home = () => {
    return (
        <Fragment>
            <HeroSection />
            <Widget />
            <Directory />
            <ReviewsSection />
            <PuppyGuide />
        </Fragment>
    )
}

export default Home;