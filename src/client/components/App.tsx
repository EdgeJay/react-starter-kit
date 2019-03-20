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
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle />
        <GridContainer
          columns={[
            { name: 'header-left sidemenu-left', size: '30rem' },
            { name: 'sidemenu-right', size: '1fr' },
            { name: 'header-right' },
          ]}
          rows={[
            { name: 'header-top', size: '8rem' },
            { name: 'header-bottom', size: '1fr' },
            { name: 'page-end' },
          ]}
        >
          <GridItem
            area={{
              rowStart: 'header-top',
              columnStart: 'header-left',
              rowEnd: 'header-bottom',
              columnEnd: 'header-right',
            }}
            style={{ backgroundColor: 'darkblue' }}
          />
          <GridItem
            area={{
              rowStart: 'header-bottom',
              columnStart: 'sidemenu-left',
              rowEnd: 'page-end',
              columnEnd: 'sidemenu-right',
            }}
            style={{ backgroundColor: 'darkgrey' }}
          />
        </GridContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
