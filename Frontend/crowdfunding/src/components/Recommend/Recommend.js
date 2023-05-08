    /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const mainKeywordContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;

`;

const keywordContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    width: 1140px;
    height: 53px;
`;
const keywordItem = css`
    display: block;
    height: 53px;
    width: 193px;
    padding-top: 17px;
    border: 1px solid #65db7f;
    border-radius: 30px;
    font-size: 17px;
    font-weight: 700;
    color: #00ab33;
    margin: 0 9px;
`;

const Recommend = () => {
    return (
        <div css={mainKeywordContainer}>
            <ul css={keywordContainer}>
                <li css={keywordItem}>#어린이날</li>
                <li css={keywordItem}>#어버이날</li>
                <li css={keywordItem}>#기업이랑 기부</li>
            </ul>
        </div>
    );
};

export default Recommend;