/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import HeaderMain from '../../components/Header/HeaderMain/HeaderMain';

const mainContainer = css`
    padding: 10px;
`;


const mainBody = css``;

const mainBanner = css`

`;

const body = css``;
const mainFooter = css``;


const Main = () => {



    return (
        <div mainContainer={mainContainer}>
            <HeaderMain></HeaderMain>
            <body css={mainBody}>
                <div css={mainBanner}></div>
            </body>
            <footer>

            </footer>
        </div>
    );
};

export default Main;