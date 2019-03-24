import * as React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { defaultTheme, ITheme } from '../themes';
import { GridContainer, GridItem } from './base/Grid';

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
          {/* Header */}
          <GridItem
            area={{
              rowStart: 'header-top',
              columnStart: 'header-left',
              rowEnd: 'header-bottom',
              columnEnd: 'header-right',
            }}
            style={{ backgroundColor: 'darkblue' }}
          />
          {/* Side Menu */}
          <GridItem
            area={{
              rowStart: 'header-bottom',
              columnStart: 'sidemenu-left',
              rowEnd: 'page-end',
              columnEnd: 'sidemenu-right',
            }}
            style={{
              backgroundColor: 'darkgrey',
              width: sideMenuOpened ? '30rem' : '0rem',
              transition: 'width 0.3s ease-in-out',
            }}
          />
          {/* Content */}
          <GridItem
            area={{
              rowStart: 'header-bottom',
              columnStart: 'sidemenu-right',
              rowEnd: 'page-end',
              columnEnd: 'header-right',
            }}
            style={{ backgroundColor: 'lightgrey' }}
          >
            <button onClick={handleSideMenuToggle}>Toggle side menu</button>
          </GridItem>
        </GridContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
