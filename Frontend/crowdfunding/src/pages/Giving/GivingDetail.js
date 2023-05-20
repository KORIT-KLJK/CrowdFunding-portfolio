/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const mainContainer = css`
    position: relative;
    display: flex;
    width: 1098px;
    margin: 0 auto 90px;
    border-bottom: 1px solid #e5e5e5;
`;

const storyDetailContainer = css`
    float: left;
    width: 816px;
    margin: 0 auto 90px;
    padding: 60px 94px 90px;
    font-size: 16px;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
`;

const pageTitle = css`
    font-size: 36px;
    font-weight: 400;
    color: #222;
    width: 628px;
    margin-bottom: 30px;
    letter-spacing: .4px;
    line-height: 40px;
`;

const detailImgBox = css`
    width: 628px;
    height: 443px;
`;

const givingDetailImg = css`
    width: 100%;
    height: 100%;
`;

const givingStoryBox = css`
    float: left;
    width: 628px;
    font-size: 16px;
`;

const storyTitle = css`
    font-weight: 700;
    font-size: 20px;
    color: #444;
    margin-top: 20px;
    line-height: 30px;
    letter-spacing: 1px;
`;

const storyContent = css`
    margin-top: 16px;
    width: 628px;
    font-size: 18px;
    color: #666;
    line-height: 32px;
    text-align: justify;
    letter-spacing: -.01px;
`;

const givingStatusBox = css`
    float: left;
    width: 282px;
    font-size: 15px;
    padding-bottom: 25px;
`;

const givingInfoBox = css`
    margin: 0 1px;
    padding: 23px 29px 27px;
    border-bottom: 0;
    border-right: 1px solid #e5e5e5;
`;


const graphStatus = css`
    padding-right: 2px;
    font-family: arial;
`;

const percent = css`
    float: left;
    font-size: 24px;
    color: #00ab33;
`;

const percentCss= css`
    font-size: 53px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -2px;
    margin-right: 7px
`;

const percentBar = css`
    width: 223px;
    height: 5px;
    margin-top: 5px;
    border-radius: 3px;
    background-color: #10c838;
`;

const periodBox = css`
    padding: 13px 0 11px;
    font-size: 18px;
    font-weight: 600;
    color: #888;
    letter-spacing: -.04em;
`;

const dDay = css`
    display: inline-block;
    height: 20px;
    padding: 1px 10px 0;
    margin-right: 5px;
    border-radius: 2px;
    background: #f86f46;
    font-size: 14px;
    font-weight: 800;
    color: #fff;
    line-height: 21px;
    text-align: center;
    vertical-align: top;
`;

const givingArea = css`
    padding-top: 24px;
`;

const givingMoney = css`
    padding-bottom: 0;
    font-size: 18px;
    color: #444;
`;

const givingButton = css`
    display: inline-block;
    width: 281px;
    height: 60px;
    padding-top: 17px;
    border: 1px solid rgba(0,0,0,.1);
    background: #10c838;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 1px #086a1e;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;

const GivingDetail = () => {
    const { pageId } = useParams();
    const givingDetail = useQuery(["givingDetail"], async () => {
        return await axios.get(`http://localhost:8080/givingDetail/${pageId}`);
    });

    if(givingDetail.isLoading){
        return <></>
    }

    console.log(givingDetail.data.data)

    return (
        <>
                <div css={mainContainer}>
                    <div css={storyDetailContainer}>
                        <div css={givingStoryBox}>
                            <div css={pageTitle}>{givingDetail.data.data.pageTitle}</div>
                            <div css={detailImgBox}>
                                <img css={givingDetailImg} src={givingDetail.data.data.imgUrl} alt={givingDetail.data.data.pageTitle} />   
                            </div>
                            <div>
                                <div css={storyTitle}>{givingDetail.data.data.storyTitle}</div>
                                <div css={storyContent}>{givingDetail.data.data.storyContent}</div>
                            </div>
                        </div>
                    </div>
                    <div css={givingStatusBox}>
                        <div css={givingInfoBox}>
                            <div css={graphStatus}>
                                <span css={percent}>
                                    <strong css={percentCss}>{givingDetail.data.data.achievementRate}</strong>%
                                </span>
                                <progress value={givingDetail.data.data.achievementRate} css={percentBar} max="100" /> 
                            </div>
                            <div>
                                <div css={periodBox}>{givingDetail.data.data.registerDate} ~ {givingDetail.data.data.endDate}</div>
                            </div>
                            <div css={dDay}>{givingDetail.data.data.dday === "모금 종료" ? "모금 종료"
                                            : givingDetail.data.data.dday === "오늘 모금 종료" ?  "오늘 모금 종료" 
                                            : `D-${givingDetail.data.data.dday}`}
                            </div>
                            <div css={givingArea}>
                                <div css={givingMoney}>{new Intl.NumberFormat("en-US").format(givingDetail.data.data.givingTotal)}원</div>
                            </div>
                        </div>
                            <div css={givingButton}>모금함 기부하기</div>
                    </div>
                </div>
        </>
    );
};

export default GivingDetail;