import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { GridItem } from './Grid';

const StyledGridItem = styled(GridItem)`
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.content.backgroundColor};
`;

const PageContent: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledGridItem
    area={{
      rowStart: 'header-bottom',
      columnStart: 'sidemenu-right',
      rowEnd: 'page-end',
      columnEnd: 'header-right',
    }}
  >
    {children}
  </StyledGridItem>
);

export default PageContent;
