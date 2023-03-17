import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    LOGO
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='/guide'>PUPPY GUIDE</NavLink>
                    <NavLink to='/about'>ABOUT US</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    <span>CART</span>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;                  