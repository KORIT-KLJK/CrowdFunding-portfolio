/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const mainHeader = css`
    border-bottom: 1px solid #f0f0f0;
    border-color: #fff;
    text-align: right;
`;

const header = css`
    position: relative;
    width: 1140px;
    height: 70px;
    margin: 0 auto;
`;

const headerMenu = css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 23px;
    right: 100px;
    left: 100px;
    text-align: center;
`;

const headerLogo = css`
    float: left;
    margin-top: 21px;
`;

const headerMenuList = css`
    display: flex;
    align-items: center;
    
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
    vertical-align: top;
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
        <div>
            <header css={mainHeader}>
                <div css={header}>
                    <div css={headerLogo}>LOGO</div>
                    <div css={headerMenu}>
                        <div css={headerMenuList}>
                            <div css={menuDonation}>기부</div>
                            <div css={menuFunding}>펀딩</div>
                        </div>
                    </div>
                        <div css={headerRight}>
                            <div css={loginButton}>로그인</div>
                            <span css={headerUserBar}></span>
                            <button css={searchButton}>검색</button>
                        </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderMain;