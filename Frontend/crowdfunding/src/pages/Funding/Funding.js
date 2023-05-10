/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';

export const fundingHeader = css`
    width: 1000px;
    height: 100px;
    margin-top: 100px;
`;

export const fundingMainConatiner = css`
    width: 1000px;
    height: 100%;
    margin: 0px auto;
    padding-bottom: 50px;
`;

export const fundingContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;   // 나중에 기능 구현이 되고 나면 max height로 바꾸기
    cursor: pointer;
`;

const Funding = () => {
    return (
        <div>
            <header css={fundingHeader}>
                카테고리
            </header>
            <main css={fundingMainConatiner}>
                <div css={fundingContainer}>
                    <header>
                        이미지
                    </header>
                    <main>
                        내용
                    </main>
                    <footer>
                        가격 정보
                    </footer>
                </div>
            </main>
            <footer>
                웹페이지 정보
            </footer>
        </div>
    );
};

export default Funding;