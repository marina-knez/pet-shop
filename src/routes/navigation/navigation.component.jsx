import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as SimbaLogo } from '../../assets/logo/simba-logo.svg';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <SimbaLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='/guide'>PUPPY GUIDE</NavLink>
                    <NavLink to='/about'>ABOUT US</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    <CartIcon />
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;                  