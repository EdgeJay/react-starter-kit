import * as React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { defaultTheme, ITheme } from '../themes';
import { GridItem } from './base/Grid';
import Header from './base/Header';
import Page from './base/Page';
import PageContent from './base/PageContent';
import Sidemenu from './base/Sidemenu';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${styledNormalize}

  html {
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    min-height: 100%;
  }

  #mount {
    height: 100vh;
  }
`;

function App() {
  const [sideMenuOpened, setSideMenuOpened] = React.useState<boolean>(true);

  const handleSideMenuToggle = () => setSideMenuOpened(!sideMenuOpened);

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <Header />
          <Sidemenu opened={sideMenuOpened} />
          <PageContent>
            <button onClick={handleSideMenuToggle}>Toggle side menu</button>
          </PageContent>
        </Page>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
