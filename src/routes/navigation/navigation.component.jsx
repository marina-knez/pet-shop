import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as SimbaLogo } from '../../assets/logo/simba-logo.svg';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    const { isCartOpen } = useContext(CartContext);

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
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;                  