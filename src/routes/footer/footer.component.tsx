import { ReactComponent as SimbaLogo } from '../../assets/logo/simba-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, FooterSectionTop, FooterLinkSection, FooterSectionBottom, FooterLogoContainer, FooterLink, FooterSection, SocialMediaFooterSection, Copyright } from './footer.styles';

const Footer = () => {

    return (
        <FooterContainer>
            <FooterSectionTop>
                <FooterLinkSection>
                    <FooterLink to='shop'>
                        SHOP ON OUR WEB:
                    </FooterLink>
                    <FooterLink to='shop/food'>
                        Food
                    </FooterLink>
                    <FooterLink to='shop/bowls'>
                        Bowls
                    </FooterLink>
                    <FooterLink to='shop/beds'>
                        Beds
                    </FooterLink>
                    <FooterLink to='shop/toys'>
                        Toys
                    </FooterLink>
                    <FooterLink to='shop/hygiene'>
                        Hygiene
                    </FooterLink>
                </FooterLinkSection>
                <FooterLinkSection>
                    <img src='/assets/husky-puppy.png' alt='husky-puppy' title='husky-puppy' />
                </FooterLinkSection>
                <FooterLinkSection>
                    <p>
                        LEARN MORE:
                    </p>
                    <FooterLink to='about'>
                        About
                    </FooterLink>
                    <FooterLink to='guide'>
                        Guide
                    </FooterLink>
                    <FooterLink to='contact'>
                        Contact
                    </FooterLink>
                </FooterLinkSection>
            </FooterSectionTop>
            <FooterSectionBottom>
                <FooterSection>
                    <FooterLogoContainer to='/'>
                        <SimbaLogo className="logo" />
                    </FooterLogoContainer>
                </FooterSection>
                <FooterSection>
                    <Copyright>&copy; {new Date().getFullYear()} SIMBA. All rights reserved.</Copyright>
                </FooterSection>
                <SocialMediaFooterSection>
                    <a href="https://www.facebook.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="external noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                </SocialMediaFooterSection>
            </FooterSectionBottom>
        </FooterContainer>
    )
}

export default Footer;