import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: #282c34;
`

export const Nav = styled.nav`
    display: flex;
    background-color: #282c34;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    height: 15vh;
`

export const LogoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    color: white;
`

export const Logo = styled.img`
    width: 60px;
    height: 60px;
`

export const Name = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 1.5rem;
    padding: 0 1.5rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
`

export const NavMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 1.2rem;
`

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0 1.5rem;

    &:hover {
        color: lightgray;
    }
`