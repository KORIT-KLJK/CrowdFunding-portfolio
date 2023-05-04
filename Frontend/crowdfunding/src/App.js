import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import { Reset } from './styles/Global/reset';
// import Slide from './pages/Bannder/swiper/Slide';
import Recommend from './components/Recommend/Recommend';

function App() {
  return(
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path="/" element={ <Main /> } />

        <Route path="/recommend" element={ <Recommend /> } />
      </Routes>
    </>
  );
}

export default App;
