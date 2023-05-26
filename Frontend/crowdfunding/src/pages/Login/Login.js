/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './AuthAtom';
import { useMutation } from 'react-query';

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
                <ul css={loginUl}>
                    <li css={loginLi}>
                        <div css={loginInner}>
                            <div css={loginIdPwBox}>
                                <input placeholder="Email" type="text" onChange={informationHandle} name="email" />
                                <div>{errorMessages.email}</div>
                                <input placeholder="Password" type="password" onChange={informationHandle} name="password" />
                                <div>{errorMessages.password}</div>
                                <button onClick={loginHandleSubmit}>Sign in</button>
                            </div>
                        </div>                       
                    </li>
                </ul>
            </div>         
        </div>
    );
};

export default Login;