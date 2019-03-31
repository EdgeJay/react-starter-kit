import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../themes';
import { createRoutes } from '../utils/routeUtil';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';

setConfig({ logLevel: 'debug', ignoreSFC: false });

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState<boolean>(true);

  const handleSideMenuToggle = () => setSideMenuOpened(!sideMenuOpened);

  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Page>
            <Header />
            <SideMenu opened={sideMenuOpened} />
            <PageContent>
              <button onClick={handleSideMenuToggle}>Toggle side menu</button>
              {createRoutes()}
            </PageContent>
          </Page>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
