/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from 'axios';
import React, { useRef, useState } from 'react';
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
    width: 75px;
    height: 40px;
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

export const rewardsMain = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 0px;
`;

export const rewardNameAndDelete = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
`;

export const rewardsName = css`
    font-size: 15px;
`;

export const rewardsDeleteButton = css`
    border: none;
    font-size: 20px;
    background-color: white;
    color: #dbdbdb;
    cursor: pointer;
`;

export const rewardCountAndPriceContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const rewardButtonAndPrice = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const minusButton = css`
    border: 1px solid #dbdbdb;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: 30px;
    color: #949494;
    cursor: pointer;
`;

export const rewardCount = css`
    border: 1px solid #dbdbdb;
    padding-left: 20px;
    width: 80px;
    height: 40px;
    background-color: white;
    font-size: 18px;
`;

export const plusButton = css`
    border: 1px solid #dbdbdb;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: 30px;
    color: #949494;
    cursor: pointer;
`;

export const rewardsPrice = css`
    font-size: 17px;
    font-weight: 600;
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

export const joinFundingButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
`;

export const joiFundingButton = css`
    width: 100%;
    height: 55px;
    border-radius: 3px;
    border: none;
    font-size: 19px;
    font-weight: 600;
    background-color: #1f9eff;
    color: white;
    cursor: pointer;
`;

export const endFundingButton = css`
    width: 100%;
    height: 55px;
    border-radius: 3px;
    border: none;
    font-size: 19px;
    font-weight: 600;
    color: white;
`;

const FundingDetail = () => {
    const { pageId } = useParams();
    const [ selectRewardHidden, setSelectRewardHidden ] = useState(false);
    const [ rewards, setRewards ] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const fundingDetail = useQuery(["fundingDetail"], async () => {
        return await axios.get(`http://localhost:8080/fundingdetail/${pageId}`)
    });

    const fundingDetailReward = useQuery(["fundingDetailReward"], async () => {
        return await axios.get(`http://localhost:8080/fundingreward/${pageId}`)
    });

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
        const isDuplicate = rewards.some(reward => reward.fundingReward.rewardId === fundingReward.rewardId);
        if (isDuplicate) {
          alert("이미 등록된 상품입니다.");
          setSelectRewardHidden(false);
        } else {
          setSelectRewardHidden(false);
          setRewards([...rewards, { fundingReward }]);
          setTotalQuantity(quantity => quantity + 1);
          setTotalPrice(price => price + fundingReward.rewardPrice);
        }
    }

    const deleteRewardHandle = (reward) => {
        const newRewards = rewards.filter(r => r.fundingReward.rewardId !== reward.fundingReward.rewardId);
        setRewards(newRewards);
        setTotalQuantity(quantity => quantity - (reward.fundingReward.count || 1));
        setTotalPrice(price => price - (reward.fundingReward.rewardPrice * (reward.fundingReward.count || 1)));
    }
    
    const decreaseCount = (reward) => {
        const newRewards = [...rewards];
        const rewardIndex = newRewards.findIndex(r => r.fundingReward.rewardId === reward.fundingReward.rewardId);
        
        if (rewardIndex !== -1) {
          newRewards[rewardIndex].fundingReward.count = (newRewards[rewardIndex].fundingReward.count || 1) - 1;
          const count = newRewards[rewardIndex].fundingReward.count;
          if (count >= 1) {
            setTotalQuantity(quantity => quantity - 1);
            setTotalPrice(price => price - reward.fundingReward.rewardPrice);
          }
        }
        
        setRewards(newRewards);
    }

    const countHandle = (e, reward) => {
        const newRewards = [...rewards];
        const rewardIndex = newRewards.findIndex(r => r.fundingReward.rewardId === reward.fundingReward.rewardId);
        if (rewardIndex !== -1) {
          const count = parseInt(e.target.value, 10);
          newRewards[rewardIndex].fundingReward.count = isNaN(count) ? 0 : count;
          setRewards(newRewards);

          const updatedTotalQuantity = newRewards.reduce((total, r) => total + (r.fundingReward.count || 1), 1);
          const updatedTotalPrice = newRewards.reduce((total, r) => total + ((r.fundingReward.count || 1) * r.fundingReward.rewardPrice), 0);
          setTotalQuantity(updatedTotalQuantity);
          setTotalPrice(updatedTotalPrice);
        }
    }

    const increaseCount = (reward) => {
        const newRewards = [...rewards];
        const rewardIndex = newRewards.findIndex(r => r.fundingReward.rewardId === reward.fundingReward.rewardId);
        if (rewardIndex !== -1) {
          newRewards[rewardIndex].fundingReward.count = (newRewards[rewardIndex].fundingReward.count || 1) + 1;
          const count = newRewards[rewardIndex].fundingReward.count;
          if (count >= 1) {
            setTotalQuantity(quantity => quantity + 1);
            setTotalPrice(price => price + reward.fundingReward.rewardPrice);
          }
        }
        setRewards(newRewards);
      };

    return (
        <div>
            <div css={fundingDetailContainer}>
                <div css={fundingDetailHeader}>
                    <img css={fundingDetailImg} src={funding.imgUrl} alt={funding.fundingTitle} />
                    <div css={fundingDetailHeaderRight}>
                        <div css={fundingDetailNearDeadline}>{funding.deadline === "종료" ? "종료" : funding.deadline === "오늘 마감" ?  "오늘 마감" : `D-${funding.deadline}`}</div>
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
                                            onClick={() => selectRewardNameHandle(fundingReward)}>{fundingReward.rewardName}</li>
                                        ))}
                                        </ul>) : ""}
                                    {rewards.map(reward =>(
                                            <div css={rewardsMain} key={reward.fundingReward.rewardId}>
                                                <div css={rewardNameAndDelete}>
                                                    <div css={rewardsName}>{reward.fundingReward.rewardName}</div>
                                                    <button css={rewardsDeleteButton} onClick={() => deleteRewardHandle(reward)}>X</button>
                                                </div>
                                                <div css={rewardCountAndPriceContainer}>
                                                    <div css={rewardButtonAndPrice}>
                                                        <button css={minusButton}
                                                                onClick={() => decreaseCount(reward)}>-</button>
                                                        <input  css={rewardCount}
                                                                type="text"
                                                                value={reward.fundingReward.count || 1} 
                                                                onChange={(e) => countHandle(e, reward)} />
                                                        <button css={plusButton}
                                                                onClick={() => increaseCount(reward)}>+</button>
                                                    </div>
                                                    <div css={rewardsPrice}>{new Intl.NumberFormat('en-US').format(reward.fundingReward.rewardPrice)}원</div>
                                                </div>
                                            </div>
                                    ))}
                                <div css={TotalReward}>
                                    <div css={TotalRewardCount}>총 수량 {totalQuantity}개</div>
                                    <div css={TotalRewardPriceContainer}>
                                        <div css={TotalRewardPriceTxt}>총 금액</div>
                                        <div css={TotalRewardPrice}>{new Intl.NumberFormat('en-US').format(totalPrice)}원</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div css={joinFundingButtonContainer}>
                            {funding.deadline === "종료" ? <button css={endFundingButton}>펀딩 종료하기</button> : <button css={joiFundingButton}>펀딩 참여하기</button>}
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