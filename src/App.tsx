import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// Estilo global
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
