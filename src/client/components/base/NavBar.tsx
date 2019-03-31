import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.75);
`;

const NavItem = styled.a`
  text-align: center;
  line-height: 1;
  padding: ${props =>
    `calc((${props.theme.header.height} - ${props.theme.header.nav.fontSize.phone}) / 2) calc(${
      props.theme.header.nav.itemSpacing
    } / 2)`};
`;

const NavBar = () => (
  <Nav>
    <NavItem>Home</NavItem>
    <NavItem>Experiments</NavItem>
    <NavItem>Contact</NavItem>
  </Nav>
);

export default NavBar;
