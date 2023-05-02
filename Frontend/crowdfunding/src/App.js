import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';

function App() {
  return(
    <>
      <Global styles={ Reset }></Global>
    </>
  );
}

export default App;
