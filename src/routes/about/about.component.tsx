import { Fragment } from "react";
import { AboutPageContainer, AboutPageTitle, AboutPageContent } from "./about.styles";

const About = () => {
    return (
        <Fragment>
            <AboutPageContainer>
                <AboutPageTitle>Who are we?</AboutPageTitle>
                <AboutPageContent>We take care of pets, whether they are big or small, with paws or without them, wings or fins – we love them all equally and most importantly: everything we do, we do out of love for pets. We know that you also love pets, otherwise you wouldn't be here following Simba Pet Shop's work.</AboutPageContent>
                <AboutPageContent><b>But what can we tell you about ourselves?</b></AboutPageContent>
                <AboutPageContent>We are a Croatian company that constantly listens to your needs, as well as the needs of other pet lovers. We continuously work on improvement and education, which is why we have gathered the best team of experts and veterinarians who can provide you with the necessary advice and information for your pet at any time. We are a dynamic and cheerful team that loves and knows its job, continuously learning and striving to use that knowledge to provide everything your pet needs.</AboutPageContent>
                <AboutPageContent>No one dictates what we offer you, we ourselves find and provide high-standard products that you want and your pet needs. In doing so, things don't go "like on an assembly line" with us. We personally inspect the goods we send you and take care of every smallest detail to ensure that you and your best friend are happy.</AboutPageContent>
                <AboutPageContent>We constantly seek new ways to make your purchases easier, which is why we have launched a new webshop so that you can quickly and easily get everything for your pet.</AboutPageContent>
                <AboutPageContent>We enjoy working and communicating with people. Therefore, feel free to reach out to us through our Facebook page, send us an email, or give us a call to work together and ensure everything for your pet.</AboutPageContent>
                <AboutPageContent>Until then, we continue to work and do everything to make our assortment extensive and diverse, and we look forward to soon meeting your furry friend in one of our stores.</AboutPageContent>
                <AboutPageContent>Yours,</AboutPageContent>
                <AboutPageContent>Simba Pet Shop</AboutPageContent>
            </AboutPageContainer>
        </Fragment>
    )
};

export default About;