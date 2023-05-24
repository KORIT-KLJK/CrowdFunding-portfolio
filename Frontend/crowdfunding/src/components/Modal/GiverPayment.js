/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { async } from "q";
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation, useQuery } from "react-query";

const modalContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const modalBackDrop = css`
    position: absolute;
    width: 700px;
    height: 400px;
    padding: 40px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    `;

const modalCloseBtn = css`
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    color: rgba(0, 0, 0, 0.7);
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
`;

const modalHeaderBox = css`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    padding: 20px 0px;
    background: #fff;
    height: 80px;
    border-bottom: 1px solid #ebebeb;
`;

const modalPageTitle = css`
    overflow: visible;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;

const pageTitleUnicef = css`
    display: inline-block;
    font-size: 12px;
    color: #888;
    line-height: 15px;
`;

const modalBodyBox = css`
    position: relative;
    height: 131px;
    padding: 29px 43px 39px;
    border-top-width: 0;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
`;

const modalGivingMentBox = css`
    padding: 4px 0 49px;
    font-size: 16px;
    line-height: 1.2;
    color: #666;
    text-align: center;
`;

const modalGivingMent = css`
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #000;
`;

const modalGivingSubMent = css`
    font-size: 13px;
`;

const modalGiverInfoBox = css`
    position: relative;
    padding: 19px 0 29px;
    background-color: #fff;
    font-size: 13px;
    text-align: left;
    z-index: 10;
`;

const modalGiverInfoUl = css`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const giverInfo = css`
    position: relative;
    float: left;
    width: 100px;
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
`;

const inputUserInfo = css`
    position: relative;
    display: flex;
    width: 97px;
    padding: 0 8px;
    border: solid 1px #ccc;
    height: 33px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 12px;
    color: #666;
    -webkit-box-sizing: border-box;
    margin-left: 10px;
    margin-top: 10px;
    box-sizing: border-box;
`;

const givingBtn = css`
    display: inline-block;
    width: 97px;
    height: 30px;
    border: 1px solid rgba(0,0,0,.1);
    background: #10c838;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 1px #086a1e;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
`;

const GiverPayment = ({ isOpen, isClose, givingDetail }) => {
    const [ givingTotal, setGivingTotal ] = useState(0);

    ReactModal.setAppElement('#root');

    const principalUser = useQuery(["principalUser"], async () => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        return await axios.get("http://localhost:8080/principal", option)
    })


    const giverPost = useMutation(async () => {
        const data = {
            userId: principalUser.data.data.userId,
            givingTotal,
            pageId: givingDetail.pageId
        }
        const option = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.post("http://localhost:8080/giver/payment", JSON.stringify(data), option);
        return response;
    });

    if(principalUser.isLoading) {
        return <></>
    }

    const givingTotalInputHandle = (e) => {
        setGivingTotal(e.target.value);
    }
     

    return (
        <ReactModal isOpen={isOpen}>
            <div css={modalContainer}>
                <div css={modalBackDrop}>
                    <div css={modalHeaderBox}>
                        <div css={modalPageTitle}>{givingDetail.pageTitle}<br /><span css={pageTitleUnicef}>By Unicef</span></div>
                        <button css={modalCloseBtn} onClick={isClose}>✖</button>
                    </div>
                    <div css={modalBodyBox}>
                        <div css={modalGivingMentBox}>
                            <div css={modalGivingMent}>"기부자님의 소중한 마음으로 놀라운 변화가 일어납니다."</div>
                            <span css={modalGivingSubMent}>투명한 기부 후기로 그 변화를 소개하고 보답하겠습니다</span>
                        </div>
                    </div>
                    <div css={modalGiverInfoBox}>
                        <ul css={modalGiverInfoUl}>                     
                            <li>
                                <span css={giverInfo}>기부 금액</span>
                                <input css={inputUserInfo} placeholder="원" type="text" style={{ textAlign: 'right' }} onChange={givingTotalInputHandle} />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button css={givingBtn} onClick={() => giverPost.mutate()}>확인</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default GiverPayment;