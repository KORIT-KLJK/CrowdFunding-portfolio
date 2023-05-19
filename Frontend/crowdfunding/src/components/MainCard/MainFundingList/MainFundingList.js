/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import CardItemFunding from './CardItem/CardItemFunding';
import { FaGreaterThan } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const fundingContainer = css`
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 1140px;
    margin: 70px auto;
    margin-bottom: 0;
`;

const mainCardText = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1140px;
    height: 30px;

    font-size: 25px;
    font-weight: 900;
    line-height: 1.2;
`;

const greaterThenIcon = css`
    margin: 2px 0 0 8px;
`;

const MainFundingList = () => {

    const navigate = useNavigate();
    const fundingPageHandle = () => {
        navigate("/funding");
    }

    return (
        <div css={fundingContainer}>
            <h3 css={mainCardText} onClick={fundingPageHandle}>소셜벤처를 먼저 만나는 펀딩<div css={greaterThenIcon}><FaGreaterThan /></div></h3>
                <CardItemFunding />
        </div>
    );
};

export default MainFundingList;