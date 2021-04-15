import React from 'react';
import styled from 'styled-components'

const StyledNav = styled.nav`
    color: blue;
    font-size: 1.5rem;
    font-family: sans-serif;
    display: flex;
    justify-content: space-around;
    
    &:hover {
    color: red;
    background-color: cyan;
    transition: all 1s ease-in-out;
  }
`


const Nav = () => (
    <StyledNav>
        <a>Login</a>
        <a>Search</a>
        <a>Subscribe</a>
    </StyledNav>
);

export default Nav;