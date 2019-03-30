import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { GridItem } from './Grid';

const StyledGridItem = styled(GridItem)`
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.header.backgroundColor};
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
    {children}
  </StyledGridItem>
);

export default Header;
