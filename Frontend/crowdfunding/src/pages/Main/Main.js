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
const mainFooter = css``;

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
            <footer>
            </footer>
        </div>
    );
};

export default Main;