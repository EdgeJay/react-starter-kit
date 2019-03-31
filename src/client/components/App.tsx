import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../themes';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';

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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </PageContent>
          </Page>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
