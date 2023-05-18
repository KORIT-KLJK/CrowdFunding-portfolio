/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const fundingDetailContainer = css`
    width: 100%;
    padding-top: 70px;
`;

export const fundingDetailHeader = css`
    display: flex;
    width: 1150px;
    padding-top: 60px;
    margin: 0px auto;
`;

export const fundingDetailImg = css`
    width: 750px;
    height: 480px;
`;

export const fundingDetailHeaderRight = css`
    margin-left: 40px;
        /* 진행 바의 색상 */
progress::-webkit-progress-value {
  background-color: skyblue;
}

/* 배경색 */
progress::-webkit-progress-bar {
  background-color: #e8e8e8;
}
`;

export const fundingDetailNearDeadline = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 55px;
    height: 30px;
    background-color: red;
    color: white;
    font-size: 16px;
    font-weight: 600;
`;

export const fundingDetailFundingTitle = css`
    font-size: 35px;
    margin-top: 10px;
    font-weight: 600;
`;

export const fundingDetailJoinPercent = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    font-size: 35px;
    font-weight: 600;
    color: skyblue;
`;

export const fundingDetailJoinPercentProgress = css`
  width: 100%;
  height: 5px;
  margin-top: 13px;
  border-radius: 3px;
`;

export const fundingDetailTotal = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`;

export const fundingDetailGoalTotal = css`
    font-size: 16px;
    color: #928f8f;
`;

export const fundingDetailTotalRewardPrice = css`
    font-size: 25px;
    font-weight: 600;
`;

export const funderName = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #dbdbdb55;
`;

export const fundingDetailRewardContainer = css`
    border-bottom: 1px solid #dbdbdb55;
`;

export const SelectFundingDetail = css`
    margin: 20px 0px;
`;

export const SelectRewardButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const SelectRewardButton = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 390px;
    height: 40px;
    background-color: white;
    cursor: pointer;
`;

export const SelectRewardTxt = css`
    padding-left: 20px;
`;

export const SelectRewardArrow = css`
    margin-right: 10px;
    font-size: 20px;
`;

export const SelectRewardList = css`
    position: absolute;
    border: 1px solid #dbdbdb;
    border-bottom: none;
    z-index: 99;
    width: 390px;
    background-color: white;
`;

export const SelectRewardName = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 13px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: #dbdbdb22;
    }
`;

export const TotalReward = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const TotalRewardCount = css`
    font-size: 16px;
    color: #928f8f;
`;

export const TotalRewardPriceContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TotalRewardPriceTxt = css`
    font-size: 16px;
    font-weight: 600;
`;

export const TotalRewardPrice = css`
    font-size: 25px;
    font-weight: 600;
    margin-left: 20px;
    color: skyblue;
`;

const FundingDetail = () => {
    const { pageId } = useParams();
    const [ count, setCount ] = useState(1);
    const [ rewardPrice, setRewardPrice ] = useState();
    const [ selectRewardHidden, setSelectRewardHidden ] = useState(false);
    const [ rewardId, setRewardId ] = useState(null);
    const [ options, setOptions ] = useState([]);

    const fundingDetail = useQuery(["fundingDetail"], async () => {
        return await axios.get(`http://localhost:8080/fundingdetail/${pageId}`)
    });

    const fundingDetailReward = useQuery(["fundingDetailReward"], async () => {
        return await axios.get(`http://localhost:8080/fundingreward/${pageId}`)
    })

    if(fundingDetail.isLoading) {
        return <></>
    }
    const funding = fundingDetail.data.data;

    const selectRewardHandle = () => {
        if(selectRewardHidden) {
            setSelectRewardHidden(false);
        }else {
            setSelectRewardHidden(true);
        }
    }

    const selectRewardNameHandle = (fundingReward) => {
        setSelectRewardHidden(false);
        setRewardPrice(fundingReward.rewardPrice);
        setRewardId(fundingReward.rewardId);
    }

    const decreaseCount = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    }

    const increaseCount = () => {
        setCount(count + 1);
    }


    // 펀딩 번호이자, 페이지 번호: {fundingDetail.data.data.fundingId},
    // 리워드 들고오기
    return (
        <div>
            <div css={fundingDetailContainer}>
                <div css={fundingDetailHeader}>
                    <img css={fundingDetailImg} src={funding.imgUrl} alt={funding.fundingTitle} />
                    <div css={fundingDetailHeaderRight}>
                        <div css={fundingDetailNearDeadline}>D-{funding.nearDeadline}</div>
                        <div css={fundingDetailFundingTitle}>{funding.fundingTitle}</div>
                        <div css={fundingDetailJoinPercent}>{funding.joinPercent}%</div>
                        <progress css={fundingDetailJoinPercentProgress} value={funding.joinPercent} max="100"/>
                        <div css={fundingDetailTotal}>
                            <div css={fundingDetailGoalTotal}>{new Intl.NumberFormat('en-US').format(funding.goalTotal)}원 목표</div>
                            <div css={fundingDetailTotalRewardPrice}>{new Intl.NumberFormat('en-US').format(funding.totalRewardPrice)}원</div>
                        </div>
                        <div css={funderName}>{funding.username}</div>
                        <div css={fundingDetailRewardContainer}>
                            <div css={SelectFundingDetail}>
                                <button css={SelectRewardButton} onClick={selectRewardHandle}>
                                    <div css={SelectRewardTxt}>리워드 선택하기</div>
                                    <div css={SelectRewardArrow}>{selectRewardHidden ? "△" : "▽"}</div>
                                </button>
                                {selectRewardHidden ? (<ul css={SelectRewardList}>
                                    {fundingDetailReward.data.data.rewardList.map(fundingReward => (
                                        <li css={SelectRewardName} 
                                            onClick={() => selectRewardNameHandle(fundingReward)}
                                            key={fundingReward.rewardId}>{fundingReward.rewardName}</li>
                                        ))}
                                        </ul>) : ""}
                                    {fundingDetailReward.data.data.rewardList.filter(fundingReward => 
                                        fundingReward.rewardId === rewardId
                                    ).map(fundingReward => (
                                        <div key={fundingReward.rewardId}>
                                            <div>
                                                <div>{fundingReward.rewardName}</div>
                                                <button>X</button>
                                            </div>
                                            <div>
                                                <div>
                                                    <button onClick={decreaseCount}>-</button>
                                                    <input type="text" value={count} />
                                                    <button onClick={increaseCount}>+</button>
                                                </div>
                                                <div>{rewardPrice}원</div>
                                            </div>
                                        </div>
                                    ))}
                                    <div css={TotalReward}>
                                        <div css={TotalRewardCount}>총 수량 0개</div>
                                        <div css={TotalRewardPriceContainer}>
                                            <div css={TotalRewardPriceTxt}>총 금액</div>
                                            <div css={TotalRewardPrice}>0원</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                펀딩 스토리 제목: {funding.storyTitle},
                펀딩 스토리 내용: {funding.storyContent}
            </main>
            <footer>
                리워드 안내
                결제 방법 및 배송 방법
            </footer>
        </div>
    );
};

export default FundingDetail;