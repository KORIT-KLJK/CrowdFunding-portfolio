/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const searchMainContainer = css`
    width: 900px;
    height: 2000px;
    margin: auto;
    margin-top: 10px;
`;

const searchBox = css`
    padding: 0px;
    margin: 50px auto;
    width: 760px;
    height: 50px;
    border: 2px solid green;
`

const searchInput = css`
    padding-left: 2px;
    border: none;
    width: 93%;
    height: 80%;

    font-size: 20px;

    &:focus {
    outline:none;   
    }
`;

const searchButton = css`
    border: none;
    width: 7%;
    height: 100%;

    font-size: 20px;

    cursor: pointer;
`

const searchResultBox = css`
    margin: auto;
    margin-top: 100px;

    display: flex;

    width: 800px;
`;

const searchResultCategory = css`
    display: flex;
    justify-content: center;
    align-items: center;

   
    
    width: 100%;
    height: 50px;

    border-bottom: 1px solid black;
`;

const falseCategoryButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-bottom: 10px;
    margin: 0px 50px;
    width: 20%;
    height: 100%;

    border: none;
    
    background-color: white;
    font-size: 30px;

    cursor: pointer;
`;

const trueCategoryButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-bottom: 10px;
    margin: 0px 50px;
    width: 20%;
    height: 100%;

    border: none;
    
    background-color: red;
    font-size: 30px;
    color: green;

    cursor: pointer;
`;

const line = css`
    background-color: green;
`;
const searchResult = css`

`

const Search = () => {
    const [giveflage, setGiveflage] = useState(false);
    const [fundflage, setFundflage] = useState(false);

    const giveSateChange = () => {
        if(!giveflage) {
            setGiveflage(true)
            setFundflage(false)
        }
    }

    const fundSateChange = () => {
        if(!fundflage) {
            setFundflage(true)
            setGiveflage(false)
        }
    }

    return (
        <div css={searchMainContainer}>
            <div css={searchBox}>
                <input type="text" css={searchInput} placeholder='검색어를 입력해 주세요'/>
                <button css={searchButton}><FiSearch/></button>
            </div>
            <div css={searchResultBox}>
                <div css={searchResultCategory}>
                    <button onClick={giveSateChange} css={giveflage ? trueCategoryButton : falseCategoryButton}>기부</button>
                    <button onClick={fundSateChange} css={fundflage ? trueCategoryButton : falseCategoryButton}>펀딩</button>
                </div>
                <div css={searchResult}>

                </div>
            </div>

        </div>
    );
};

export default Search;<div>
<input type="text"/></div>