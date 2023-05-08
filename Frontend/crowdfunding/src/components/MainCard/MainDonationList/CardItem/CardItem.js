/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

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
    height: 363px;       
    position: relative;
    background-color: #fff;

    cursor: pointer;
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
    return (
        <>
            <ul css={mainCardList}>
                <li css={cardListItem}>
                    <div css={cardItemImg}><img src="" alt="" />img</div>
                    <div css={cardItemContent}>
                        <strong css={cardItemTitle}>보고싶어요,생명을 구하고 떠난 우리 아빠</strong>
                        <div css={cardItemOrganization}>사랑의 장기기증 운동본부</div>
                        <div css={cardItemBar}>모금률</div>
                        <strong css={cardItemPercent}>모금퍼센트</strong>
                        <strong css={cardItemMoney}>모금금액</strong>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CardItem;