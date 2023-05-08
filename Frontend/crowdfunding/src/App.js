import './App.css';
import { Global } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import { Reset } from './styles/Global/reset';
// import Slide from './pages/Bannder/swiper/Slide';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/SignUp/Test';
import MainDonationList from './components/MainCard/MainDonationList/MainDonationList';
import PopupPostCode from './pages/SignUp/PopupPostCode';
import HeaderMain from './components/Header/HeaderMain/HeaderMain';
import Search from './pages/Search/Search';
import Recommend from './components/Recommend/Recommend';

function App() {
  return(
    <>
      <Global styles={ Reset }></Global>
      <HeaderMain/>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/recommend" element={ <Recommend/> } />
          <Route path="/login"element={<Login />} />
          <Route path="/signup"element={<SignUp />} />
          <Route path="/test"element={<Test />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
    </>
  );
}

export default App;
