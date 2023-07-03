import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;

    @media screen and (max-width: 1024px) {
        height: 350px;
        width: 50%;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        transition: right .3s;

        &.active {
            right: 0;
        }

        &.navbar {
            right: -50%;
        }
    }

    @media screen and (max-width: 1024px) {
        height: 95vh;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 25px;
        z-index: 1;
        background-color: rgb(242, 240, 161);
        position: absolute;
        right: 0;
        top: 100px;
    }
`

export const NavLink = styled(Link)`
    padding: 25px 25px 10px;
    cursor: pointer;
    font-size: 1.4rem;
    color: black;
    transition: color .3s;
    position: relative;

    &:hover {
        color: rgb(242, 234, 10);
        font-weight: bold;

        &::after {
            content: "";
            width: 30%;
            height: 2px;
            background: rgb(242, 234, 10);
            position: absolute;
            bottom: 10px;
            left: 25px;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 5px;
        font-size: 1.6rem;
    }
`

export const MenuIconContainer = styled.div`
    padding: 25px 15px 10px;
    cursor: pointer;
    position: relative;
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
        font-size: 2rem;
    }
`