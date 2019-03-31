import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { defaultTheme } from '../themes';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import SideMenu from './base/SideMenu';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    min-height: 100%;
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

  p, button, label {
    font-size: ${props => props.theme.typo.p.fontSize.phone};
  }
`;

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState<boolean>(true);

  const handleSideMenuToggle = () => setSideMenuOpened(!sideMenuOpened);

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <Header />
          <SideMenu opened={sideMenuOpened} />
          <PageContent>
            <button onClick={handleSideMenuToggle}>Toggle side menu</button>
            <h1>The quick brown fox jumps over the lazy dog.</h1>
            <h2>The quick brown fox jumps over the lazy dog.</h2>
            <h3>The quick brown fox jumps over the lazy dog.</h3>
            <h4>The quick brown fox jumps over the lazy dog.</h4>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </PageContent>
        </Page>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
