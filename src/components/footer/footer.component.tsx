import { ReactComponent as SimbaLogo } from '../../assets/logo/simba-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, FooterLogoContainer, FooterSection, SocialMediaFooterSection } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterLogoContainer to='/'>
                    <SimbaLogo className="logo" />
                </FooterLogoContainer>
            </FooterSection>
            <FooterSection>
                <img src='/assets/husky-puppy.jpg' alt='husky-puppy' title='husky-puppy' />
            </FooterSection>
            <SocialMediaFooterSection>
                <a href="https://www.facebook.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            </SocialMediaFooterSection>
        </FooterContainer>
    )
}

export default Footer;