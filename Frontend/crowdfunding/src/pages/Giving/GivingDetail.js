/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import GiverPayment from "../../components/Modal/GiverPayment";
import { authenticatedState } from "../Login/AuthAtom";
import { useRecoilState } from "recoil";

const adminContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    font-family: "SUITE-Variable";
`;

const givingModifyButton = css`
    border: none;
    border-radius: 50%;
    background-color: #1f9eff;
    margin-right: 50px;
    width: 120px;
    height: 50px;
    cursor: pointer;
`;

const givingModifyContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: #000000aa;   
`;

const givingIdentifyContainer = css`
    border-radius: 9px;
    margin-top: 200px;
    width: 700px;
    background-color: white;
`;

const givingIdentifyMain = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

const givingModifyTitle = css`
    font-size: 30px;
`;

const modifyGivingHeader = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const modifyContainer = css`
    padding-top: 40px;
    width: 100%;
`;

const modifyTitleTxt = css`
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
`;

const modifyValue = css`
    outline: none;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 40px;
    font-size: 18px;
`;

const modifyIdentifyButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    width: 400px;
`;

const modifyIdentifyButton = css`
    display: inline-block;
    width: 120px;
    height: 40px;
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

const modifyCancelButton = css`
    display: inline-block;
    width: 120px;
    height: 40px;
    border: 1px solid rgba(0,0,0,.1);
    background: #dbdbdb;
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

const givingDeleteButton = css`
    border: none;
    border-radius: 50%;
    background-color: #888888;
    margin-right: 50px;
    width: 120px;
    height: 50px;
    cursor: pointer;
`;

const givingDeleteContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    background-color: #000000aa;   
`;

const givingDeleteTitle = css`
    font-size: 30px;
`;

const givingDeleteMessage = css`
    padding-top: 40px;
    font-size: 20px;
`;

const givingDeleteButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    width: 400px;
`;

const deleteIdentifyButton = css`
    display: inline-block;
    width: 120px;
    height: 40px;
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

const deleteCancelButton = css`
    display: inline-block;
    width: 120px;
    height: 40px;
    border: 1px solid rgba(0,0,0,.1);
    background: #dbdbdb;
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

const mainContainer = css`
    position: relative;
    display: flex;
    width: 1098px;
    margin: 0 auto 90px;
    border-bottom: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    font-family: "SUITE-Variable";
`;

const storyDetailContainer = css`
    float: left;
    width: 816px;
    margin: 0 auto 90px;
    padding: 60px 94px 90px;
    font-size: 16px;
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
    font-family: "SUITE-Variable";
    font-weight: 600;
`;

const storyContent = css`
    margin-top: 16px;
    width: 628px;
    font-size: 18px;
    color: #666;
    line-height: 32px;
    text-align: justify;
    letter-spacing: -.01px;
    font-family: "SUITE-Variable";
`;

const givingStatusBox = css`
    float: left;
    width: 282px;
    font-size: 15px;
    padding-bottom: 25px;
    border-right: 1px solid #e5e5e5;
    font-family: "SUITE-Variable";
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
    border-bottom: 1px solid #e5e5e5;
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

const subImgContainer = css`
    width: 624px;
    overflow: hidden;
    margin: 50px auto 60px;
    padding-bottom: 0;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
`;

const subImgBox = css`
    overflow: hidden;
    position: relative;
    height: 351px;
    background: #000;
    text-align: center;
`;

const subImg = css`
    width: auto;
    height: 100%;
    vertical-align: top;
`;

const donationTargetBenefitContainer = css`
    position: relative;
    margin: 0 0 40px;
`;

const donationUsePlanContainer = css`
    line-height: 1.5;
    letter-spacing: 1px;
`;

const donationUsePlanTitleBox = css`
    position: relative;
    z-index: 10;
    margin-top: 48px;
`;

const donationUsePlanTitle = css`
    margin-bottom: 15px;
`;

const donationUsePlanFont = css`
    font-weight: 400;
`;

const donationUsePlanFontSpace = css`
    display: inline-block;
    height: 11px;
    margin-right: 9px;
    margin-left: 13px;
    border-left: 1px solid #d9d9d9;
    content: '';
`;

const donationUsePlanFont2 = css`
    margin: 0;
    padding-left: 9px;
    font-weight: 400;
    font-size: 16px;
    color: #888;
    letter-spacing: .01em;
`;

const donationUsePlanContentBox = css`
    width: 100%;
    margin: 0;
    border: 1px solid #ccc;
    border-width: 1px 0;
    font-size: 16px;
`;

