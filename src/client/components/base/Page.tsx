import React from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { GridContainer } from './Grid';

interface IPageProps {
  children?: React.ReactNode;
  theme: DefaultTheme;
}

const Page: React.FunctionComponent<IPageProps> = ({ children, theme }) => (
  <GridContainer
    columns={[
      { name: 'header-left sidemenu-left', size: 'auto' },
      { name: 'sidemenu-right', size: '1fr' },
      { name: 'header-right' },
    ]}
    rows={[
      { name: 'header-top', size: theme.header.height },
      { name: 'header-bottom', size: '1fr' },
      { name: 'page-end' },
    ]}
  >
    {children}
  </GridContainer>
);

export default withTheme<React.FunctionComponent<IPageProps>>(Page);
