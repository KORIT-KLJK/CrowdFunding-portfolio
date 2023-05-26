/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../../pages/Login/AuthAtom';
import logo from "../../../assets/images/logo.png";
const mainHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    width: 1140px;
    height: 70px;
`;

const headerLeft = css`
    display: flex;
    justify-content: left;

    align-items: center;
    width: 100%;
`;

const headerLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const headerMenuList = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 20px;
`;

const menuLink = css`
    margin: 0px 10px;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #000;
`;

const headerRight = css`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 200px;
`;

const authButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
    height: 30px;
    color: #333;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
`;

const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
    height: 30px;
    color: #333;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
`;

const link = css`
    color: #333;
`;

const HeaderMain = () => {
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      }, []);


    const mainHandleSubmit = () => {
        navigate("/");
    }

    const loginNavigateHandle = () => {
        if (authenticated) {
            setAuthenticated(false);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }else {
            navigate('/login');
        }
    }

    return (
        <div css={mainHeader}>
            <div css={headerLeft}>
                <Link css={headerLogo} to="/"><img src={logo} alt="" /></Link>
                <div css={headerMenuList}>
                    <Link css={menuLink} to="/giving">기부</Link>
                    <Link css={menuLink} to="/funding">펀딩</Link>
                </div>
            </div>
            <div css={headerRight}>
                <button css={authButton} onClick={loginNavigateHandle}>{authenticated ? "로그아웃" : "로그인"}</button>
                <button css={searchButton}><Link css={link} to="/search">검색</Link></button>
            </div>
        </div>
    );
};

export default HeaderMain;