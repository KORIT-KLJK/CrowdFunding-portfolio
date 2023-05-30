/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import * as S from './style'
import { async } from 'q';
import axios from 'axios';
import { useMutation } from 'react-query';
import { format } from 'date-fns';
import { useNavigate } from 'react-router';


const mainContainer = css`
    width: 900px;
    
    margin: auto;
    margin-top: 100px;

    border: 1px solid black;
    
`;

const mainTitleContainer = css`
    
`;

const mainTitle = css`
    padding: 10px;

    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`
const subTitle = css`
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 20px;
    width: 100%;
    height: 50px;

    border-top: 2px solid gray;

    color: red;
`

const infoInputContainer = css`
   display: flex;
   flex-direction: column;
   align-items: center;

   width: 100%;

   
`;

const infoInput = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 85px;

    border-top: 2px solid gray;
`;

const infoTitle = css`
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 20px;

    width: 25%;
    height: 100%;

    font-size: 18px;
    font-weight: 600;

    background-color: #dbdbdb;
`;

const inputContainer = css`
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 20px;

    width: 75%;
    height: 100%;

`;

const input = css`
   width: 60%;
   height: 60%;

   margin-right: 10px;
`;

const comboBox = css`
    width: 60%;
    height: 60%;

    margin-right: 10px;
`
const storyInfoInput = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 500px;

    border-top: 2px solid gray;
`;

const storyInfoTitle = css`
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 20px;
    
    width: 25%;
    height: 100%;
    
    font-size: 18px;
    font-weight: 600;
    
    background-color: #dbdbdb;

`;

const storyInputContainer = css`
    display: flex;
    justify-content: start;
    align-items: center; 
    
    padding-left: 20px;

    width: 75%;
    height: 100%;
`;

const storyTextArea = css`
    width: 90%;
    height: 80%;
    resize: none;
`;

const rewardInfoInputContainer = css`
    border-top: 2px solid gray;
    width: 100%;
`;

const rewardHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;


    width: 100%;
    height: 80px;

    border-top: 1px;
    background-color: #dbdbdb;
`;

const rewardH1 = css`
    font-size: 18px;
    font-weight: 600;
    margin-left: 400px;

    width: 40%;
`;

const btnContainer = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    width: 60%;
`

const rewardBtn = css`
    width: 40px;
    height: 40px;
`;

const rewardTable = css`
    width: 100%;
`;

const rewardTr = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;
`;

const rewardNameThAndTd = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60%;
    height: 100%;
    background-color: #7a7a7a;

    border-top: 2px solid gray;
    border-right: 1px solid black;

    font-size: 20px;
    font-weight: 600;
`;

const rewardPriceThAndTd = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40%;
    height: 100%;
    background-color: #7a7a7a;

    border-top: 2px solid gray;
    font-size: 20px;
    font-weight: 600;
`;

const rewardTdInput = css`
    margin-right: 10px;
    width: 80%;
    height: 50%;
`;

const saveBtnContainer = css`
    display: flex;
    justify-content: end;

`;

const submitBtnContainer = css`
    display: flex;
    justify-content: end;
