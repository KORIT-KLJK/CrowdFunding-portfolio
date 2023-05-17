/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import FundingDetail from "./FundingDetail";
export const welcomeFunding = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    background-color: red;
    margin-top: 70px;
    font-size: 60px;
    font-weight: 600;
`;

export const fundingMain = css`
    position: relative;
    width: 1300px;
    height: 70px;
    margin: 0 auto;
`;

export const fundingHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    height: 100px;
    margin: 0px auto;
    margin-top: 50px;
`;


export const fundingCategoryContainer = css`
    margin: 5px;
`;

export const fundingCategoryMainButton = css`
    width: 130px;
    height: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-right: 5px;
    background-color: white;
    cursor: pointer;
    font-size: 15px;
    &:focus {
        border: 1px solid #047ff1;
        color: #047ff1;
    }
`;

export const fundingCategoryButton = css`
    width: 130px;
    height: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-size: 15px;
    &:focus {
        border: 1px solid #047ff1;
        color: #047ff1;
    }
`;

export const fundingStatusContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 1210px;
`;

export const fundingStatusDetail = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 125px;
    height: 38px;
    padding: 0px 10px;
    margin-left: 10px;
    background-color: white;

    cursor: pointer;

    &:focus {
        border: 1px solid #dbdbdb;
    }
`;


export const fundingStatus = css`
    font-size: 13px;
`;

export const sortingFundingStatusContainer = css`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;
    width: 1075px;
    height: 120px;
`;

export const sortingFundingRewardContainer = css`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 99;
    width: 1210px;
    height: 120px;
`;

export const sortingFundingStatusList = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #dbdbdb;
    border-top: none;
    width: 125px;
    padding: 10px;
    margin-left: 10px;
    margin-top: -10px;
    background-color: white;

    cursor: pointer;
`;

export const sortingFundingRewardStatusList = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #dbdbdb;
    border-top: none;
    width: 125px;
    padding: 10px;
    margin-left: 10px;
    margin-top: 20px;
    background-color: white;

    cursor: pointer;
`;

export const sortingFundingStatus = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: 13px;

    &:hover {
        border-bottom: 1px solid black;
    }
`;

export const sortingFundingReward = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: 13px;

    &:hover {
        border-bottom: 1px solid black;
    }
`;

export const fundingMainConatiner = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0px auto;
`;

export const fundingContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 13px;
    border: 1px solid #dbdbdb;
    width: 280px;
    height: 380px;   // 나중에 기능 구현이 되고 나면 max height로 바꾸기
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
`;
export const imgBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    height: 200px;
    overflow: hidden;
`;

export const img = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const checkFunding = ({funding}) => css`
    opacity: ${funding.eventStatus === "종료" ? "1" : "0"};
    border: 1px solid #37b343;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 14.5%;
    left: 89.5%;
    width: 60px;
    height: 60px;
    background-color: #38d247cc;
    color: white;
    font-size: 14px;
`;

export const fundingTxt = css`
    margin-bottom: 8px;
`;

export const fundingContainerMainTitlePrice = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 15px 15px 15px;
`;

export const fundingContainerMainTitlePageTitle = css`
    font-size: 16px;
    font-weight: 600;
`;

export const fundingContainerMainPricePadding = css`
    padding-left: 15px;
`;

export const fundingContainerMainUsername = css`
    padding: 0px 15px 15px 15px;
    border-bottom: 1px solid #dbdbdb66;
    color: #7c7c7c;
`;

export const fundingContainerMainPrice = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid #047ff1;
    border-radius: 50px;
    color: #047ff1;
    font-size: 17px;
`;

export const fundingContainerFooter = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`;

export const fundingContainerFooterEventStatus = css`
    color: #7c7c7c;
`;

export const fundingContainerFooterPrice = css`
    font-size: 17px;
    font-weight: 600;
`;


