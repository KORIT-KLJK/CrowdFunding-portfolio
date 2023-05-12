/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import * as S from './style'


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
`

const RegisterPage = () => {

    const [inputParams, setInputParams] = useState({ 
        pageCategory: "펀딩",
        detailCategory : "",
        title: "",
        story: "",
        imgUrl: "",
        reward: [],
    });

    const [rewardTds, setRewardTds] = useState([
        {
            id: 1
        }
    ]);
    const rewardId = useRef(2);

    const [rewardName, setRewardName] = useState([]);
    const [rewardPrice, setRewardPrice] = useState([]);

    const addRewardInputComponentHandle = () => {
        setRewardTds([...rewardTds, {id: rewardId.current}]);
        rewardId.current += 1;
    }

    const removeRewardInputComponentHandle = (e) => {
        setRewardTds([...rewardTds.filter(rewardTd => rewardTd.id !== parseInt(e.target.value))]);
    }


    return (
        <div css={mainContainer}>
            <div css={mainTitleContainer}>
                <h1 css={mainTitle}>페이지 등록1</h1>
            </div>
            
            <div css={infoInputContainer}>
                <div css={subTitle}>
                    카테고리 설정
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>페이지 카테고리</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>    
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>상세 카테고리</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>    
                    </div> 
                </div>
                <div css={subTitle}>
                    페이지 설정
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>제목</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>    
                    </div> 
                </div>
                <div css={storyInfoInput}>
                    <div css={storyInfoTitle}>스토리</div>
                    <div css={storyInputContainer}>
                       <textarea css={storyTextArea} name="" id="" cols="30" rows="10">
                        </textarea> 
                    </div> 
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>이미지</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>    
                    </div> 
                </div>
               
                <div css={infoInput}>
                    <div css={infoTitle}>목표금액</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>원    
                    </div> 
                </div>
                {inputParams.pageCategory === '펀딩' ?
                    <div css={rewardInfoInputContainer}>
                        <div css={rewardHeader}>
                            <h1 css={rewardH1}>리워드 추가</h1>
                            <div css={btnContainer}>
                                <button css={rewardBtn} onClick={addRewardInputComponentHandle}>+</button>
                                <button css={rewardBtn}>-</button>
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
                                        <td css={rewardNameThAndTd}><input css={rewardTdInput} type="text"/></td>
                                        <td css={rewardPriceThAndTd}><input css={rewardTdInput} type="text"/>원</td>
                                        <td><button css={rewardBtn} value={rewardTd.id} onClick={removeRewardInputComponentHandle}>-</button></td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                    
                : ""}
                <div css={subTitle}>
                    신청인 등록
                </div>
                <div css={infoInput}>
                    <div css={infoTitle}>이메일</div>
                    <div css={inputContainer}>
                        <input css={input} type="text"/>    
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;