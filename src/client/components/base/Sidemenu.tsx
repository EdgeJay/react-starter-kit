import React from 'react';
import { GridItem } from './Grid';

const Sidemenu: React.FunctionComponent<{ children?: React.ReactNode; opened?: boolean }> = ({
  children,
  opened = true,
}) => (
  <GridItem
    area={{
      rowStart: 'header-bottom',
      columnStart: 'sidemenu-left',
      rowEnd: 'page-end',
      columnEnd: 'sidemenu-right',
    }}
    style={{
      backgroundColor: 'darkgrey',
      width: opened ? '30rem' : '0rem',
      transition: 'width 0.3s ease-in-out',
    }}
  >
    {children}
  </GridItem>
);

export default Sidemenu;
