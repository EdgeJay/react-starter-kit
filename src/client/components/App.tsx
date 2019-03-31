import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { defaultTheme, media } from '../themes';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    min-height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  #mount {
    height: 100vh;
  }

  h1 {
    font-size: ${props => props.theme.typo.h1.fontSize.phone};
  }

  h2 {
    font-size: ${props => props.theme.typo.h2.fontSize.phone};
  }

  h3 {
    font-size: ${props => props.theme.typo.h3.fontSize.phone};
  }

  h4 {
    font-size: ${props => props.theme.typo.h4.fontSize.phone};
  }

  body, p, button, label {
    font-size: ${props => props.theme.typo.p.fontSize.phone};
  }

  ${media.desktop`
    h1 {
      font-size: ${props => props.theme.typo.h1.fontSize.desktop};
    }

    h2 {
      font-size: ${props => props.theme.typo.h2.fontSize.desktop};
    }

    h3 {
      font-size: ${props => props.theme.typo.h3.fontSize.desktop};
    }
  `};
`;

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
