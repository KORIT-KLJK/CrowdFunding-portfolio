/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from "axios";
import React, { useState } from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
export const fundingMain = css`
    position: relative;
    width: 1140px;
    height: 70px;

    margin: 0 auto;
`;

export const fundingHeader = css`
    width: 1140px;
    height: 100px;
    margin-top: 100px;
`;

export const fundingMainConatiner = css`
    display: flex;
    flex-wrap: wrap;
`;

export const fundingContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;   // 나중에 기능 구현이 되고 나면 max height로 바꾸기
    cursor: pointer;
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
    console.log(fundingData);

    return (
        <div css={fundingMain}>
            <header css={fundingHeader}>
                카테고리
            </header>
            <main css={fundingMainConatiner}>
                {fundingData.isLoading ? <div>... 불러오는 중</div> : fundingData.data.data.fundingList.map(funding => (
                    <div css={fundingContainer}>
                        <header>
                            이미지
                        </header>
                            <main key={funding.pageId}>
                                    <div>{funding.pageTitle}</div>
                                    <div>{funding.username}</div>
                                    <div>{funding.eventStatus}</div>
                                    <div>{funding.totalRewardPrice}</div>
                            </main>
                        <footer>
                            가격 정보
                        </footer>
                    </div>
                ))}
            </main>
            <footer>
                웹페이지 정보
            </footer>
        </div>
    );
};

export default Funding;