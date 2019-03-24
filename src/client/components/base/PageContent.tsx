import React from 'react';
import { GridItem } from './Grid';

const PageContent: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <GridItem
    area={{
      rowStart: 'header-bottom',
      columnStart: 'sidemenu-right',
      rowEnd: 'page-end',
      columnEnd: 'header-right',
    }}
    style={{ backgroundColor: 'lightgrey' }}
  >
    {children}
  </GridItem>
);

export default PageContent;
