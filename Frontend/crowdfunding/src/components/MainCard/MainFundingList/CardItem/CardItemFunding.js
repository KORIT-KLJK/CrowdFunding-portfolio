/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from "axios";
import React from 'react';
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";


const mainFundingContainer = css`
    display: flex;
`;

const fundingContainer = css`
    border: 1px solid #dbdbdb;
    width:  364px;
    height: 356px;
    margin: 20px 22px 0 0;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
`;

const imgBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 364px;
    height: 242px;
    overflow: hidden;
    background-color: #ccc;
`;


const fundingText = css`
    position: relative;
    padding: 18px 100px 20px 20px;
`;

const fundingContainerMainTitlePrice = css`
    width: 244px;
    height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    color: #828282;

`;

const fundingContainerMainTitlePageTitle = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 50px;
    line-height: 25px;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 6px;

    font-size: 17px;
    letter-spacing: -.5px;
    color: #333;
`;

const fundingContainerMainPricePadding = css`
    position: absolute;
    top: 50%;
    height: 60px;
    margin-top: -30px;
    right: 20px;
    width: 60px;
    border: 1px solid #0f92e0;
    border-radius: 50px;
    `;

const fundingContainerMainPrice = css`
    display: flex;
    justify-content: center;
    align-items: center
    ;
    font-size: 18px;
    line-height: 60px;
    letter-spacing: -.2px;
    text-align: center;
    color: #0f92e0;
`;


const CardItemFunding = () => {
    const fundings = useQuery(["CardItemFunding"], async () => {
    
    const response = await axios.get("http://localhost:8080/main/cardItemFunding")
    return response;
    });

    console.log(fundings)

    const navigate = useNavigate();
    const fundingDetailHandle = (pageId) => {
        navigate("/funding/" + pageId)
    }

    return (
        <div css={mainFundingContainer}>
            {fundings.isLoading ?(
                <div>불러오는중...</div>
            ) : (
                fundings.data.data.cardFundingList.map(funding => (
                    <div css={fundingContainer} key={funding.pageId} onClick={() => fundingDetailHandle(funding.pageId)}>      
                    {/** navigate로 상세페이지 클릭이벤트는 파라미터로 해당 페이지 주소(pageId)를 받은뒤 onClick에 함수를 줘야됨 아님 무한루프돔. */}
                    <header>
                        <img css={imgBox} src={funding.imgUrl} alt={funding.imgUrl}></img>
                    </header>
                    <main>
                        <div css={fundingText}>
                            <div css={fundingContainerMainTitlePrice}>{funding.userName}</div>
                            <strong css={fundingContainerMainTitlePageTitle}>{funding.pageTitle}</strong>
                            <span css={fundingContainerMainPricePadding}>
                                <span css={fundingContainerMainPrice}>{funding.joinPercent}%</span>
                            </span>
                        </div>
                    </main>
                </div>
                ))
            )}
        </div>
    );
};

export default CardItemFunding;