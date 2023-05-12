/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

const mainHeader = css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 30;
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
    return (
        <div css={mainHeader}>
            <div>
                <div css={header}>
                    <div css={headerLogo}>LOGO</div>
                    <div css={headerMenuList}>
                        <div css={menuDonation}><Link to="/donation">기부</Link></div>
                        <div css={menuFunding}><Link to="/funding">펀딩</Link></div>
                    </div>
                    <div css={headerRight}>
                        <div css={loginButton}><Link to="/login">로그인</Link></div>
                        <span css={headerUserBar}></span>
                        <button css={searchButton}><Link to="/search">검색</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;