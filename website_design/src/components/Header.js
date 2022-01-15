import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    `;

const NavbarItems = styled.div``

const NavbarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    `;

function Header() {
    return (
        <Navbar>
            <Logo to="/">Animal</Logo>
            <NavbarItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
            </NavbarItems>
        </Navbar>
    );
}

export default Header;