const donationUsePlanContent = css`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`;

const donationUsePlanGoalTotalBox = css`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`;

const donationUsePlanGoalTotalFont = css`
    margin-left: 10px;
    margin-right: 4px;
    line-height: normal;
    font-weight: 700;
    color: #00ab33;
    letter-spacing: 0;
    vertical-align: -1px;
`;

const donationUsePlanTd = css`
    font-size: 16px;
    color: #222;
    letter-spacing: -.06em;
    border-top: none;
    background-color: #fcfcfe;
    padding-top: 14px;
    padding-bottom: 14px;
`;

const targetBenefitContainer = css`
    padding-top: 60px;
    line-height: 1.5;
    letter-spacing: 1px;
    
`;
const targetBenefitTitleBox = css`
    float: left;
    margin-bottom: 19px;
    margin: 35px 0 18px;
`;

const targetBenefitContentTbody = css`
    vertical-align: middle;
    border-color: inherit;
    line-height: 1.5;
    letter-spacing: 1px;
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
`;

const targetBenefitContentBox = css`
    width: 100%;
    margin: 0;
    border: 1px solid #ccc;
    border-width: 1px 0;
    font-size: 16px;
`;

const targetBenefitContentGroup = css`
    display: table-column-group;
`;

const targetBenefitContentTr = css`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    font-size: 16px;
`;

const targetBenefitContentTh = css`
    padding: 13px 0 13px 19px;
    vertical-align: top;
    height: 56px;
    color: #222;
    text-align: left;
    box-sizing: border-box;
`;

const targetBenefitContentTd = css`
    padding: 13px 0 13px 19px;
    border-left: 1px solid #ebebeb;
    vertical-align: top;
`;

const targetBenefitContentUl = css`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const targetBenefitContentLi = css`
    position: relative;
    padding-left: 10px;
`;

const participationContainer = css`
    width: 624px;
    overflow: hidden;
    margin-top: 50px;
    padding-bottom: 0;
`;

const participationListUl = css`
    padding-bottom: 9px;
    border-top: 1px solid rgba(0,0,0,.05);
    border-bottom: 1px solid #000;
    position: relative;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 0;
`;

const historyParticipationBox = css`
    display: table;
    width: 100%;
    min-height: 65px;
    background-color: #fcfcfc;
    border: 1px solid rgba(0,0,0,.05);
    border-radius: 3px;
`;

const historyParticipationInner = css`
    display: table-cell;
    padding: 20px 70px;
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -.5px;
    color: #333;
    text-align: center;
    word-break: keep-all;
    word-wrap: break-word;
    vertical-align: middle;
`;

const historyListUl = css`
    margin-top: 20px;
    border-bottom: 1px solid rgba(0,0,0,.05);
`;

const historyListLi = css`
    border-top: 1px solid rgba(0,0,0,.05);
`;

const historyCard = css`
    position: relative;
    padding: 13px 20px 10px;
    letter-spacing: 0;
`;

const historyCardDate = css`
    display: block;
    position: relative;
    z-index: 10;
    margin-bottom: 4px;
    font-size: 13px;
    color: #828282;
`;

const historyCardName = css`
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: #202020;
`;

const historyCardAmount = css`
    position: relative;
    margin-left: 12px;
    font-size: 15px;
    color: #00ab33;
`;

const historyCardAmountColor = css`
    position: relative;
    color: #666;
