/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import GivingModal from "../../components/Modal/GivingModal";

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
    border-right: 1px solid #e5e5e5;
`;

const givingInfoBox = css`
    margin: 0 1px;
    padding: 23px 29px 27px;
    border-bottom: 0;
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
    padding-top: 19px;
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
    cursor: pointer;
`;

const collectGroupBox = css`
    width: 280px;
    border-top: 1px solid #e5e5e5;
`;

const collectGroupInfo = css`
    padding: 28px 10px 28px 10px;
    background-color: #dbdbdb33;
`;

const givingGroupName = css`
    overflow: hidden;
    width: 170px;
    margin-left: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: .01em;
    line-height: 20px;
    color: #444;
    font: bold;
    vertical-align: top;
`;

const givingGroupBanner = css`
    width: 281px;
    padding: 20px;
    height: 70px;
    font-size: 15px;
    border-width: 0 1px;
`;

const givingGroupInfo = css`
    font-size: 13px;
    position: flex;
    margin-top: 20px;
    margin-left: 16px;
`;

const strongColor = css`
    color: #08a838;
`;

const todayCommendBox = css`
    padding: 30px;
    border-top: 1px solid #e5e5e5;
`;

const todayCommendLogo = css`
    overflow: hidden;
    width: 97px;
    height: 28px;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    letter-spacing: .04em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;

const todayCommendUl = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    list-style: none;
`;

const todayCommendLi = css`
    padding: 6px;
    display: list-item;
    text-align: -webkit-match-parent;
    cursor: pointer;
`;

const todayImgBox = css`
    padding-top: 5px;
    float: left;
    position: relative;
    margin-right: 14px;
`;

const todayImg = css`
    width: 70px;
    aspect-ratio: auto 70 / 57;
    height: 57px;
`;

const todayTextBox = css`
    display: block;
    overflow: hidden;
    line-height: 20px;
`;

const todayText = css`
    display: inline-block;
    padding-top: 1px;
    vertical-align: middle;
`;

const GivingDetail = () => {
    const { pageId } = useParams();
    const [searchParams, setSearchParams] = useState();
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const givingDetail = useQuery(["givingDetail"], async () => {
        return await axios.get(`http://localhost:8080/givingDetail/${pageId}`);
    });
    
    const mostGivings = useQuery(["mostGivings"], async () => {
        return await axios.get(`http://localhost:8080/giving/most/${pageId}`);
    });

    useEffect(() => {
        givingDetail.refetch();
        mostGivings.refetch();
    }, [pageId]);

    const givingDetailHandle = (pageId) => {
        navigate("/giving/" + pageId)
    }
    
    if(givingDetail.isLoading || mostGivings.isLoading){
        return <></>
    }

    const toGivingPage = (pageId) => {
        navigate(`/giving/${pageId}`);
    }

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const modalHandleClick = () => {
        setOpen(true);
    }

    const outsideModalClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setOpen(false);
        }
    }


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
                            <div css={givingButton} onClick={openModal}>
                                <GivingModal isOpen={isOpen} isClose={closeModal} givingDetail={givingDetail.data.data} />
                                모금함 기부하기
                            </div>
                            <div css={givingGroupBanner}>
                                <div>기부하신 금액은 수수료없이
                                    <strong css={strongColor}>100% 전달</strong>
                                    됩니다.
                                </div>
                            </div>
                            <div css={collectGroupBox}>
                                <div css={collectGroupInfo}>
                                    <div css={givingGroupName}>기부단체정보</div>
                                    <div css={givingGroupInfo}>단체명: {givingDetail.data.data.centerName}</div>
                                    <div css={givingGroupInfo}>대표자: {givingDetail.data.data.centerCEO}</div>
                                    <div css={givingGroupInfo}>기부단체주소지: {givingDetail.data.data.centerAddress}</div>
                                    <div css={givingGroupInfo}>전화번호: {givingDetail.data.data.centerPhoneNumber}</div>
                                    <div></div>
                                </div>
                            </div>
                            <div css={todayCommendBox}>
                                <div css={todayCommendLogo}>기부 목록</div>
                                    <ul css={todayCommendUl}>
                                        {mostGivings.data.data.map(mostGiving => 
                                            <li css={todayCommendLi} key={mostGiving.pageId} onClick={() => toGivingPage(mostGiving.pageId)}>
                                                <div css={todayImgBox}>
                                                    <img css={todayImg} src={mostGiving.imgUrl} alt={mostGiving.pageTitle} />
                                                </div>
                                                <div css={todayTextBox}>
                                                    <div css={todayText}>{mostGiving.pageTitle}</div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                            </div>
                    </div>
                </div>
        </>
    );
};

export default GivingDetail;