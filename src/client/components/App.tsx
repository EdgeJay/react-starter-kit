import * as React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import defaultTheme, { ThemeType } from '../themes';
import Hello from './Hello';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle =
  createGlobalStyle <
  { theme: ThemeType } >
  `
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
        <Hello compiler="Typescript" framework="React" />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
