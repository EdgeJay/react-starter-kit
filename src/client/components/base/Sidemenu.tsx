import React from 'react';
import styled from 'styled-components';
import { GridItem } from './Grid';

const StyledGridItem = styled(GridItem)<{ opened?: boolean }>`
  background-color: ${props => props.theme.sideMenu.backgroundColor};
  width: ${props => (props.opened ? '30rem' : '0rem')};
  transition: width 0.3s ease-in-out;
`;

const SideMenu: React.FunctionComponent<{ children?: React.ReactNode; opened?: boolean }> = ({
  children,
  opened = true,
}) => (
  <StyledGridItem
    area={{
      rowStart: 'header-bottom',
      columnStart: 'sidemenu-left',
      rowEnd: 'page-end',
      columnEnd: 'sidemenu-right',
    }}
    opened={opened}
  >
    {children}
  </StyledGridItem>
);

export default SideMenu;
