/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import HeaderMain from '../../components/Header/HeaderMain/HeaderMain';
import Slide from '../../components/Bannder/swiper/Slide';
import Recommend from '../../components/Recommend/Recommend';
import MainGivingList from '../../components/MainCard/MainDonationList/MainGivingList';
import CardItemGiving from '../../components/MainCard/MainDonationList/CardItem/CardItemGiving';
import MainFundingList from '../../components/MainCard/MainFundingList/MainFundingList';
import GivingStatistics from '../../components/Statistics/GivingStatistics';
import Footer from '../../components/Footer/Footer';

const mainContainer = css`
`;

const mainBody = css`

`;

const mainBodyDetails = css`
    margin-top: 71px;
`;

const mainBanner = css`

`;

const body = css``;
const footerContainer = css`
    position: relative;
    z-index: 10;
    margin-top: 96px;
    padding-top: 52px;
    border-top: 1px solid #e0e0e0;
    background-clip: content-box;
    background-color: #f6f6f6;
    
`;

const Main = () => {

    return (
        <div mainContainer={mainContainer}>
            
            <div css={mainBody}>
                <main css={mainBodyDetails}>
                    <Slide />
                    <Recommend />
                    <MainGivingList />
                    <MainFundingList />
                    <GivingStatistics />
                </main>
            </div>
            <footer css={footerContainer}>
                <Footer />
            </footer>
        </div>
    );
};

export default Main;