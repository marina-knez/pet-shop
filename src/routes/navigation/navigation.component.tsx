import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as SimbaLogo } from '../../assets/logo/simba-logo.svg';

import { NavigationContainer, LogoContainer, NavLinks, NavLink, MenuIconContainer } from './navigation.styles';

const Navigation = () => {
    const  isCartOpen  = useSelector(selectIsCartOpen);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <SimbaLogo className="logo" />
                </LogoContainer>
                <NavLinks className={isMenuOpen ? "active" : "navbar"} >
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='/guide'>PUPPY GUIDE</NavLink>
                    <NavLink to='/about'>ABOUT US</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                </NavLinks>
                <CartIcon />
                {
                    isCartOpen && <CartDropdown />
                }
                <MenuIconContainer onClick={toggleIsMenuOpen}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </MenuIconContainer>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;                  