const Funding = () => {
    const navigate = useNavigate();
    const [ searchParam, setSearchParam ] = useState({fundingSortingReward: "최신 순", fundingSortingStatus: "전체"});
    const [ refresh, setRefresh ] = useState(true);
    const [ statusHiddenFlag, setStatusHiddenFlag ] = useState(false);
    const [ rewardHiddenFlag, setRewardHiddenFlag ] = useState(false);
    const [ sortingStatus, setSortingStatus ] = useState("전체");
    const [ sortingReward, setSortingReward ] = useState("최신 순");
    // 펀딩 메인화면 카테고리ID와 카테고리 선택에 있는 카테고리ID가 일치하는지
    const [ selectedCategoryId, setSelectedCategoryId ] = useState(null);

    // 펀딩 메인화면에 쓸 것들
    const fundingData = useQuery(["fundingData"], async () => {
        const option = {
            params : {
                ...searchParam
            }
        }
        const response = await axios.get("http://localhost:8080/funding/main", option);
        return response;
    }, {
        enabled: refresh,
        onSuccess: () => {
            setRefresh(false);
        }
    });

    // 펀딩 카테고리 선택에 쓸 것들
    const fundingCategorys = useQuery(["fundingCategory"], async () => { 
        return await axios.get("http://localhost:8080/funding/category");
    });

    if(fundingData.isLoading) {
        return <></>;
    }

    // 카테고리 이름들이 들어감. (전체는 null을 넣어줌으로써 모든 걸 보여준다)
    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    const statussortingHidden = () => {
        if(statusHiddenFlag) {
            setStatusHiddenFlag(false);
        }else {
            setStatusHiddenFlag(true);
        }
    }

    const rewardsortingHidden = () => {
        if(rewardHiddenFlag) {
            setRewardHiddenFlag(false);
        }else {
            setRewardHiddenFlag(true);
        }
    }

    const sortingStatusHandle = (e) => {
        const statusText = e.target.textContent;
        setSearchParam({...searchParam, fundingSortingStatus: statusText})
        setSortingStatus(statusText);
        setStatusHiddenFlag(false);
        setRefresh(true);
    }

    const sortingRewardHandle = (e) => {
        const rewardText = e.target.textContent;
        setSearchParam({ ...searchParam, fundingSortingReward: rewardText});
        setSortingReward(rewardText);
        setRewardHiddenFlag(false);
        setRefresh(true);
    };

    const fundingDetailHandle = (pageId) => {
        navigate("/funding/" + pageId);
    }

    return (
        <div>
            <div css={welcomeFunding}>펀딩 페이지에 오신 것을 환영합니다 ^_^(나중에 수정할 부분)</div>
            <div css={fundingMain}>
                <header css={fundingHeader}>
                    <button css={fundingCategoryMainButton} onClick={() => handleCategoryClick(null)}>전체</button>
                    {fundingCategorys.isLoading ? <div>...불러오는 중</div> : fundingCategorys.data.data.map(fundingCategory => (
                        <div css={fundingCategoryContainer}>
                            <button css={fundingCategoryButton}
                                    onClick={() =>handleCategoryClick(fundingCategory.fundingCategoryId)}
                                    key={fundingCategory.fundingCategoryId}>
                                {fundingCategory.categoryName}
                            </button>
                        </div>
                    ))}
                </header>
                    <div css={fundingStatusContainer}>
                        <button css={fundingStatusDetail} onClick={statussortingHidden}>
                            <div css={fundingStatus}>{sortingStatus}</div>
                            <div>{statusHiddenFlag ? "△" : "▽"}</div>
                        </button>
                        <button css={fundingStatusDetail} onClick={rewardsortingHidden}>
                            <div css={fundingStatus}>{sortingReward}</div>
                            <div>{rewardHiddenFlag ? "△" : "▽"}</div>
                        </button>
                    </div>
                    <div css={sortingFundingStatusContainer}>
                        {statusHiddenFlag ? (<ul css={sortingFundingStatusList}>
                            <li css={sortingFundingStatus} onClick={sortingStatusHandle}>전체</li>
                            <li css={sortingFundingStatus} onClick={sortingStatusHandle}>진행중</li>
                            <li css={sortingFundingStatus} onClick={sortingStatusHandle}>종료</li>
                        </ul>) : ""}
                    </div>
                    <div css={sortingFundingRewardContainer}>
                        {rewardHiddenFlag ? (<ul css={sortingFundingRewardStatusList}>
                            <li css={sortingFundingReward} onClick={sortingRewardHandle}>최신 순</li>
                            <li css={sortingFundingReward} onClick={sortingRewardHandle}>참여 금액 순</li>
                            <li css={sortingFundingReward} onClick={sortingRewardHandle}>참여율 순</li>
                            <li css={sortingFundingReward} onClick={sortingRewardHandle}>종료 임박 순</li>
                        </ul>) : ""}
                    </div>
                <main css={fundingMainConatiner}>
                    {fundingData.data.data.fundingList.filter(
                    funding => selectedCategoryId === null ||
                    funding.fundingCategoryId === selectedCategoryId).map(funding => (
                        <div css={fundingContainer} onClick={() => {fundingDetailHandle(funding.pageId)}}>
                            <header>
                                <div css={imgBox}>
                                    <img css={img} src={funding.imgUrl} alt={funding.pageTitle} />
                                        <div css={checkFunding({funding})}>
                                            <div css={fundingTxt}>펀딩</div>
                                            <div>{funding.joinPercent >= 100 ? "성공" : "종료"}</div>
                                        </div>
                                </div>
                            </header>
                                <main key={funding.pageId}>
                                    <div css={fundingContainerMainTitlePrice}>
                                        <div css={fundingContainerMainTitlePageTitle}>{funding.pageTitle}</div>
                                        <div css={fundingContainerMainPricePadding}>
                                            <div css={fundingContainerMainPrice}>{funding.joinPercent}%</div>
                                        </div>
                                    </div>
                                    <div css={fundingContainerMainUsername}>{funding.username}</div>
                                </main>
                            <footer css={fundingContainerFooter}>
                                    <div css={fundingContainerFooterEventStatus}>{funding.eventStatus}</div>
                                    <div css={fundingContainerFooterPrice}>{new Intl.NumberFormat('en-US').format(funding.totalRewardPrice)}원</div>
                            </footer>
                        </div>
                    ))}
                </main>
                <footer>
                    웹페이지 정보
                </footer>
            </div>
        </div>
    );
};

export default Funding;