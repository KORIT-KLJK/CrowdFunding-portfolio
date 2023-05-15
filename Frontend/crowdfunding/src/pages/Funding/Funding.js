/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from "axios";
import React, { useState } from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
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
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
`;

export const fundingStatus = css`
    font-size: 13px;
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

export const checkFunding = css`
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
    const [hiddenFlag, setHiddenFlag] = useState(false);
    const [searchParam, setSearchParam] = useState({page:1, searchStatus: "전체", searchCategory:"최신순"});
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)

    const fundingData = useQuery(["fundingData"], async () => {
        const option= {
            params: {
                ...searchParam
            }
        }
        const response = await axios.get("http://localhost:8080/funding/main", option)
        return response;
    })

    const fundingCategorys = useQuery(["fundingCategory"], async () => {
        return await axios.get("http://localhost:8080/funding/category");
    })

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
      };

    return (
        <div>
            <div css={welcomeFunding}>펀딩 페이지에 오신 것을 환영합니다 ^_^(나중에 수정할 부분)</div>
            <div css={fundingMain}>
                <header css={fundingHeader}>
                    <button css={fundingCategoryMainButton}onClick={() =>handleCategoryClick(null)}>전체</button>
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
                        <div css={fundingStatusDetail}>
                            <div css={fundingStatus}>전체</div>
                            <div>{hiddenFlag ? "△" : "▽"}</div>
                        </div>
                        <div css={fundingStatusDetail}>
                            <div css={fundingStatus}>최신 순</div>
                            <div>{hiddenFlag ? "△" : "▽"}</div>
                        </div>
                    </div>
                <main css={fundingMainConatiner}>
                    {fundingData.isLoading 
                    ? <div>... 불러오는 중</div> 
                    : fundingData.data.data.fundingList.filter(
                    (funding) => selectedCategoryId === null ||
                    funding.fundingCategoryId === selectedCategoryId).map(funding => (
                        <div css={fundingContainer}>
                            <header>
                                <div css={imgBox}>
                                    <img css={img} src={funding.imgUrl} alt={funding.pageTitle} />
                                    <div css={checkFunding}>
                                        <div css={fundingTxt}>펀딩</div>
                                        <div>성공</div>
                                    </div>
                                </div>
                            </header>
                                <main key={funding.pageId}>
                                    <div css={fundingContainerMainTitlePrice}>
                                        <div css={fundingContainerMainTitlePageTitle}>{funding.pageTitle}</div>
                                        <div css={fundingContainerMainPricePadding}>
                                            <div css={fundingContainerMainPrice}>{(Math.round((funding.totalRewardPrice * 100) / funding.goalTotal))}%</div>
                                        </div>
                                    </div>
                                    <div css={fundingContainerMainUsername}>{funding.username}</div>
                                </main>
                            <footer css={fundingContainerFooter}>
                                    <div css={fundingContainerFooterEventStatus}>{funding.eventStatus} 남음</div>
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