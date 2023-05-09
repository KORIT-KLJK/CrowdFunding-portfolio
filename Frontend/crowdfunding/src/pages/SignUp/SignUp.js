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
export const inputValue = css`
    margin-bottom: 10px;
`;

export const errorMsg = css`
    margin-bottom: 10px;
    font-size: 12px;
    color: red;
`;

export const availableEmail = css`
  color: green;
`;

export const inputAddress = css`
    display: flex;
    align-items: center;
`;

export const signUpButton = css`
    margin-top: 20px;
`;


const SignUp = () => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const postcodeRef = useRef(null);
    const addressRef = useRef(null);
    const [signUp, setSignUp] = useState({email: "", password: "", confirmPassword: "", name: "", gender: "", birthday: ""});
    const [address, setAddress] = useState({zonecode: "", address: "", buildingName: "", bname: "", detailAddress: "", addressType: ""});
    const [errorMessage, setErrorMessages] = useState({email: "", password: "", confirmPassword: "", name: "", gender: "", birthday: "", zonecode: "", address: "", detailAddress: ""});
    const [emailSubmitDisabled, setEmailSubmitDisabled] = useState(true);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignUp({...signUp, [name]: value})
        setErrorMessages({...errorMessage, email: ""});
    }

    const onChangeAddressHandler = (e) => {
        const { name, value } = e.target;
        setAddress({...address, [name]: value})
    }
    
    const checkDuplicateEmail = async () => {
        const data = {
            email: signUp.email
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            await axios.post("http://localhost:8080/auth/checkemail", JSON.stringify(data), option)
            setErrorMessages({email: <div css={availableEmail}>사용 가능한 이메일입니다.</div>})
        }catch(error) {
            setErrorMessages({email: error.response.data.errorData.email})
        }
        setEmailSubmitDisabled(false);
    }

    const signUpSubmit = async () => {
        if (emailSubmitDisabled) {
            setErrorMessages({email: "이메일 중복확인을 해주세요."})
            return;
        }
        
        const data = {
            ...signUp, ...address
        }

        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option)
            await axios.post("http://localhost:8080/auth/address", JSON.stringify(data), option)
            setErrorMessages({password: "", confirmPassword: "", name: "", gender: "", birthday: "", zonecode: "", address: "", detailAddress: ""})
            
        }catch(error) {
            setErrorMessages({password: "", confirmPassword: "", name: "", gender: "", birthday: "", zonecode: "", address: "", detailAddress: "",...error.response.data.errorData})
            console.log(error)
        }

        if (signUp.password !== signUp.confirmPassword) {
            setErrorMessages({confirmPassword: "비밀번호가 일치하지 않습니다."})
            return;
        }

    };

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
                    <button css={checkedEmailAndAddress} onClick={checkDuplicateEmail}>중복확인</button>
                    <div css={errorMsg}>{errorMessage.email}</div>

                    <label css={inputLabel}>비밀번호</label>
                    <input type="text" placeholder="8-16자의 영문 및 숫자, 특수문자를 모두 포함" onChange={onChangeHandler} name="password"/>
                    <div css={errorMsg}>{errorMessage.password}</div>

                    <label css={inputLabel}>비밀번호 확인</label>
                    <input css={inputValue} type="text" placeholder="비밀번호 재입력" onChange={onChangeHandler} name="confirmPassword"/>
                    <div css={errorMsg}>{errorMessage.confirmPassword}</div>
                    
                    <label css={inputLabel}>성명</label>
                    <input type="text" placeholder="성명 입력" onChange={onChangeHandler} name="name"/>
                    <div css={errorMsg}>{errorMessage.name}</div>

                    <label css={inputLabel}>성별</label>
                    <div css={inputValue}>
                        <label>
                            <input type="radio" name="gender" value="male" onChange={onChangeHandler} />
                            남성
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" onChange={onChangeHandler} />
                            여성
                        </label>
                    </div>
                    <div css={errorMsg}>{errorMessage.gender}</div>

                    <label css={inputLabel}>생년월일</label>
                    <input css={inputValue} type="text" placeholder="yyyy-MM-dd 형식으로 작성" onChange={onChangeHandler} name="birthday"/>
                    <div css={errorMsg}>{errorMessage.birthday}</div>

                    <label css={inputLabel}>주소</label>
                    <input type="text" placeholder="우편번호" ref={postcodeRef} onChange={onChangeAddressHandler} name="zonecode" value={address.zonecode}/>
                    <button css={checkedEmailAndAddress} onClick={openPostCode}>우편번호 검색</button>
                    <div css={errorMsg}>{errorMessage.zonecode}</div>
                    <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode 
                                onClose={closePostCode}
                                postcodeRef={postcodeRef}
                                addressRef={addressRef}
                                setAddress={setAddress}/>
                        </PopupDom>
                    )}
                    </div>
                    <input css={inputAddress} type="text" placeholder="주소" ref={addressRef} onChange={onChangeAddressHandler} name="address" value={address.address  + address.buildingName}/>
                    <div css={errorMsg}>{errorMessage.address}</div>
                    <input css={inputAddress} type="text" placeholder="상세주소" onChange={onChangeAddressHandler} name="detailAddress" />
                    <div css={errorMsg}>{errorMessage.detailAddress}</div>
                    <button css={signUpButton} onClick={signUpSubmit}>가입하기</button>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default SignUp;