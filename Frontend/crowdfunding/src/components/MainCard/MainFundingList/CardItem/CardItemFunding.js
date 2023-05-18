/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import axios from "axios";
import React from 'react';
import { useQuery } from "react-query";


const mainFundingContainer = css`
    
`;

const fundingContainer = css`
    float: left;
    position: relative;
    border: 1px solid #dbdbdb;
    width:  364px;
    height: 356px;
    margin: 20px 24px 0 0;
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

    return (
        <div css={mainFundingContainer}>
            {/* {fundings.isLoading ?(
                <div>불러오는중...</div>
            ) : (
                givings.data.data.cardGivingList.map(giving => ( */}
                <div css={fundingContainer}>
                    <header>
                        <div css={imgBox}>
                        </div>
                    </header>
                    <main>
                        <div css={fundingText}>
                            <div css={fundingContainerMainTitlePrice}>회사명</div>
                            <strong css={fundingContainerMainTitlePageTitle}>funding_name</strong>
                            <span css={fundingContainerMainPricePadding}>
                                <span css={fundingContainerMainPrice}>%</span>
                            </span>
                        </div>
                    </main>
                </div>
                {/* ))
            )} */}
        </div>
    );
};

export default CardItemFunding;