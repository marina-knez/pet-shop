import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className='nav-container'>
                <Link to='/'>
                    LOGO
                </Link>
            </div>
            <div className='nav-links'>
                <Link to='/shop'>SHOP</Link>
                <Link to='/guide'>PUPPY GUIDE</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/contact'>CONTACT</Link>
                <span>CART</span>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;                  