`;


const GivingDetail = () => {
    const { pageId } = useParams();
    const [ refresh, setRefresh ] = useState(true);
    const [searchParams, setSearchParams] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [ authenticated, setAuthenticated ] = useRecoilState(authenticatedState);
    const accessToken = localStorage.getItem("accessToken");
    const [ role, setRole ] = useState();
    const [ modifyOpen, setModifyOpen ] = useState(false);
    const [ deleteOpen, setDeleteOpen ] = useState(false);
    const [ modify, setModify ] = useState({
        givingPageId: pageId,
        givingName: "",
        endDate: 0,
        givingTotal: 0
    });

    useEffect(() => {
        if (accessToken) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        givingDetail.refetch();
        mostGivings.refetch();
    }, [pageId]);

    const givingDetail = useQuery(["givingDetail"], async () => {
        return await axios.get(`http://localhost:8080/giving/detail/${pageId}`);
    });
    
    const mostGivings = useQuery(["mostGivings"], async () => {
        return await axios.get(`http://localhost:8080/giving/most/${pageId}`);
    });

    const principalUser = useQuery(["principalUser"], async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        const response = await axios.get("http://localhost:8080/principal", option)
        setRole(response.data.authorities.split(",").includes("ROLE_ADMIN"));
        return response;
    },{
        enabled: !!accessToken
    })

    const modifyInfo = useMutation(async () => {
        const data = {
            ...modify
        }

        const option = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        return await axios.put("http://localhost:8080/admin/giving/modify", data, option)
    }, {
        enabled: refresh,

        onSuccess: () => {
            alert("기부 내용이 성공적으로 수정 되었습니다.");
            setRefresh(false);
            setModifyOpen(false);
        }
    })

    const deleteFunding = useMutation(async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        return await axios.delete(`http://localhost:8080/admin/giving/delete/${pageId}`, option)
    }, {
        onSuccess: () => {
            alert("기부 내용이 성공적으로 삭제 되었습니다.")
            navigate("/giving")
        }
    })

    const ParticipationDetails = useQuery(["ParticipationDetails"], async () => {
        return await axios.get(`http://localhost:8080/giving/detail/participation/${pageId}`);
    })

    const DonationUsePlan = useQuery(["DonationUsePlan"], async () => {
        return await axios.get(`http://localhost:8080/giving/detail/donationuseplan/${pageId}`);
    })

    const TargetBenefit = useQuery(["TargetBenefit"], async () => {
        return await axios.get(`http://localhost:8080/giving/detail/targetbenefit/${pageId}`)
    })

    if(principalUser.isLoading) {
        return <></>;
    }

    if(givingDetail.isLoading || mostGivings.isLoading){
        return <></>
    }

    if(ParticipationDetails.isLoading) {
        return <></>
    }

    if(DonationUsePlan.isLoading) {
        return <></>
    }

    if(TargetBenefit.isLoading) {
        return <></>
    }

    const givingDetailHandle = (pageId) => {
        navigate("/giving/" + pageId)
    }

    const adminModifyHandleSubmit = () => {
        setModifyOpen(true);
    }

    const adminDeleteHandleSubmit = () => {
        setDeleteOpen(true);
    }

    const modifyHandle = (e) => {
        const {name, value} = e.target
        setModify({...modify, [name]: value})
    }

    const modifyIdentifyHandleSubmit = () => {
        modifyInfo.mutate()
    }

    const modifyCancelHandleSubmit = () => {
        setModifyOpen(false);
    }

    const deleteIdentifyHandleSubmit = () => {
        deleteFunding.mutate()
    }

    const deleteCancelHandleSubmit = () => {
        setDeleteOpen(false);
    }

    const toGivingPage = (pageId) => {
        navigate(`/giving/${pageId}`);
    }

    const openModal = () => {
        if(!authenticated) {
            navigate("/login")
        }else {
            setIsOpen(true);
        }
    }

    const outsideModalClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setIsOpen(false);
        }
    }

    return (
        <>
        {role ?
                <div css={adminContainer}>
                    <button css={givingModifyButton} onClick={adminModifyHandleSubmit}>기부 수정</button>
                    {modifyOpen ?
                        <div css={givingModifyContainer}>
                            <div css={givingIdentifyContainer}>
                                <div css={givingIdentifyMain}>
                                    <div css={givingModifyTitle}>기부 수정</div>
                                    <div css={modifyGivingHeader}>
                                        <div css={modifyContainer}>
                                            <div css={modifyTitleTxt}>제목 수정</div>
                                            <input css={modifyValue} defaultValue={givingDetail.data.data.pageTitle} onChange={modifyHandle} name="givingName"/>
                                        </div>
                                        <div css={modifyContainer}>
                                            <div css={modifyTitleTxt}>종료일 수정</div>
                                            <input css={modifyValue} onChange={modifyHandle} name="endDate"/>
                                        </div>
                                        <div css={modifyContainer}>
                                            <div css={modifyTitleTxt}>목표 금액 수정</div>
                                            <input css={modifyValue} onChange={modifyHandle} name="goalTotal"/>
                                        </div>
                                    </div>
                                    <div css={modifyIdentifyButtonContainer}>
                                        <button css={modifyIdentifyButton} onClick={modifyIdentifyHandleSubmit}>확인</button>
                                        <button css={modifyCancelButton} onClick={modifyCancelHandleSubmit}>취소</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : ""}
                        <button css={givingDeleteButton} onClick={adminDeleteHandleSubmit}>기부 삭제</button>
                        {deleteOpen ?
                            <div css={givingDeleteContainer}>
                                <div css={givingIdentifyContainer}>
                                    <div css={givingIdentifyMain}>
                                        <div css={givingDeleteTitle}>기부 삭제</div>
                                        <div css={givingDeleteMessage}>기부를 정말 삭제 하시겠습니까?</div>
                                        <div css={givingDeleteButtonContainer}>
                                            <button css={deleteIdentifyButton} onClick={deleteIdentifyHandleSubmit}>확인</button>
                                            <button css={deleteCancelButton} onClick={deleteCancelHandleSubmit}>취소</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : ""}
                    </div>
                : ""}
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
                            <div css={subImgContainer}>
                                <div css={subImgBox}>
                                    <div css={subImg}>이미지 들어올 곳</div>
                                </div>
                            </div>
                            <div css={donationTargetBenefitContainer}>
                            <div css={donationUsePlanContainer}>
                                        <div css={donationUsePlanTitleBox}>
                                            <h3 css={donationUsePlanTitle}>
                                                <strong css={donationUsePlanFont}>기부금 사용계획</strong>
                                                <div css={donationUsePlanFontSpace}></div>
                                                <span css={donationUsePlanFont2}>여러분들의 소중한 기부금 이렇게 사용됩니다.</span>
                                            </h3>
                                            <div css={donationUsePlanContentBox}>
                                                <div css={donationUsePlanContent}>
                                                {DonationUsePlan.data.data.donationUsePlanList.map(donationUsePlan => (
                                                    <tr css={donationUsePlanGoalTotalBox}>
                                                        <td>{donationUsePlan.content}</td>
                                                        <td css={donationUsePlanTd}>
                                                            <em css={donationUsePlanGoalTotalFont}>{new Intl.NumberFormat('en-US').format(donationUsePlan.donationExpense)}</em>원
                                                        </td>
                                                    </tr>
                                                ))}
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div css={targetBenefitContainer}>
                                    {TargetBenefit.data.data.targetBenefitList.map(targetBenefit => (
                                        <div css={targetBenefitContentBox}>
                                            <h3 css={targetBenefitTitleBox}>
                                                <strong>사업대상효과 및 기대효과</strong>
                                            </h3>
                                            <table>
                                                <div css={targetBenefitContentTbody}>
                                                    <tbody>
                                                        <tr css={targetBenefitContentTr}>
                                                            <th css={targetBenefitContentTh}>사업기간</th>
                                                            <td css={targetBenefitContentTd}>{targetBenefit.registerDate} ~ {targetBenefit.endDate}</td>
                                                        </tr>
                                                        <tr css={targetBenefitContentTr}>
                                                            <th css={targetBenefitContentTh}>사업 대상</th>
                                                            <td css={targetBenefitContentTd}>{targetBenefit.target}</td>
                                                        </tr>
                                                        <tr css={targetBenefitContentTr}>
                                                            <th css={targetBenefitContentTh}>대상 수</th>
                                                            <td css={targetBenefitContentTd}>{targetBenefit.targetCount}</td>
                                                        </tr>
                                                        <tr css={targetBenefitContentTr}>
                                                            <th css={targetBenefitContentTh}>기대 효과</th>
                                                            <td css={targetBenefitContentTd}>
                                                                <ul css={targetBenefitContentUl}>
                                                                    <li css={targetBenefitContentLi}>{targetBenefit.benefitEffect}</li>
                                                                    <li css={targetBenefitContentLi}>test</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>   
                                                </div>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div css={participationContainer}>
                                <div css={participationListUl}>참여내역</div>
                                <div css={historyParticipationBox}>
                                    <p css={historyParticipationInner}>총 {ParticipationDetails.data.data.participationDetailsList.length}건이 기부되었습니다.</p>
                                </div>
                                {ParticipationDetails.data.data.participationDetailsList.map(participation => (
                                    <ul css={historyListUl}>
                                        <li css={historyListLi}>
                                            <div css={historyCard}>
                                                <span css={historyCardDate}>{participation.givingDate}</span>
                                                <strong css={historyCardName}>{participation.username}</strong>
                                                <span css={historyCardAmount}>{new Intl.NumberFormat('en-US').format(participation.givingTotal)}
                                                    <span css={historyCardAmountColor}>원 참여</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                ))}
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
                                <GiverPayment isOpen={isOpen} setIsOpen={setIsOpen} givingDetail={givingDetail.data.data} />
                                모금함 기부하기
                            </div>
                            <div css={givingGroupBanner}>
                                <div>기부하신 금액은 수수료없이
                                    <strong css={strongColor}> 100% 전달</strong>
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
                                <div css={todayCommendLogo}>기부 추천 목록</div>
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