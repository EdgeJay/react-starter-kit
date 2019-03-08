import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import defaultTheme from '../themes';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const GlobalStyle = createGlobalStyle`
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
        <p>Foo!</p>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(App);
