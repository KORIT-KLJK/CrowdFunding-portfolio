/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import PopupPostCode from './PopupPostCode';
import PopupDom from './PopupDom';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Alert, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup} from '@mui/material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Lock, Mail, Badge, Celebration, Home, Phone } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

const mainContainer = css`
    background: #eff0f2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const signupContainer = css`
    background:#f5f5f5 ;
    width: 1110px;
    height: fit-content;
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
    font-size: 36px;
    font-weight: 800;
    background-color:transparent;
`;

const signupLeftSideLi = css`
    font-size: 15px;
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
    padding-top: 70px;
    width: 400px;
`;

const signupInputContainerWrap = css`
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-radius: 2px;
`;

const genderContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5px;
    border-radius: 2px;
`;

const radioCheckBox = css`
    margin-top: 20px;
`;

const placeholderFontSize = css`
    font-size: 13px;
`;

const errorCss = css`
    font-size: 12px;
    height: 32px;
    align-items: center;
    opacity: 0.6;
    position: relative;
`;

const inputAddressNumMargin = css`
    margin-top: 10px;
`;

const checkedAddress = css`
    position: relative;
    align-items: center;
    text-align: center;
    margin-left: 30px;
    width: 110px;
    font-size: 11px;
    background-color: #0fb03a;
    float: right;
`;

const addressFontSize = css`
    font-size: 11px;
    margin-top: 10px;
`;

const inputMargin = css`
    margin-top: 20px;
`;

const postcodeAndBtn = css`
    width: 380px;
    height: 50px;
`;

const signUpBtnContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const signupBtn = css`
    width:95px;
    height:35px;
    border: 0;
    border-radius: 4px;
    margin-top: 110px;
    float: right;
    display: flex;
    flex-direction: column;
    background-color: #0fb03a;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const SignUp = () => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const postcodeRef = useRef(null);
    const addressRef = useRef(null);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const registerToken = searchParams.get("registerToken");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");
    
    const [signUp, setSignUp] = useState({
        email, 
        password: "", 
        confirmPassword: "", 
        name, 
        gender: "", 
        birthday: "", 
        phoneNumber:"", 
        provider
        });
    const [address, setAddress] = useState({zonecode: "", address: "", buildingName: "", bname: "", detailAddress: "", addressType: ""});
    const [errorMessage, setErrorMessages] = useState({email: "", password: "", confirmPassword: "", name: "", gender: "", birthday: "", phoneNumber:"", zonecode: "", address: "", detailAddress: ""});

    const OAuth2register = useMutation(async () => {
        if (signUp.password !== signUp.confirmPassword) {
            setErrorMessages({confirmPassword: "비밀번호가 일치하지 않습니다."});
            return;
        }
        const data = {
            ...signUp, ...address
        }

        const option = {
            headers: {
                registerToken: `Bearer ${registerToken}`,
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/oauth2/signup", JSON.stringify(data), option)
            setErrorMessages({password: "", confirmPassword: "", name: "", gender: "", birthday: "", phoneNumber: "", zonecode: "", address: "", detailAddress: ""})
            alert("회원가입 완료")
            window.location.replace("/login")
        }catch(error) {
            console.log(error)
            setErrorMessages({password: "", confirmPassword: "", name: "", gender: "", birthday: "", phoneNumber: "", zonecode: "", address: "", detailAddress: "",...error.response.data.errorData})
        }
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignUp({...signUp, [name]: value})
        setErrorMessages({...errorMessage, email: ""});
    }

    const onChangeAddressHandler = (e) => {
        const { name, value } = e.target;
        setAddress({...address, [name]: value})
    }

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
    
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    const signUpSubmit = () => {
        OAuth2register.mutate();
    }

    return (
        <div>
            <header>
                
            </header>
            <main>
                <div css={mainContainer}>
                    <div css={signupContainer}>
                        <div css={signupLeftSide}>
                            <h1 css={signupLeftSideh1}>UniSecond</h1>
                            <li css={signupLeftSideLi}>기부 펀딩 사이트에 가입해 주셔서 감사합니다.</li>
                            <li css={signupLeftSideLi}>우리는 사회적 가치를 가진 프로젝트와 조직을 지원하는 플랫폼입니다.</li>
                            <li css={signupLeftSideLi}>다양한 펀딩 프로젝트를 제공하며, 교육, 환경, 사회복지, 의료 등 다양한 분야에서 활동합니다.</li>
                            <li css={signupLeftSideLi}>회원들의 의견을 소중히 생각하며, 더 나은 서비스를 제공하기 위해 노력합니다.</li>
                            <li css={signupLeftSideLi}>지금 가입하여 작은 기부로 큰 변화를 만들어 나갈 수 있습니다.</li>
                        </div>
                        <div css={signRightSide}>
                            <div css={signupInputContainer}>
                                <FormControl variant="standard">
                                        <Input id="input-with-icon-adornment"
                                            css={placeholderFontSize}
                                            label="email" 
                                            variant="outlined" 
                                            value={email}
                                            disabled={true}
                                            type="text" 
                                            startAdornment={
                                                <InputAdornment position="start">
                                                <Mail />
                                                </InputAdornment>
                                            } />
                                    </FormControl>
                                
                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment" 
                                                label="password" 
                                                variant="outlined" 
                                                placeholder="8-16자의 영문 및 숫자, 특수문자를 모두 포함" 
                                                name="password" 
                                                type="password" 
                                                onChange={onChangeHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    <Lock />
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.password && <Alert css={errorCss} severity="error">{errorMessage.password}</Alert>}
                                    </FormControl>
                                </div>
                           
                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment" 
                                                label="password" 
                                                variant="outlined" 
                                                placeholder="비밀번호 재입력" 
                                                name="confirmPassword" 
                                                type="password" 
                                                onChange={onChangeHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    <Lock />
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.confirmPassword && <Alert css={errorCss} severity="error">{errorMessage.confirmPassword}</Alert>}
                                    </FormControl>
                                </div>
                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment" 
                                                label="name" 
                                                variant="outlined" 
                                                type="text"
                                                value={name}
                                                disabled={true}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    <Badge />
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.name && <Alert css={errorCss} severity="error">{errorMessage.name}</Alert>}
                                    </FormControl>
                                </div>

                                <div css={genderContainer}>
                                    <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="gender">
                                        <FormControlLabel css={radioCheckBox} name="gender" value="male" onChange={onChangeHandler} control={<Radio/>} label="남성" />
                                        <FormControlLabel css={radioCheckBox} name="gender" value="female" onChange={onChangeHandler} control={<Radio/>} label="여성" />
                                    </RadioGroup>                                  
                                        {errorMessage.gender && <Alert css={errorCss} severity="error">{errorMessage.gender}</Alert>}
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment"
                                                label="생년월일" 
                                                variant="outlined" 
                                                placeholder="예) 2000-05-10" 
                                                name="birthday" 
                                                type="text" 
                                                onChange={onChangeHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    <Celebration />
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.birthday && <Alert css={errorCss} severity="error">{errorMessage.birthday}</Alert>}
                                        </FormControl>
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                        <Input id="input-with-icon-adornment"
                                            css={inputMargin}
                                            label="전화번호" 
                                            variant="outlined"
                                            placeholder="예) 010-1234-5678"
                                            name="phoneNumber" 
                                            type="text" 
                                            onChange={onChangeHandler} 
                                            startAdornment={
                                                <InputAdornment position="start">
                                                <Phone />
                                                </InputAdornment>
                                            } />
                                        {errorMessage.phoneNumber && <Alert css={errorCss} severity="error">{errorMessage.phoneNumber}</Alert>}
                                    </FormControl>
                                </div>

                                <div css={signupInputContainerWrap}>
                                    <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment"
                                                css={inputAddressNumMargin}
                                                label="우편번호" 
                                                variant="outlined"
                                                value={address.zonecode}
                                                placeholder="우편번호"
                                                ref={postcodeRef}
                                                name="zonecode" 
                                                type="text" 
                                                onChange={onChangeAddressHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    <Home />
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.zonecode && <Alert css={errorCss} severity="error">{errorMessage.zonecode}</Alert>}
                                        </FormControl>
                                            <Button variant="contained" css={checkedAddress} onClick={openPostCode}>우편번호 검색</Button>
                                        
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
                                    </div>
                                    
                                    <div css={signupInputContainerWrap}>
                                        <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment"
                                                css={addressFontSize}
                                                label="주소"
                                                ref={addressRef}
                                                value={address.address  + address.buildingName}
                                                variant="outlined" 
                                                placeholder="주소" 
                                                name="address" 
                                                type="text" 
                                                onChange={onChangeAddressHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.address && <Alert css={errorCss} severity="error">{errorMessage.address}</Alert>}
                                        </FormControl>
                                    </div>
                                        <FormControl variant="standard">
                                            <Input id="input-with-icon-adornment" 
                                                css={addressFontSize}
                                                label="상세주소"
                                                ref={addressRef}
                                                variant="outlined" 
                                                placeholder="상세주소" 
                                                name="detailAddress" 
                                                type="text" 
                                                onChange={onChangeAddressHandler} 
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                } />
                                            {errorMessage.detailAddress && <Alert css={errorCss} severity="error">{errorMessage.detailAddress}</Alert>}
                                        </FormControl>
                                        <div css={signUpBtnContainer}>
                                            <Button variant="contained" css={signupBtn} onClick={signUpSubmit}>가입하기</Button>
                                        </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;