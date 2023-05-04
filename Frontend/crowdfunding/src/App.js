import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/SignUp/Test';
import PopupPostCode from './pages/SignUp/PopupPostCode';

function App() {
  return(
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path="/login"element={<Login />} />
        <Route path="/signup"element={<SignUp />} />
        <Route path="/test"element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
