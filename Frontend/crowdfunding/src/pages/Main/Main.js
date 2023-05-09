/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import HeaderMain from '../../components/Header/HeaderMain/HeaderMain';
import Slide from '../../components/Bannder/swiper/Slide';
import Recommend from '../../components/Recommend/Recommend';
import MainDonationList from '../../components/MainCard/MainDonationList/MainDonationList';

const mainContainer = css`
    padding: 10px;
`;


const mainBody = css`

`;

const mainBodyDetails = css`
    margin-top: 71px;
`;

const mainBanner = css`

`;

const body = css``;
const mainFooter = css``;


const Main = () => {



    return (
        <div mainContainer={mainContainer}>
            
            <body css={mainBody}>
                <HeaderMain></HeaderMain>
                <main css={mainBodyDetails}>
                    <Slide></Slide>
                    <Recommend></Recommend>
                    <MainDonationList></MainDonationList>

                </main>
            </body>
            <footer>

            </footer>
        </div>
    );
};

export default Main;