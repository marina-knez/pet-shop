import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 100px;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 250px;
    padding: 15px 0 0 25px;

    & svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;
`

export const NavLink = styled(Link)`
    padding: 25px 15px 10px;
    cursor: pointer;
    font-size: 1.2rem;
`

