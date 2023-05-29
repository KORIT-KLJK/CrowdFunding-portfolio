/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './AuthAtom';
import { useMutation } from 'react-query';
import { Alert, Box, Button, TextField } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';

const mainContainer = css`
    width: 100vw;
    height: 100vh;
    background: #eff0f2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const loginContainer = css`
    background:#f5f5f5 ;
    width:860px;
    height: 540px;
    display: flex;
    flex-direction: row;
    box-shadow: 10px black;
    border-radius: 10px;
    -webkit-box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
    -moz-box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
    box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
`;

const loginLeftSide = css`
    width: 50%; 
    border-radius: 10px 0px 0px 10px;
    padding:75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-image: 
    radial-gradient(ellipse farthest-corner at 0 140%, #5d9dff 0%, #2178ff 70%, #3585ff 70%);   
`;

const loginLeftSideh1 = css`
    color: white;
    width:100%;
    text-align: right;
    opacity: 0.9;
`;

const loginLeftSideP = css`
    padding-top: 50px;
    font-size:12px;
    text-align: right;
    opacity: 0.8;
`;

const loginRightSide = css`
    width: 50%;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:40px;
    background: rgb(255,255,255);
    background: linear-gradient(287deg, rgba(255,255,255,1) 0%, rgba(243,244,244,1) 0%, rgba(255,255,255,1) 100%);
`;

const loginRightSideWrap = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width:100%;
`;

const loginInputContainer = css`
    padding-top:120px;
    width:300px;
`;

const loginInputContainerWrapId = css`
    width:300px;
    height: 45px;
    margin-top: 20px;
    border-radius: 2px;
`;

const loginInputContainerWrapPw = css`
    width:300px;
    height: 45px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 2px;
`;

const inputI = css`
    color: #2178ff;
    line-height: 45px;
`;

const loginBtn = css`
    width:95px;
    height:35px;
    color:white;
    border: 0;
    border-radius: 4px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background: rgb(105,163,255);
    background: linear-gradient(162deg, rgba(105,163,255,1) 0%, rgba(43,125,254,1) 50%, rgba(43,125,254,1) 100%);
`;

const Login = () => {
    const [loginUser, setLoginUser] = useState({email: "", password: ""});
    const [errorMessages, setErrorMessages] = useState({email: "", password: ""});
    const [ authenticated, setAuthenticated ] = useRecoilState(authenticatedState);

    const informationHandle = (e) => {
        const { name, value } = e.target;
        setLoginUser({...loginUser, [name]: value})
    }

    const login = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }   
        }
        try{
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            setErrorMessages({email: "", password: ""});
            const accessToken = response.data.accessToken;
            localStorage.setItem("accessToken", accessToken); 
            setAuthenticated(true);
            window.location.replace("/");
        } catch(error) {
            setErrorMessages({email: "", password: "", ...error.response.data.errorData});
        }
    })

    const loginHandleSubmit = () => {
        login.mutate();
    }
    
    return (
        <div css={mainContainer}>
            <div css={loginContainer}>
                <div css={loginLeftSide}>
                    <h1 css={loginLeftSideh1}>Unicef</h1>
                    <p css={loginLeftSideP}>새롭게 만들어진 기부 펀딩 페이지에 오신 여러분을 환영합니다! 이 페이지는 사회적 문제에 대한 기부와 창작자들을 위한 펀딩을 촉진하며, 사회적 영향력을 키우기 위한 플랫폼입니다. 우리는 여러분의 관심과 참여로 더 나은 세상을 만들어갈 수 있습니다. 함께하는 여정에 참여해주세요!</p>
                </div>             
                    <div css={loginRightSide}>
                        <div css={loginInputContainer}>
                            <div css={loginInputContainerWrapId}>
                                <i css={inputI}></i>
                                <FormControl variant="standard">
                                    <Input id="input-with-icon-adornment" 
                                        label="email" 
                                        variant="outlined" 
                                        placeholder="email" 
                                        name="email" 
                                        type="text" 
                                        onChange={informationHandle} 
                                        startAdornment={
                                            <InputAdornment position="start">
                                            <AccountCircle />
                                            </InputAdornment>
                                        } />
                                    {errorMessages.email && <Alert severity="error">{errorMessages.email}</Alert>}
                                </FormControl>
                            </div>
                            <div css={loginInputContainerWrapPw}>
                                <i css={inputI}></i>
                                <FormControl variant="standard">
                                    <Input id="input-with-icon-adornment" 
                                        label="password" 
                                        variant="outlined" 
                                        placeholder="password" 
                                        name="password" 
                                        type="Password" 
                                        onChange={informationHandle} 
                                        startAdornment={
                                            <InputAdornment position="start">
                                            <AccountCircle />
                                            </InputAdornment>
                                        } />
                                    {errorMessages.password && <Alert severity="error">{errorMessages.password}</Alert>}
                                </FormControl>
                            </div>
                        </div>
                            <button css={loginBtn} onClick={loginHandleSubmit}>로그인</button>                       
                    </div>
            </div>
        </div>         
    );
};

export default Login;