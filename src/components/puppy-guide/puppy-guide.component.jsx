import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PuppyGuideSectionContainer, PuppyGuideSectionLeft, PuppyGuideTitle, PuppyGuideSubtitle, PuppyGuideSectionRight, NavLink } from './puppy-guide.styles';

const PuppyGuide = () => {

    return (
        <PuppyGuideSectionContainer>
            <PuppyGuideSectionLeft>
                <p>Learn more about your little friend.</p>
                <PuppyGuideTitle>Puppy Guide</PuppyGuideTitle>
                <PuppyGuideSubtitle>Tips and recommendations for the first days of living with a puppy.</PuppyGuideSubtitle>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}className="button">
                    <NavLink to='/guide'>READ MORE</NavLink>
                </Button>
            </PuppyGuideSectionLeft>
            <PuppyGuideSectionRight>
                <img src="/assets/puppy.png" alt="puppy" title="puppy" />
            </PuppyGuideSectionRight>
        </PuppyGuideSectionContainer>
    )
}

export default PuppyGuide;