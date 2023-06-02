/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const footerInfoContainer = css`
    position: relative;
    padding: 22px 0 50px;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;
    font-size: 14px;
    color: #828282;
    background-color: #e0e0e022;
`;

const footerInfoInner = css`
    width: 1140px;
    margin: 0 auto;
`;


const footerInfoList = css`
    display: flex;
    justify-content: left;
    text-align: left;
    margin-top: 18px;
`;

const footerInfoListItem = css`
    display: flex;
    flex-direction: column;
    width: 525px;
    margin-top: 18px;
    
`;

const footerInfoItem = css`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin-bottom: 4px;
    font-size: 15px;
    color: #828282;
    &:not(:nth-of-type(1))&::before{
        content: "";
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        border-left: 1px solid #828282;
        height: 100%;
    }
`; 

const infoLiContainer = css`
    display: flex;
    justify-content: left;
    
`;
const footerImgLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    width: 65px;
    height: 65px;
`;

const footerLogoContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;
`;

const footerLogoBox = css`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 1140px;
    height: 95px;
    font-size: 15px;
    color: #828282;
    background-color: #fff;
`;

const Footer = () => {
    return (
        <div>
            <div css={footerInfoContainer}>
                <div css={footerInfoInner}>
                    <ul css={footerInfoList}>
                        <li css={footerInfoItem}>UNISECOND 이용약관</li>
                        <li css={footerInfoItem}>개인정보처리방침</li>
                        <li css={footerInfoItem}>책임의 한계와 법적고지</li>
                        <li css={footerInfoItem}>고객센터</li>
                        <li css={footerInfoItem}>공익제보</li>
                    </ul>
                    <ul css={footerInfoListItem}>
                        <div css={infoLiContainer}>
                            <li css={footerInfoItem}>재단법인 UNISECOND</li>
                            <li css={footerInfoItem}>대표자: 홍길동</li>
                        </div>
                        <div css={infoLiContainer}>
                            <li css={footerInfoItem}>주소: 부산광역시 부산진구 선전로 12-12</li>
                            <li css={footerInfoItem}>대표전화: 010-1234-1234</li>
                        </div>
                        <div css={infoLiContainer}>
                            <li css={footerInfoItem}>이메일: aaa1234@naver.com</li>
                            <li css={footerInfoItem}>사업자등록번호: 0000-01101-110010</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div css={footerLogoContainer}>
                <div css={footerLogoBox}>
                    <div>
                        <img css={footerImgLogo} src="https://avatars.githubusercontent.com/u/132314800?s=200&v=4"></img>
                    </div>
                    Copyright © UNISECOND Corp. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;