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
import Test from "./pages/SignUp/Test";
import PopupPostCode from "./pages/SignUp/PopupPostCode";
import Donation from "./pages/Donation/Donation";

function App() {
  return (
    <>
      <Global styles={Reset}></Global>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </>
  );
}

export default App;
