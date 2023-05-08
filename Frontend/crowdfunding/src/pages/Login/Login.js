/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import axios from 'axios';

const mainContainer = css`
    width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-top: 21px;
`;

const mainWrap = css`
    width:768px;
`;

const selLangWrap = css`
    width: 96px;
	height: 30px;
	color: var(--font-color);
	border: solid 1px var(--border-gray-color);
`;

const logoWrap = css`
    padding-top: 55px;
`;

const logoWrapImg = css`
    width: 231px;
    height: 44px;
`;

const header = css`
    display: flex;
    flex-direction: column;
	align-items: center;
`;

const loginInputWrap = css`
    width: 465px;
    height: 48px;
    border: solid 1px var(	--border-gray-color );
	background: white;
`;

const loginButton = css`
    width: 465px;
	height :48px;
	font-size: 18px;
	background: var(--naver-green-color);
	color: white;
	border: solid 1px var(--naver-green-border-color);
`;


const Login = () => {
    // const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    // const [ errorMessages, setErrorMessages ] = useState({email: "", password: ""});
    // const [ refresh, setRefresh ] = useRecoilState(refreshState);

    // const navigate = useNavigate();

    return (
        <div>
            <div css={mainContainer}>
                <div css={mainWrap}>
                <header>
                    <div css={selLangWrap}>
                        <select css={logoWrap}>
                            <option>한국어</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div css={logoWrap}>
                        <img src="images/logo.png"/>
                    </div>
                </header>
            <section>
                <div>	
                    <input css={loginInputWrap} placeholder="Username" type="text"></input>
                </div>
                <div class="login-input-wrap password-wrap">	
                    <input css={loginInputWrap} placeholder="Password" type="password"></input>
                </div>
                <div>
                    <button css={loginButton}>Sign in</button>
                </div>
                <div class="login-stay-sign-in">
                    <i class="far fa-check-circle"></i>
                    <span>Stay Signed in</span>
                </div>
            </section>
            <section class="Easy-sgin-in-wrap">
                <h2>Easier sign in</h2>
                <ul class="sign-button-list">
                    <li><button><i class="fas fa-qrcode"></i><span>Sign in with QR code</span></button></li>
                    <li><button><i class="fab fa-facebook-square"></i><span>Facebook</span></button></li>
                    <li><button><i class="fab fa-line"></i><span>line</span></button></li>
                </ul>
                <p class="forget-msg">Forgot your Username or Password? | Sign up</p>
            </section>
            <footer>
                <div class="copyright-wrap">
                <span>	<img src="img/logo.png" /> Copyright © NAVER Corp. All Rights Reserved.</span>
                </div>
            </footer>
            </div>
        </div>
        </div>
    );
};

export default Login;