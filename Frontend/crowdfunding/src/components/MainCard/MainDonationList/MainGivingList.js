/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import CardItem from './CardItem/CardItem';
import { FaGreaterThan } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const donationContainer = css`
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    width: 1140px;

    margin: 55px auto;
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


const mainDonationList = () => {
    // function navigateHandle() {
    //     const navigate = useNavigate();
    
    //     const givingPageHandle = () => {
    //         navigate("/giving"); 
    //     }
    // } 

    return (
        <div css={donationContainer}>
            <h3 css={mainCardText} >100%전달하는 기부<div css={greaterThenIcon}><FaGreaterThan /></div></h3>
                <CardItem></CardItem>
                
        </div>
    );
};

export default mainDonationList;