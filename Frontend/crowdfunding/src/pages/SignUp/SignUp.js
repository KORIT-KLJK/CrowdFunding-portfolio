/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import PopupPostCode from './PopupPostCode';
import PopupDom from './PopupDom';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Alert} from '@mui/material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';


const mainContainer = css`
    width: 100vw;
    height: 100vh;
    background: #eff0f2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const signupContainer = css`
    background:#f5f5f5 ;
    width: 960px;
    height: 840px;
    display: flex;
    flex-direction: row;
    box-shadow: 10px black;
    border-radius: 10px;
    -webkit-box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
    -moz-box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
    box-shadow: 27px 43px 43px -26px rgba(89,89,89,0.39);
`;

const signupLeftSide = css`
    width: 50%; 
    border-radius: 10px 0px 0px 10px;
    padding:75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
    background: #10c838;
    background: -webkit-linear-gradient(to right, #3CB371, #10c838);
    background: linear-gradient(to right, #3CB371, #10c838);
`;

const signupLeftSideh1 = css`
    color: white;
    width:100%;
    text-align: right;
    opacity: 0.9;
    font-family: "SUITE-Variable";
    font-size: 33px;
    font-weight: 800;
`;

const signupLeftSideLi = css`
    font-size:12px;
    text-align: left;
    opacity: 0.8;
    line-height: 1.5;
    float: left;
    margin-top: 50px;
    font-family: "SUITE-Variable";
    font-size: 15px;
`;

const signRightSide = css`
    width: 50%;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:40px;
    background: rgb(255,255,255);
    background: linear-gradient(287deg, rgba(255,255,255,1) 0%, rgba(243,244,244,1) 0%, rgba(255,255,255,1) 100%);
`;

const signupInputContainer = css`
    padding-top:120px;
    width:300px;
`;

const signupInputContainerWrap = css`
    width:300px;
    height: 45px;
    margin-top: 5px;
    border-radius: 2px;
`;

const inputLabel = css`
    display: flex;
    align-items: center;
`;

const checkedEmailAndAddress = css`
    margin-left: 20px;
`;
const inputValue = css`
    margin-bottom: 10px;
`;

const errorMsg = css`
    margin-bottom: 10px;
    font-size: 12px;
    color: red;
`;

const availableEmail = css`
  color: green;
`;

const inputAddress = css`
    display: flex;
    align-items: center;
`;

const signupBtn = css`
    width:95px;
    height:35px;
    color:white;
    border: 0;
    border-radius: 4px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgb(000,255,051);
    background: linear-gradient(162deg, rgba(000,204,102,1) 0%, rgba(000,204,102,1) 50%, rgba(000,255,051,1) 100%);
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
            setEmailSubmitDisabled(false);
        }catch(error) {
            setErrorMessages({email: error.response.data.errorData.email})
            setEmailSubmitDisabled(true);
        }
    }

    const register = useMutation(async () => {
        if (signUp.password !== signUp.confirmPassword) {
            setErrorMessages({confirmPassword: "비밀번호가 일치하지 않습니다."});
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
            alert("회원가입 완료")
            window.location.replace("/login")
        }catch(error) {
            setErrorMessages({password: "", confirmPassword: "", name: "", gender: "", birthday: "", zonecode: "", address: "", detailAddress: "",...error.response.data.errorData})
            console.log(error)
        }
    });

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
    
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    const signUpSubmit = () => {
        register.mutate();
    }

    return (
        <div>
            <header>
                
            </header>
            <main>
                <div css={mainContainer}>
                    <div css={signupContainer}>
                        <div css={signupLeftSide}>
                            <h1 css={signupLeftSideh1}>Unicef</h1>
                            <li css={signupLeftSideLi}>기부 펀딩 사이트에 가입해 주셔서 감사합니다.</li>
                            <li css={signupLeftSideLi}>우리는 사회적 가치를 가진 프로젝트와 조직을 지원하는 플랫폼입니다.</li>
                            <li css={signupLeftSideLi}>다양한 펀딩 프로젝트를 제공하며, 교육, 환경, 사회복지, 의료 등 다양한 분야에서 활동합니다.</li>
                            <li css={signupLeftSideLi}>회원들의 의견을 소중히 생각하며, 더 나은 서비스를 제공하기 위해 노력합니다.</li>
                            <li css={signupLeftSideLi}>지금 가입하여 작은 기부로 큰 변화를 만들어 나갈 수 있습니다.</li>
                        </div>
                        <div css={signRightSide}>
                            <div css={signupInputContainer}>

                                <div css={signupInputContainerWrap}>
                                    <label css={inputLabel}>이메일</label>
                                    <input type="text" placeholder="이메일 주소 입력" onChange={onChangeHandler} name="email"/>
                                    <button css={checkedEmailAndAddress} onClick={checkDuplicateEmail}>중복확인</button>
                                    <div css={errorMsg}>{errorMessage.email}</div>
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <label css={inputLabel}>비밀번호</label>
                                    <input type="text" placeholder="8-16자의 영문 및 숫자, 특수문자를 모두 포함" onChange={onChangeHandler} name="password"/>
                                    <div css={errorMsg}>{errorMessage.password}</div>       
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <label css={inputLabel}>비밀번호 확인</label>
                                    <input css={inputValue} type="text" placeholder="비밀번호 재입력" onChange={onChangeHandler} name="confirmPassword"/>
                                    <div css={errorMsg}>{errorMessage.confirmPassword}</div>
                                </div>
                                
                                <div css={signupInputContainerWrap}>
                                    <label css={inputLabel}>성명</label>
                                    <input type="text" placeholder="성명 입력" onChange={onChangeHandler} name="name"/>
                                    <div css={errorMsg}>{errorMessage.name}</div>
                                </div>

                                <div css={signupInputContainerWrap}>
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
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <label css={inputLabel}>생년월일</label>
                                    <input css={inputValue} type="text" placeholder="yyyy-MM-dd 형식으로 작성" onChange={onChangeHandler} name="birthday"/>
                                    <div css={errorMsg}>{errorMessage.birthday}</div>
                                </div>

                                <div css={signupInputContainerWrap}>
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
                                </div>
                                <button css={signupBtn} onClick={signUpSubmit} disabled={emailSubmitDisabled}>가입하기</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default SignUp;