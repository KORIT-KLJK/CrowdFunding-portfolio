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
    width: 2000px;
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
    &:focus {
        border: 1px solid #047ff1;
        color: #047ff1;
    }
`;

export const fundingStatusButtonContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 93%;
`;

export const fundingStatusButton = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 120px;
    height: 40px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
    margin-left: 10px;
    background-color: white;
    cursor: pointer;
    &:focus {
        border: 1px solid black;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    height: 200px;
    overflow: hidden;
`;

export const img = css`
    width: 100%;
    height: 100%;
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
    const [searchParam, setSearchParam] = useState({page:1, searchStatus: "전체", searchCategory:"최신순"});

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

    return (
        <div>
            <div css={welcomeFunding}>펀딩 페이지에 오신 것을 환영합니다 ^_^(나중에 수정할 부분)</div>
            <div css={fundingMain}>
                <header css={fundingHeader}>
                    <button css={fundingCategoryMainButton}>전체</button>
                    {fundingCategorys.isLoading ? <div>...불러오는 중</div> : fundingCategorys.data.data.map(fundingCategory => (
                        <div css={fundingCategoryContainer}>
                            <button css={fundingCategoryButton} key={fundingCategory.fundingCategoryId}>
                                {fundingCategory.categoryName}
                            </button>
                        </div>
                    ))}
                </header>
                <div css={fundingStatusButtonContainer}>
                    <button css={fundingStatusButton}>전체V</button>
                    <button css={fundingStatusButton}>최신순V</button>
                </div>
                <main css={fundingMainConatiner}>
                    {fundingData.isLoading ? <div>... 불러오는 중</div> : fundingData.data.data.fundingList.map(funding => (
                        <div css={fundingContainer}>
                                <header>
                                    <div css={imgBox}>
                                        <img css={img} src={funding.imgUrl} alt={funding.pageTitle} />
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