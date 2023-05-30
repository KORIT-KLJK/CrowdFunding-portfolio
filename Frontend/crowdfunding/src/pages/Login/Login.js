/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './AuthAtom';
import { useMutation } from 'react-query';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { SiKakao } from 'react-icons/si'

const mainContainer = css`
    width: 1334px;
    height: 529px;
    margin: auto;
    margin-top: 100px;
`;

const loginContainer = css`
    box-sizing: border-box;
    width: 460px;
    margin: 0 auto;
`;

const loginUl = css`
    position: relative;
    z-index: 3;
    margin-top: -8px;
`;

const loginLi = css`
    border: 1px solid #c6c6c6;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(68,68,68,.04);
`;

const loginInner = css`
    padding: 20px 28px;
`;


const loginIdPwBox = css`
    display: block;
`

const providerButtonContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const google = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #88888822;
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: white;
    cursor: pointer;
`;

const naver = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: white;
    color: #1cdf2c;
    cursor: pointer;
`;

const kakao = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    font-size: 35px;
    background-color: yellow;
    cursor: pointer;
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

    const googleAuthLoginClickHandle = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    }

    const naverAuthLoginClickHandle = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver";
    }

    const kakaoAuthLoginClickHandle = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
    }


    return (
        <div css={mainContainer}>
            <div css={loginContainer}>
                <ul css={loginUl}>
                    <li css={loginLi}>
                        <div css={loginInner}>
                            <div css={loginIdPwBox}>
                                <input placeholder="Email" type="text" onChange={informationHandle} name="email" />
                                <div>{errorMessages.email}</div>
                                <input placeholder="Password" type="password" onChange={informationHandle} name="password" />
                                <div>{errorMessages.password}</div>
                                <button onClick={loginHandleSubmit}>Sign in</button>
                                <div>다른 계정으로 로그인</div>
                                <div css={providerButtonContainer}>
                                    <button css={google} onClick={googleAuthLoginClickHandle}><FcGoogle /></button>
                                    <button css={naver} onClick={naverAuthLoginClickHandle}><SiNaver /></button>
                                    <button css={kakao} onClick={kakaoAuthLoginClickHandle}><SiKakao /></button>
                                </div>
                            </div>
                        </div>                       
                    </li>
                </ul>
            </div>         
        </div>
    );
};

export default Login;