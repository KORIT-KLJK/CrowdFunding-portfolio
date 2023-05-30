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
        goalTotal: 0
    });


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

    const givingDetailHandle = (pageId) => {
        navigate("/giving/" + pageId)
    }
    
    if(givingDetail.isLoading || mostGivings.isLoading){
        return <></>
    }

    if(principalUser.isLoading) {
        return <></>;
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

    console.log(givingDetail)

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
                                <div css={givingMoney}>{new Intl.NumberFormat("en-US").format(givingDetail.data.data.goalTotal)}원</div>
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