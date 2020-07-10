import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  border: 1px solid red;
  text-align: center;
`;

const App: FunctionComponent = (): JSX.Element => (
  <Header>TypeScript, Node, React</Header>
);

export default App;