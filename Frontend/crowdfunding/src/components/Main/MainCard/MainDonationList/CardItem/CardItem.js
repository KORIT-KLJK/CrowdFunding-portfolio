/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const mainCardList = css`
    display: inline-block;
    align-items: flex-start;
    justify-content: flex-start;

    width: 1140px;
    height: 363px;
    overflow: hidden;
    margin-top: 20px;
`;
const cardListItem = css`
    display: inline-block;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #dbdbdb;

    width: 267px;
    
    position: relative;
    background-color: #fff;

    cursor: pointer;
    &:not(:nth-child(1)) {
        margin-left: 24px;
    }
    // &:not(:nth-child(n)) {조건} n번째 card만 조건에 따르지 않겠다. 
    // not이 없으면 true로 n번째만 조건에 따르겠다.로 보면됨.  
`;
const cardItemContent = css`
    padding: 21px 20px 0;
`;

const cardItemImg = css`
    width: 267px;
    height: 200px;
    color: #ccc;
`;

const cardItemTitle = css`
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
    line-height: 25px;
    font-size: 17px;
    letter-spacing: -.5px;
    color: #333;
`;

const cardItemOrganization = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
    font-size: 15px;
    color: #828282;
`;

const cardItemBar = css`
    height: 5px;
    margin-top: 13px;
    background-color: #e8e8e8;
`;
const cardItemPercent = css`
    display: inline-block;
    margin-top: 11px;
    font-size: 17px;
    letter-spacing: -.2px;
    color: #00ab33;
`;
const cardItemMoney = css`
    float: right;
    margin-top: 11px;
    font-size: 17px;
    color: #333;
`;

const CardItem = () => {
    const givings = useQuery(["mainDonationCardItem"], async () => {

    const response = await axios.get("http://localhost:8080/main/cardItemGiving")
    return response;
   });

   if(givings.isLoading) {
    return <></>
   }

   console.log(givings)

    return (
        
        <>
            <ul css={mainCardList}>
                {givings.data.data.cardGivingList.map(giving => (
                <li css={cardListItem} key={giving.pageId}>
                    <img css={cardItemImg} src={giving.imgUrl} alt={giving.imgUrl}></img>
                    <div css={cardItemContent}>
                        <strong css={cardItemTitle}>{giving.pageTitle}</strong>
                        <div css={cardItemOrganization}>{giving.centerName}</div>
                        <div css={cardItemBar}></div>
                        <strong css={cardItemPercent}>{giving.achievementRate}%</strong>
                        <strong css={cardItemMoney}>{giving.givingTotal}원</strong>
                    </div>
                </li>
                ))}
            </ul>
        </>
    );
};


// useQuery: 데이터 조회 , useMutation: 데이터가 변동이 있을때.
export default CardItem;