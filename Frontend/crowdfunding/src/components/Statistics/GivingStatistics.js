/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const StatisticsContainer = css`
    margin-top: 70px;
    background-color: #21ce55;
`;

const StatisticsInner = css`
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 0 auto;
    padding: 45px 0;
    line-height: 1.2;
    `;

const StatisticsSubContainer = css`
    display: flex;
    flex-direction: column;
    width: 370px;

`;

const StatisticsTitle = css`
    display: inline-block;
    padding: 6px 10px 4px;
    width: 145px;
    border-radius: 15px;
    background-color: #0eaa30;
    font-size: 17px;
    color: hsla(0, 0%, 100%, .85);
`;

const StatisticsTitleSub = css`
    width: 1140px;
    margin-top: 24px;
    font-size: 24px;
    color: #fff;
`;

const StatisticsList = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    align-items: center;
    flex-flow: wrap;
    position: relative;
    right: 0;
    text-align: right;
`;

const StaticsItem = css`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-bottom: 15px;
    vertical-align: top;
`;

const DonationStatisticsTitle = css`
    margin-right: 20px;
    margin-left: 38px;
    font-size: 18px;
    line-height: 36px;
    color: hsla(0, 0%, 100%, .85);
`;

const DonationStatisticsData = css`
    width: 150px;
    overflow: hidden;
    font-size: 18px;
    line-height: 36px;
    color: hsla(0, 0%, 100%, .85);
    text-align: right;

`;


const GivingStatistics = () => {
    const statistics = useQuery(["Statistics"], async () => {
        const response = await axios.get("http://localhost:8080/main/givingStatistics")
        return response;
    });
    
    const statisticsFunding = useQuery(["statisticsFunding"], async () => {
        const response = await axios.get("http://localhost:8080/main/fundingStatistics")
        return response
    })

    if(statistics.isLoading) {
        return <></>;
    }

    if(statisticsFunding.isLoading) {
        return <></>;
    }

    console.log(statisticsFunding);

    const statisticsData = statistics.data.data;
    const statisticsFundingData = statisticsFunding.data.data;
    
    return (
        <div css={StatisticsContainer}>
            <div css={StatisticsInner}>
                <div css={StatisticsSubContainer}>
                    <h3 css={StatisticsTitle}>오늘의 참여현황</h3>
                    <span css={StatisticsTitleSub}>여러분의 응원이 이만큼 모였어요</span>
                </div>
                <div css={StatisticsList}>
                            <div css={StaticsItem}>
                                <div css={DonationStatisticsTitle}>기부 참여</div>
                                <div>
                                    <span css={DonationStatisticsData}>{statisticsData.giverTotal} 명</span>
                                </div>
                                <div css={DonationStatisticsTitle}>기부 금액</div>
                                <div>
                                    <div css={DonationStatisticsData}>{statisticsData.givingTotalSum} 원</div>
                                </div>
                            </div>
                            <div css={StaticsItem}>
                                <div css={DonationStatisticsTitle}>펀딩 참여</div>
                                <div>
                                    <span css={DonationStatisticsData}>{statisticsFundingData.funderTotal} 명</span>
                                </div>
                                <div css={DonationStatisticsTitle}>참여 금액</div>
                                <div>
                                    <div css={DonationStatisticsData}>{statisticsFundingData.fundingPriceTotal} 원</div>
                                </div>
                            </div> 
                </div>
            </div>
        </div>
    );
};

export default GivingStatistics;