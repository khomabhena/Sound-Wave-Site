import React from 'react'
import { NavContainer, Logo, LogoWrap, Name, Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <NavContainer>
                <Nav>
                    <LogoWrap>
                        <Logo src="images/logo.png" />
                        <Name to="/">Soundwave</Name>
                    </LogoWrap>
                    <NavMenu>
                        <NavLink to="/discover">Discover</NavLink>
                        <NavLink to="/join">Join</NavLink>
                    </NavMenu>
                </Nav>
            </NavContainer>
        </>
    )
}

export default Navbar
