/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import HeaderMain from '../../components/Header/HeaderMain/HeaderMain';

const mainContainer = css`
    width: 100%;
    position: relative;
    overflow: hidden;
    margin: 0;
`;

const storyDetailContainer = css`
    float: left;
    width: 628px;
    padding: 60px 94px 90px;
    font-size: 16px;
`;

const img = css`
    width: 628px;
`;

const storyTitle = css`
    font-size: 26px;
    font-weight: 600;
    color: #222;
    letter-spacing: 4px;
    line-height: 40px;
    margin-top: 20px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const ul = css`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const li = css`
    display: list-item;
    text-align: -webkit-match-parent;
`;

const GivingDetail = () => {
    const { pageId } = useParams();
    const givingDetail = useQuery(["givingDetail"], async () => {
        return await axios.get(`http://localhost:8080/givingDetail/${pageId}`)
    });

    if(givingDetail.isLoading){
        return <></>
    }
    console.log(givingDetail.data.data)
    return (
        <div>
            <header>
                <div css={mainContainer}>
                    <header>
                        <HeaderMain />
                    </header>
                    <div css={storyDetailContainer}>
                        <div css={storyTitle}>{givingDetail.data.data.storyTitle}</div>
                        <div css={ul}>
                            <img css={img} src={givingDetail.data.data.imgUrl} alt={givingDetail.data.data.pageTitle} />
                            <div css={li}>
                                <div>{givingDetail.storyContent}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default GivingDetail;