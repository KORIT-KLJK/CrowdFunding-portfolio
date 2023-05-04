/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import PopupPostCode from './PopupPostCode';
import PopupDom from './PopupDom';
import axios from 'axios';

export const mainContainer = css`
    width: 700px;
    margin: auto;
`;

export const inputLabel = css`
    display: flex;
    align-items: center;
`;

export const checkedEmailAndAddress = css`
    margin-left: 20px;
`;

export const inputAddress = css`
    display: flex;
    align-items: center;
`;

const SignUp = () => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const postcodeRef = useRef(null);
    const addressRef = useRef(null);
    const [signUp, setSignUp] = useState({email: "", password: "", name: "", birthday: "", gender: "", address: ""});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignUp({...signUp, [name]: value})
    }

    const signUpSubmit = async () => {
        const data = {
            ...signUp
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option)
            console.log(response)
        }catch(error) {
            console.log(error)
        }
    }

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
    
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    return (
        <div>
            <header>
                
            </header>
            <main>
                <div css={mainContainer}>
                    <label css={inputLabel}>이메일</label>
                    <input type="text" placeholder="이메일 주소 입력" onChange={onChangeHandler} name="email"/>
                    <button css={checkedEmailAndAddress}>중복확인</button>

                    <label css={inputLabel}>비밀번호</label>
                    <input type="text" placeholder="8-16자의 영문 및 숫자, 특수문자를 모두 포함" onChange={onChangeHandler} name="password"/>

                    <label css={inputLabel}>비밀번호 확인</label>
                    <input type="text" placeholder="비밀번호 재입력"/>
                    
                    <label css={inputLabel}>성명</label>
                    <input type="text" placeholder="성명 입력" onChange={onChangeHandler} name="name"/>

                    <label css={inputLabel}>성별</label>
                    <input type="text" placeholder="이메일 주소 입력" onChange={onChangeHandler} name="gender"/>
                    
                    <label css={inputLabel}>생년월일</label>
                    <input type="text" placeholder="생년월일 8자리 입력" onChange={onChangeHandler} name="birthday"/>

                    <label css={inputLabel}>주소</label>
                    <input type="text" placeholder="우편번호" ref={postcodeRef} onChange={onChangeHandler} name="address"/>
                    <button css={checkedEmailAndAddress} onClick={openPostCode}>우편번호 검색</button>
                    <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode 
                                onClose={closePostCode}
                                postcodeRef={postcodeRef}
                                addressRef={addressRef}/>
                        </PopupDom>
                    )}
                    </div>
                    <input css={inputAddress} type="text" placeholder="주소" ref={addressRef} onChange={onChangeHandler} name="address"/>
                    <input css={inputAddress} type="text" placeholder="상세주소" onChange={onChangeHandler} name="address"/>
                    <button onClick={signUpSubmit}>가입하기</button>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default SignUp;