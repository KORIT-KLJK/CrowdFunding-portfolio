/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './AuthAtom';

export const mainContainer = css`
    width: 700px;
    margin: auto;
    margin-top: 100px;
`;


const Login = () => {
    const [loginUser, setLoginUser] = useState({email: "", password: ""});
    const [errorMessages, setErrorMessages] = useState({email: "", password: ""});
    const [ authenticated, setAuthenticated ] = useRecoilState(authenticatedState);

    const informationHandle = (e) => {
        const { name, value } = e.target;
        setLoginUser({...loginUser, [name]: value})
    }

    const loginHandleSubmit = async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }   
        }
        try{
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            setErrorMessages({email: "", password: ""});
            const accessToken = response.data.grantType + " " + response.data.accessToken;
            localStorage.setItem("accessToken", accessToken); 
            setAuthenticated(true);
        } catch(error) {
            setErrorMessages({email: "", password: "", ...error.response.data.errorData});
        }
    }

    return (
        <div css={mainContainer}>
            <input placeholder="Email" type="text" onChange={informationHandle} name="email" />
            <div>{errorMessages.email}</div>
            <input placeholder="Password" type="password" onChange={informationHandle} name="password" />
            <div>{errorMessages.password}</div>
            <button onClick={loginHandleSubmit}>Sign in</button>
        </div>
    );
};

export default Login;