/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import HeaderMain from '../../components/Header/HeaderMain/HeaderMain';
import Slide from '../../components/Bannder/swiper/Slide';
import Recommend from '../../components/Recommend/Recommend';

const mainContainer = css`
    padding: 10px;
`;


const mainBody = css`

`;

const mainBanner = css`

`;

const body = css``;
const mainFooter = css``;


const Main = () => {



    return (
        <div mainContainer={mainContainer}>
            
            <body css={mainBody}>
                <Slide></Slide>
                <Recommend></Recommend>
                <div>
                    
                </div>
            </body>
            <footer>

            </footer>
        </div>
    );
};

export default Main;