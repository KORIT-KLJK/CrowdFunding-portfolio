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
import Giving from "./pages/Giving/Giving";
import Search from "./pages/Search/Search";
import HeaderMain from "./components/Header/HeaderMain/HeaderMain";
import Funding from "./pages/Funding/Funding";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import FundingDetail from "./pages/Funding/FundingDetail";
import GivingDetail from "./pages/Giving/GivingDetail";
import AuthRoute from "./components/AuthRoutes/AuthRoute";
import OAuth2Merge from "./pages/OAuth2Merge/OAuth2Merge";
import OAuth2Login from "./pages/Login/OAuth2Login";
import OAuth2SignUp from "./pages/SignUp/OAuth2SignUp";

function App() {
  return (
    <>
      <Global styles={Reset}></Global>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<AuthRoute path="/login" element={<Login />} />} />
        <Route path="/signup" element={<AuthRoute path="/signup" element={<SignUp />}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/giving/:pageId" element={<GivingDetail />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/funding/:pageId" element={<FundingDetail />} />
        <Route path="/admin/register/page" element={<AuthRoute path="/admin/register/page" element={<RegisterPage />}/>} />
        <Route path='/auth/oauth2/login' element={<AuthRoute path={"/auth/oauth2/login"} element={<OAuth2Login />}/>} />
        <Route path='/auth/oauth2/register' element={<AuthRoute path={"/auth/oauth2/register"} element={<OAuth2SignUp />}/>} />
        <Route path='/auth/oauth2/merge' element={<AuthRoute path={"/auth/oauth2/merge"} element={<OAuth2Merge />}/>} />
      </Routes>
    </>
  );
}

export default App;
