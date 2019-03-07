import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

setConfig({ logLevel: 'debug', ignoreSFC: false });

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return <Container />;
}

export default hot(App);
