/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const providerMergeContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 200px;
    margin: 0px auto;
`;

export const providerMergeTxt = css`
    font-size: 25px;
    font-weight: 600;
`;

export const providerMergePasswordContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    margin: 0px auto;
`;

export const providerMergePasswordInput = css`
    border: none;
    outline: none;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 40px;
`;

export const providerMergeErrorMsg = css`
    margin-top: 10px;
    font-size: 15px;
    color: red;
`;

export const providerMergeButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    width: 400px;
    height: 200px;
`;

export const providerMergeIdentifyButton = css`
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

export const providerMergeCancelButton = css`
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

const OAuth2Merge = () => {
    const navigate = useNavigate();
    const providerMerge = useMutation(async (mergeData) => {
        try {
            const response = await axios.put("http://localhost:8080/auth/oauth2/merge", mergeData);
            return response;
        } catch (error) {
            setErrorMsg(error.response.data);
            return error;
        }
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                alert("계정 통합 완료!")
                window.location.replace("/login")
            }
        }
    });

    const [ password, setPassword ] = useState();
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ searchParams, setSearchParams ] = useSearchParams();
    const email = searchParams.get("email");
    const provider = searchParams.get("provider");
    const passwordChangeHandle = (e) => {
        setPassword(e.target.value);
    }

    const providerMergeSubmitHandle = () => {
        providerMerge.mutate({
            email,
            password,
            provider
        })
    }

    const providerMergeCancelHanddle = () => {
        navigate("/login");
    }

    return (
        <div>
            <div css={providerMergeContainer}>
                <h1 css={providerMergeTxt}>{email} 계정을 {provider} 계정과 통합하는 것에 동의하십니까?</h1>
            </div>
                <div css={providerMergePasswordContainer}>
                    <input css={providerMergePasswordInput} type="password" name="password" placeholder='기존 계정의 비밀번호를 입력하세요' onChange={passwordChangeHandle} />
                    <p css={providerMergeErrorMsg}>{errorMsg}</p>
                </div>
                <div css={providerMergeButtonContainer}>
                    <button css={providerMergeIdentifyButton} onClick={providerMergeSubmitHandle}>동의</button>
                    <button css={providerMergeCancelButton}onClick={providerMergeCancelHanddle}>취소</button>
                </div>
        </div>
    );
};

export default OAuth2Merge;