`;

const RegisterPage = () => {
    const [ mainImgFiles, setMainImgFiles ] = useState([]);
    const [ subImgFiles, setSubImgFiles ] = useState([]);
    const fileId = useRef(1);
    const navigate = useNavigate();
    const [giveInputParams, setGiveInputParams] = useState({ 
        pageCategory: "기부",
        detailCategory : "아동",
        title: "",
        storyTitle: "",
        story: "",
        imgUrl: "",
        goalTotal: 0,
        endDate: "",
        giveUsing: [],
        donationExpense: [],
        businessStartDate: "",
        businessEndDate: "",
        target: "",
        targetCount: 0,
        benefitEffect: "",
        companyName: "",
        ceoName: "",
        nickname: "",
        companyAddress: "",
        companyPhoneNumber: "",
        email:""
    });

    const [fundingInputParams, setFundingInputParams] = useState({ 
        pageCategory: "펀딩",
        detailCategory : "음식",
        title: "",
        storyTitle: "",
        story: "",
        imgUrl: "",
        goalTotal: 0,
        endDate: "",
        rewardName: [],
        rewardPrice: [],
        companyName: "",
        ceoName: "",
        nickname: "",
        companyAddress: "",
        companyPhoneNumber: "",
        email:""
    });
    
    const [giveTds, setGiveTds] = useState([
        {
            id: 1
        }
    ]);
    
    const [rewardTds, setRewardTds] = useState([
        {
            id: 1
        }
    ]);
    const giveId = useRef(2);
    const rewardId = useRef(2);
    const [showTable, setShowTable] = useState(true);
    const mainCategoryList = ["기부", "펀딩"];
    const giveSubCategoryList = ["아동","노인","장애인","다문화","환경"];
    const fundSubCateogoryList = ["음식", "도서", "의류", "액세서리&화장품", "꽃&과일", "생활용품"];

    const [giveUsingMap, setGiveUsingMap] = useState(new Map());
    const [giveUsingPriceMap, setGiveUsingPriceMap] = useState(new Map());

    const [rewardNameMap, setRewardNameMap] = useState(new Map());
    const [rewardPriceMap, setRewardPriceMap] = useState(new Map());

    const [rewardNameIsBlank, setRewarNameIsBlank] = useState(false);
    const [rewardPriceIsBlank, setRewarPriceIsBlank] = useState(false);

    const [giveUsingIsBlank, setGiveUsingIsBlank] = useState(false);
    const [givesingPriceIsBlank, setGiveUsingPriceIsBlank] = useState(false);

    const giveRegisterPage = useMutation(async () => {
        const formData = new FormData();
        formData.append("pageCategory", giveInputParams.pageCategory);
        formData.append("detailCategory", giveInputParams.detailCategory)
        formData.append("title", giveInputParams.title)
        formData.append("storyTitle", giveInputParams.storyTitle)
        formData.append("story", giveInputParams.story)
        mainImgFiles.forEach(imgFile => {
            formData.append("mainImgUrl", imgFile.file);
        })
        subImgFiles.forEach(imgFile => {
            formData.append("subImgUrl", imgFile.file);
        })
        formData.append("goalTotal", giveInputParams.goalTotal);
        formData.append("endDate", giveInputParams.endDate);
        formData.append("giveUsing", giveInputParams.giveUsing);
        formData.append("donationExpense", giveInputParams.donationExpense);
        formData.append("businessStartDate", giveInputParams.businessStartDate);
        formData.append("businessEndDate", giveInputParams.businessEndDate);
        formData.append("target", giveInputParams.target);
        formData.append("targetCount", giveInputParams.targetCount);
        formData.append("benefitEffect", giveInputParams.benefitEffect);
        formData.append("companyName", giveInputParams.companyName)
        formData.append("ceoName", giveInputParams.ceoName)
        formData.append("companyAddress", giveInputParams.companyAddress)
        formData.append("companyPhoneNumber", giveInputParams.companyPhoneNumber)
        formData.append("email", giveInputParams.email)

        const option = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
            return await axios.post("http://localhost:8080/giveregisterpage", formData, option)
    }, {
        onSuccess: () => {
            alert("기부 페이지 등록 성공");
            navigate("/giving");
        }
    });

    const fundingRegisterPage = useMutation(async () => {
        const formData = new FormData();
        formData.append("pageCategory", fundingInputParams.pageCategory);
        formData.append("detailCategory", fundingInputParams.detailCategory)
        formData.append("title", fundingInputParams.title)
        formData.append("storyTitle", fundingInputParams.storyTitle)
        formData.append("story", fundingInputParams.story)
        mainImgFiles.forEach(imgFile => {
            formData.append("mainImgUrl", imgFile.file);
        })
        subImgFiles.forEach(imgFile => {
            formData.append("subImgUrl", imgFile.file);
        })
        formData.append("goalTotal", fundingInputParams.goalTotal);
        formData.append("endDate", fundingInputParams.endDate);
        formData.append("rewardName", fundingInputParams.rewardName)
        formData.append("rewardPrice", fundingInputParams.rewardPrice)
        formData.append("companyName", fundingInputParams.companyName)
        formData.append("ceoName", fundingInputParams.ceoName)
        formData.append("nickname", fundingInputParams.nickname)
        formData.append("companyAddress", fundingInputParams.companyAddress)
        formData.append("companyPhoneNumber", fundingInputParams.companyPhoneNumber)
        formData.append("email", fundingInputParams.email)
        const option = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        return await axios.post("http://localhost:8080/fundingregisterpage", formData, option)
    }, {
        onSuccess: () => {
            alert("펀딩 페이지 등록 성공");
            navigate("/funding");
        }
    });

    const handleGivingUsingChange = (id, e) => {
        const newInputValues = new Map(giveUsingMap);
        newInputValues.set(id, e.target.value);
        setGiveUsingMap(newInputValues);
        if(e.target.value === "") {
            setGiveUsingIsBlank(false);
        }else {
            setGiveUsingIsBlank(true);
        }
    };

    const handleRewardNameChange = (id, e) => {
        const newInputValues = new Map(rewardNameMap);
        newInputValues.set(id, e.target.value);
        setRewardNameMap(newInputValues);
        if(e.target.value === "") {
            setRewarNameIsBlank(false);
        }else {
            setRewarNameIsBlank(true);
        }
    };

    const handleGivingUsingPriceChange = (id, e) => {
        const newInputValues = new Map(giveUsingPriceMap);
        newInputValues.set(id, parseInt(e.target.value));
        setGiveUsingPriceMap(newInputValues);
        if(e.target.value === "") {
            setGiveUsingPriceIsBlank(false);
        }else {
            setGiveUsingPriceIsBlank(true);
        }
      };

    const handleRewardPriceChange = (id, e) => {
        const newInputValues = new Map(rewardPriceMap);
        newInputValues.set(id, parseInt(e.target.value));
        setRewardPriceMap(newInputValues);
        if(e.target.value === "") {
            setRewarPriceIsBlank(false);
        }else {
            setRewarPriceIsBlank(true);
        }
      };

    const madeGiveUsingList = () => {
        const giveUsingList = Array.from(giveUsingMap.values())
        const giveUsingPriceList = Array.from(giveUsingPriceMap.values())

        if(!giveUsingIsBlank && !givesingPriceIsBlank) {
            alert("reward는 비워져있으면 안 됩니다.");
        }else{
            setGiveInputParams({...giveInputParams, giveUsing: giveUsingList, donationExpense: giveUsingPriceList})
            setShowTable(false);
        }
    };

    const madeRewardList = () => {
        const nameList = Array.from(rewardNameMap.values())
        const priceList = Array.from(rewardPriceMap.values())

        if(!rewardNameIsBlank && !rewardPriceIsBlank) {
            alert("reward는 비워져있으면 안 됩니다.");
        }else{
            setFundingInputParams({...fundingInputParams, rewardName: nameList, rewardPrice: priceList})
            setShowTable(false);
        }
    };



    const changeGivePageCategory = (e) => {
        const givePageCategory = e.target.value;
        let giveDetailCategory = giveSubCategoryList.detailCategory;
      
        if (givePageCategory === "기부") {
            giveDetailCategory = "아동";
        }else if(givePageCategory === "펀딩") {
            giveDetailCategory = "음식";
            setFundingInputParams({pageCategory: givePageCategory, detailCategory: giveDetailCategory})
        }
      
        setGiveInputParams({
          ...giveInputParams,
          pageCategory: givePageCategory,
          detailCategory: giveDetailCategory,
        });
      };

    const changeFundingPageCategory = (e) => {
        const fundingPageCategory = e.target.value;
        let fundingDetailCategory = fundSubCateogoryList.detailCategory;
    
        if (fundingPageCategory === "펀딩") {
            fundingDetailCategory = "음식";
        }else if(fundingPageCategory === "기부") {
            fundingDetailCategory = "아동"
            setGiveInputParams({pageCategory: fundingPageCategory, detailCategory: fundingDetailCategory})
        }
    
        setFundingInputParams({
            ...fundingInputParams,
            pageCategory: fundingPageCategory,
            detailCategory: fundingDetailCategory,
        });
      };

    const changeDetailCategory = (e) => {
        setGiveInputParams({...giveInputParams, detailCategory:e.target.value})
        setFundingInputParams({...fundingInputParams, detailCategory:e.target.value})
    }

    const changeTitle = (e) => {
        setGiveInputParams({...giveInputParams, title:e.target.value})
        setFundingInputParams({...fundingInputParams, title:e.target.value})
    }

    const changeStoryTitle = (e) => {
        setGiveInputParams({...giveInputParams, storyTitle:e.target.value})
        setFundingInputParams({...fundingInputParams, storyTitle:e.target.value})
    }

    const changeStory = (e) => {
        setGiveInputParams({...giveInputParams, story:e.target.value})
        setFundingInputParams({...fundingInputParams, story:e.target.value})
    }

    const changeMainImgUrl = (e) => {
        const newImgFiles = [];

        // 자바에서 쓰던 foreach에서 : 대신에 of를 쓴 것
        for(const file of e.target.files) {
            const fileData = {
                id: fileId.current,
                file
            }
            fileId.current += 1;
            newImgFiles.push(fileData)      
        }

        setMainImgFiles([...mainImgFiles, ...newImgFiles]);
    }

    const changeSubImgUrl = (e) => {
        const newImgFiles = [];

        // 자바에서 쓰던 foreach에서 : 대신에 of를 쓴 것
        for(const file of e.target.files) {
            const fileData = {
                id: fileId.current,
                file
            }
            fileId.current += 1;
            newImgFiles.push(fileData)      
        }

        setSubImgFiles([...subImgFiles, ...newImgFiles]);
    }


    const changeGoalTotal = (e) => {
        setGiveInputParams({...giveInputParams, goalTotal:e.target.value})
        setFundingInputParams({...fundingInputParams, goalTotal:e.target.value})
    }

    const changeEndDate = (e) => {
        setGiveInputParams({...giveInputParams, endDate:e.target.value})
        setFundingInputParams({...fundingInputParams, endDate:e.target.value})
    }

    const changeBusinessStartDate = (e) => {
        setGiveInputParams({...giveInputParams, businessStartDate:e.target.value})
    }

    const changeBusinessEndDate = (e) => {
        setGiveInputParams({...giveInputParams, businessEndDate:e.target.value})
    }

    const changeTarget = (e) => {
        setGiveInputParams({...giveInputParams, target:e.target.value})
    }

    const changeTargetCount = (e) => {
        setGiveInputParams({...giveInputParams, targetCount:e.target.value})
    }

    const changeBenefitEffect = (e) => {
        setGiveInputParams({...giveInputParams, benefitEffect:e.target.value})
    }

    const changeCompanyName = (e) => {
        setGiveInputParams({...giveInputParams, companyName:e.target.value})
        setFundingInputParams({...fundingInputParams, companyName:e.target.value})
    }

    const changeCeoName = (e) => {
        setGiveInputParams({...giveInputParams, ceoName:e.target.value})
        setFundingInputParams({...fundingInputParams, ceoName:e.target.value})
    }

    const changeNickname = (e) => {
        setFundingInputParams({...fundingInputParams, nickname:e.target.value})
    }

    const changeCompanyAddress = (e) => {
        setGiveInputParams({...giveInputParams, companyAddress:e.target.value})
        setFundingInputParams({...fundingInputParams, companyAddress:e.target.value})
    }

    const changePhoneNumber = (e) => {
        setGiveInputParams({...giveInputParams, companyPhoneNumber:e.target.value})
        setFundingInputParams({...fundingInputParams, companyPhoneNumber:e.target.value})
    }

    const changeEmail = (e) => {
        setGiveInputParams({...giveInputParams, email:e.target.value})
        setFundingInputParams({...fundingInputParams, email:e.target.value})
    }

    const addGiveUsingInputComponentHandle = () => {
        setGiveTds([...giveTds, {id: giveId.current}]);
        giveId.current += 1;
    }

    const addRewardInputComponentHandle = () => {
        setRewardTds([...rewardTds, {id: rewardId.current}]);
        rewardId.current += 1;
    }

    const removeGiveUsingInputComponentHandle = (id,e) => {
        setGiveTds([...giveTds.filter(giveTd => giveTd.id !== parseInt(e.target.value))]);
        const newGiveUsing = new Map(giveUsingMap);
        const newGiveUsingPrice = new Map(giveUsingPriceMap);
        newGiveUsing.delete(id);
        newGiveUsingPrice.delete(id);
        setGiveUsingMap(newGiveUsing);
        setGiveUsingPriceMap(newGiveUsingPrice);
    }

    const removeRewardInputComponentHandle = (id,e) => {
        setRewardTds([...rewardTds.filter(rewardTd => rewardTd.id !== parseInt(e.target.value))]);
        const newRewardName = new Map(rewardNameMap);
        const newRewardPrice = new Map(rewardPriceMap);
        newRewardName.delete(id);
        newRewardPrice.delete(id);
        setRewardNameMap(newRewardName);
        setRewardPriceMap(newRewardPrice);
    }

    const giveRegisterSubmitHandle = () => {
        giveRegisterPage.mutate();
    }

    const fundRegisterSubmitHandle = () => {
        fundingRegisterPage.mutate();
    }


    return (
        <div css={mainContainer}>
            {giveInputParams.pageCategory === '기부' ? 
            <>
                <div css={mainTitleContainer}>
                    <h1 css={mainTitle}>기부 페이지 등록</h1>
                </div>
                <div css={infoInputContainer}>
                    <div css={subTitle}>
                        기부 카테고리 설정
                    </div>
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 페이지 카테고리</div>
                        <div css={inputContainer}>
                        <select onChange={changeGivePageCategory} css={comboBox}>
                            {mainCategoryList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                                ))}
                        </select> 
                        </div> 
                    </div>
                </div>
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 상세 카테고리</div>
                        <div css={inputContainer}>
                            {giveInputParams.pageCategory === '기부' ? 
                        <select onChange={changeDetailCategory} css={comboBox}>
                            {giveSubCategoryList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                                ))}
                                </select> :<select onChange={changeDetailCategory} css={comboBox}>
                            {fundSubCateogoryList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                            </select>}
                        </div> 
                    </div>
                    <div css={subTitle}>
                        기부 페이지 설정
                    </div>
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 제목</div>
                        <div css={inputContainer}>
                            <input onChange={changeTitle} css={input} type="text"/>    
                        </div> 
                    </div>
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 스토리 제목</div>
                        <div css={inputContainer}>
                            <input onChange={changeStoryTitle} css={input} type="text"/>    
                        </div> 
                    </div>
                    <div css={storyInfoInput}>
                        <div css={storyInfoTitle}>기부 스토리 내용</div>
                        <div css={storyInputContainer}>
                        <textarea onChange={changeStory} css={storyTextArea} name="" id="" cols="30" rows="10">
                            </textarea> 
                        </div> 
                    </div>
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 메인 이미지</div>
                        <div css={inputContainer}>
                            <input css={input} type="file" onChange={changeMainImgUrl} accept={".jpg, .png"}/>    
                        </div> 
                    </div>

                    <div css={infoInput}>
                        <div css={infoTitle}>기부 스토리 이미지</div>
                        <div css={inputContainer}>
                            <input css={input} type="file" onChange={changeSubImgUrl} accept={".jpg, .png"}/>    
                        </div> 
                    </div>
                
                    <div css={infoInput}>
                        <div css={infoTitle}>기부 목표 금액</div>
                        <div css={inputContainer}>
                            <input onChange={changeGoalTotal} css={input} type="text"/>원    
                        </div> 
                    </div>

                    <div css={infoInput}>
                        <div css={infoTitle}>기부 종료일</div>
                        <div css={inputContainer}>
                            <input onChange={changeEndDate} css={input} type="text"/>    
                        </div> 
                    </div>
                    {showTable && giveInputParams.pageCategory === '기부' ?
                    <div css={rewardInfoInputContainer}>
                        <div css={rewardHeader}>
                            <h1 css={rewardH1}>기부금 사용 계획</h1>
                            <div css={btnContainer}>
                                <button css={rewardBtn} onClick={addGiveUsingInputComponentHandle}>+</button>

                            </div>
                        </div>
                        <table css={rewardTable}>
                            <thead>
                                <tr css={rewardTr}>
                                    <th css={rewardNameThAndTd}>사용 내역</th>
                                    <th css={rewardPriceThAndTd}>사용 금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {giveTds.map(giveTd => (
                                    <tr css={rewardTr} key={giveTd.id}>
                                        <td css={rewardNameThAndTd}><input onChange={(e)=> handleGivingUsingChange(giveTd.id,e)} css={rewardTdInput} type="text"/></td>
                                        <td css={rewardPriceThAndTd}><input onChange={(e)=> handleGivingUsingPriceChange(giveTd.id,e)} css={rewardTdInput} type="number" placeholder='(원)'/><button css={rewardBtn} value={giveTd.id} onClick={(e)=>removeGiveUsingInputComponentHandle(giveTd.id,e)}>-</button></td>    
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div css={saveBtnContainer}>
                            <button onClick={madeGiveUsingList}>저장하기</button>
                        </div>
                    </div>
                : ""}
                <div css={subTitle}>
                    사업대상 및 기대효과
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>사업 시작일</div>
                    <div css={inputContainer}>
                        <input onChange={changeBusinessStartDate} css={input} type="text"/>    
                    </div> 
                </div> 
                <div css={infoInput}>
                    <div css={infoTitle}>사업 종료일</div>
                    <div css={inputContainer}>
                        <input onChange={changeBusinessEndDate} css={input} type="text"/>    
                    </div> 
                </div> 
                <div css={infoInput}>
                    <div css={infoTitle}>사업 대상</div>
                    <div css={inputContainer}>
                        <input onChange={changeTarget} css={input} type="text"/>    
                    </div> 
                </div> 
                <div css={infoInput}>
                    <div css={infoTitle}>대상 수</div>
                    <div css={inputContainer}>
                        <input onChange={changeTargetCount} css={input} type="text"/>    
                    </div> 
                </div> 
                <div css={infoInput}>
                    <div css={infoTitle}>기대 효과</div>
                    <div css={inputContainer}>
                        <input onChange={changeBenefitEffect} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={subTitle}>
                    기부 신청인 등록
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>단체명</div>
                    <div css={inputContainer}>
                        <input onChange={changeCompanyName} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>대표자</div>
                    <div css={inputContainer}>
                        <input onChange={changeCeoName} css={input} type="text"/>    
                    </div> 
                </div> 
                <div css={infoInput}>
                    <div css={infoTitle}>주소</div>
                    <div css={inputContainer}>
                        <input onChange={changeCompanyAddress} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>고객센터</div>
                    <div css={inputContainer}>
                        <input onChange={changePhoneNumber} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>이메일</div>
                    <div css={inputContainer}>
                        <input onChange={changeEmail} css={input} type="text"/>    
                    </div> 
                </div>
            <div css={submitBtnContainer}>
                <button onClick={giveRegisterSubmitHandle}>기부 페이지 등록하기</button>
            </div>
        </> :          
        <>
            <div css={mainTitleContainer}>
                <h1 css={mainTitle}>펀딩 페이지 등록</h1>
            </div>
            <div css={infoInputContainer}>
                <div css={subTitle}>
                    펀딩 카테고리 설정
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 페이지 카테고리</div>
                    <div css={inputContainer}>
                    <select onChange={changeFundingPageCategory} css={comboBox}>
                        {mainCategoryList.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                            ))}
                            </select> 
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 상세 카테고리</div>
                    <div css={inputContainer}>
                    {fundingInputParams.pageCategory === '펀딩' ? 
                    <select onChange={changeDetailCategory} css={comboBox}>
                        {fundSubCateogoryList.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                            ))}
                            </select> :<select onChange={changeDetailCategory} css={comboBox}>
                        {giveSubCategoryList.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                            ))}
                            </select>}
                    </div> 
                </div>
                <div css={subTitle}>
                    펀딩 페이지 설정
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 제목</div>
                    <div css={inputContainer}>
                        <input onChange={changeTitle} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 스토리 제목</div>
                    <div css={inputContainer}>
                        <input onChange={changeStoryTitle} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={storyInfoInput}>
                    <div css={storyInfoTitle}>펀딩 스토리 내용</div>
                    <div css={storyInputContainer}>
                    <textarea onChange={changeStory} css={storyTextArea} name="" id="" cols="30" rows="10">
                        </textarea> 
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 메인 이미지</div>
                    <div css={inputContainer}>
                    <input css={input} type="file" onChange={changeMainImgUrl} accept={".jpg, .png"}/>     
                    </div> 
                </div>

                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 스토리 이미지</div>
                    <div css={inputContainer}>
                    <input css={input} type="file" onChange={changeSubImgUrl} accept={".jpg, .png"}/>     
                    </div> 
                </div>
            
                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 목표 금액</div>
                    <div css={inputContainer}>
                        <input onChange={changeGoalTotal} css={input} type="text"/>원    
                    </div> 
                </div>

                <div css={infoInput}>
                    <div css={infoTitle}>펀딩 종료일</div>
                    <div css={inputContainer}>
                        <input onChange={changeEndDate} css={input} type="text"/>    
                    </div> 
                </div>
                {showTable && fundingInputParams.pageCategory === '펀딩' ?
                    <div css={rewardInfoInputContainer}>
                        <div css={rewardHeader}>
                            <h1 css={rewardH1}>리워드 추가</h1>
                            <div css={btnContainer}>
                                <button css={rewardBtn} onClick={addRewardInputComponentHandle}>+</button>
            
                            </div>
                        </div>
                        <table css={rewardTable}>
                            <thead>
                                <tr css={rewardTr}>
                                    <th css={rewardNameThAndTd}>리워드</th>
                                    <th css={rewardPriceThAndTd}>금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rewardTds.map(rewardTd => (
                                    <tr css={rewardTr} key={rewardTd.id}>
                                        <td css={rewardNameThAndTd}><input onChange={(e)=> handleRewardNameChange(rewardTd.id,e)} css={rewardTdInput} type="text"/></td>
                                        <td css={rewardPriceThAndTd}><input onChange={(e)=> handleRewardPriceChange(rewardTd.id,e)} css={rewardTdInput} type="number" placeholder='(원)'/><button css={rewardBtn} value={rewardTd.id} onClick={(e)=>removeRewardInputComponentHandle(rewardTd.id,e)}>-</button></td>    
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                        <div css={saveBtnContainer}>
                            <button onClick={madeRewardList}>저장하기</button>
                        </div>
                    </div>
                    
                : ""}
                <div css={subTitle}>
                    펀딩 신청인 등록
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>상호명</div>
                    <div css={inputContainer}>
                        <input onChange={changeCompanyName} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>대표자</div>
                    <div css={inputContainer}>
                        <input onChange={changeCeoName} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>닉네임</div>
                    <div css={inputContainer}>
                        <input onChange={changeNickname} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>주소</div>
                    <div css={inputContainer}>
                        <input onChange={changeCompanyAddress} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>고객센터</div>
                    <div css={inputContainer}>
                        <input onChange={changePhoneNumber} css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>이메일</div>
                    <div css={inputContainer}>
                        <input onChange={changeEmail} css={input} type="text"/>    
                    </div> 
                </div>
            </div>
            <div css={submitBtnContainer}>
                <button onClick={fundRegisterSubmitHandle}>펀딩 페이지 등록하기</button>
            </div>
        </>}
    </div>
    );
};

export default RegisterPage;