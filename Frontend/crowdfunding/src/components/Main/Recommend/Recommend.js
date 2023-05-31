/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const mainKeywordContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const bannerInner = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 10px;
    width: 1140px;
    height: 190px;
`;

const Recommend = () => {
    return (
        <div css={mainKeywordContainer}>
            <a href="https://kr.shop.battle.net/ko-kr/product/diablo-iv">
            <img css={bannerInner} src="https://ssl.pstatic.net/melona/libs/1447/1447309/a77b62389a02c701b8ea_20230525190051738.jpg" />
            </a>
        </div>
    );
};

export default Recommend;