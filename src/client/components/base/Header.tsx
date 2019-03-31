import React from 'react';
import styled from 'styled-components';
import { GridItem } from './Grid';
import NavBar from './NavBar';

const StyledGridItem = styled(GridItem)`
  position: relative;
  background-color: ${props => props.theme.header.backgroundColor};
`;

const Header: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledGridItem
    area={{
      rowStart: 'header-top',
      columnStart: 'header-left',
      rowEnd: 'header-bottom',
      columnEnd: 'header-right',
    }}
  >
    <NavBar />
    {children}
  </StyledGridItem>
);

export default Header;
