import React from 'react';
import { GridItem } from './Grid';

const Header: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <GridItem
    area={{
      rowStart: 'header-top',
      columnStart: 'header-left',
      rowEnd: 'header-bottom',
      columnEnd: 'header-right',
    }}
    style={{ backgroundColor: 'darkblue' }}
  >
    {children}
  </GridItem>
);

export default Header;
