import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IRootInitialState } from '../reducers';
import { defaultTheme, GlobalStyle } from '../themes';
import { createRoutes } from '../utils/routeUtil';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';

setConfig({ logLevel: 'debug', ignoreSFC: false });

interface IAppProps {
  sideMenu: {
    opened: boolean;
  };
}

const App: React.FunctionComponent<IAppProps> = ({ sideMenu }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <Header />
          <SideMenu opened={sideMenu.opened} />
          <PageContent>{createRoutes()}</PageContent>
        </Page>
      </React.Fragment>
    </ThemeProvider>
  );
};

const mapProps = (state: IRootInitialState) => ({
  sideMenu: state.app.sideMenu,
});

export default hot(connect(mapProps)(App));
