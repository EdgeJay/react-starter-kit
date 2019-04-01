import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppInitialState } from '../store';
import { defaultTheme, GlobalStyle } from '../themes';
import { createRoutes } from '../utils/routeUtil';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const App: React.FunctionComponent<{ sideMenu: { opened: boolean } }> = ({ sideMenu }) => {
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

const mapProps = (state: AppInitialState) => ({
  sideMenu: state.app.sideMenu,
});

export default hot(connect(mapProps)(App));
