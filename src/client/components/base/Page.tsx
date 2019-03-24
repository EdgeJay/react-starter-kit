import * as React from 'react';
import { GridContainer } from './Grid';

const Page: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <GridContainer
    columns={[
      { name: 'header-left sidemenu-left', size: 'auto' },
      { name: 'sidemenu-right', size: '1fr' },
      { name: 'header-right' },
    ]}
    rows={[
      { name: 'header-top', size: '8rem' },
      { name: 'header-bottom', size: '1fr' },
      { name: 'page-end' },
    ]}
  >
    {children}
  </GridContainer>
);

export default Page;
