import logo from "./logo.svg";
import "./App.css";
import { Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import { Reset } from "./styles/Global/reset";
// import Slide from './pages/Bannder/swiper/Slide';
import Recommend from "./components/Recommend/Recommend";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PopupPostCode from "./pages/SignUp/PopupPostCode";
import Donation from "./pages/Donation/Donation";
import Search from "./pages/Search/Search";
import HeaderMain from "./components/Header/HeaderMain/HeaderMain";
import Funding from "./pages/Funding/Funding";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Global styles={Reset}></Global>
      <HeaderMain/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/register/page" element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
