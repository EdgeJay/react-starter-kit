import * as React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { defaultTheme, ITheme } from '../themes';
import { GridContainer } from './base/Grid';
import Hello from './Hello';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${styledNormalize}

  body {
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle />
        <GridContainer />
        <Hello compiler="Typescript" framework="React" />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
