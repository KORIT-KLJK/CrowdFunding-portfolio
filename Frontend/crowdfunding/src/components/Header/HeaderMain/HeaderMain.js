/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../../pages/Login/AuthAtom';

const mainHeader = css`
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    text-align: right;
`;

const header = css`
    position: relative;
    width: 1140px;
    height: 70px;

    margin: 0 auto;
`;

const headerLogo = css`
    float: left;
    margin-top: 21px;
`;

const headerMenuList = css`
    position: absolute;
    top: 23px;
    right: 100px;
    left: 100px;
    text-align: center;
    
`;

const menuDonation = css`
    display: inline-block;
    padding: 0 70px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #000;
`;
const menuFunding = css`
    display: inline-block;
    padding: 0 70px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #000;
`;

const headerRight = css`
    display: inline-block;

`;

const loginButton = css`
    display: inline-block;
    position: relative;
    z-index: 1;
    margin-top: 26px;
    color: #333;
    cursor: pointer;
`;

const searchButton = css`
    display: inline-block;
    position: relative;
    z-index: 1;
    margin-top: 26px;
    vertical-align: top;
    color: #333;        
`;

const headerUserBar = css`
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 28px 12px 0;
    border-color: #d8d8d8;
    vertical-align: top;
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

    const loginNavigateHandle = () => {
        if (authenticated) {
            localStorage.removeItem('accessToken');
            setAuthenticated(false);
            navigate('/login');
        }else {
            navigate('/login');
        }
    }

    return (
        <div css={mainHeader}>
            <div>
                <div css={header}>
                    <div css={headerLogo}>LOGO</div>
                    <div css={headerMenuList}>
                        <div css={menuDonation}><Link to="/giving">기부</Link></div>
                        <div css={menuFunding}><Link to="/funding">펀딩</Link></div>
                    </div>
                    <div css={headerRight}>
                        <div css={loginButton} onClick={loginNavigateHandle}>{authenticated ? "로그아웃" : "로그인"}</div>
                        <span css={headerUserBar}></span>
                        <button css={searchButton}><Link to="/search">검색</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;