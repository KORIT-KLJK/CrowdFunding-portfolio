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

function App() {
  return(
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path="/" element={ <Main /> } />

        <Route path="/login"element={<Login />} />
        <Route path="/signup"element={<SignUp />} />
        <Route path="/test"element={<Test />} />
        <Route path="/maindonation"element={<MainDonationList />} />
        
      </Routes>
    </>
  );
}

export default App;
