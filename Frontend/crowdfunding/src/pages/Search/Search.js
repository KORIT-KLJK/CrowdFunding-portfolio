/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';

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
    flex-direction: column;
    align-items: center;

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
    
    background-color: #003d1e;
    font-size: 30px;
    color: #00Ab33;

    cursor: pointer;
`;

const searchResultContainer = css`
    margin-top: 30px;
    width: 100%;
`

const searchResultTop = css`
    display: flex;
    justify-content: space-between;
`;

const searchResultLeft = css`
    margin-top: 7px;

`;

const searchResultRight = css`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 50px;

`;

const newestButton = css`
    margin-top: 10px;
    
    width: 30%;
    height: 20px;

    border: none;
    background-color: white;
`;

const amountButton = css`
    margin-top: 10px;
    margin-right: 25px;
    width: 30%;
    height: 20px;

    border: none;
    background-color: white;
`;

const searchSortContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 200px;
`;

const searchSortButtonContainer = css`
    display: flex;
    justify-content: center;
    
    width: 100%;
    height: 20%;

    border: 1px solid black;
    
    background-color: white;
    
    cursor: pointer;
`;

const searchSortButton = css`
    width: 80%;
    height: 100%;

    border: none;
    font-size: 15px;
    background-color: white;
`;
const direction = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;

    font-size: 20px;
    border: none;
`;

const sortCategoryList = css`
    width: 100%;
    
    border: 1px solid black;
    border-top: none;
    cursor: pointer;
`;

const sortCategory = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 10px;
`;

const searchResultPanel = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0px;
    width: 100%;
    height: 130px;

    border-bottom: 1px solid #dbdbdb;
`;

const panelImgContainer = css`
    width: 15%;
`;

const panelImg = css`
    width: 100%;
`

const panelInfo = css`
    display: flex;
    flex-direction: column;

    padding-left: 20px;
    width: 65%;
`;

const panelTitle = css`
    display: flex;
`;

const progress = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 50px;
    background-color: green;
    color: white;

    font-size: 12px;
`;

const panelTitleText = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    font-size: 15px;
`;

const centerName = css`
    display: flex;
    
    padding-top: 10px;
    font-size: 14px;
`;

const panelTotalAmount = css`
    display: flex;
   
    width:20%;

    font-size: 20px;
`;

const Amount = css`
    margin: 0px 10px;
    color: green;
`;

const Search = () => {
    const [giveflage, setGiveflage] = useState(false);
    const [fundflage, setFundflage] = useState(false);

    const [sortHidenFlage, setSortHidenFlage] = useState(false);

    const [sortWord, setSortWord] = useState("전체");

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

    const sortHiden = () => {
        if(sortHidenFlage) {
            setSortHidenFlage(false)
        } else {
            setSortHidenFlage(true)
        }
    }

    const sortWordChange = (e) => {
        setSortWord(e.target.textContent);
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
                <div css={searchResultContainer}>
                    <div css={searchResultTop}>
                        <div css={searchResultLeft}>검색결과 " " 건</div>
                        <div css={searchResultRight}>
                           <button css={newestButton}>최신순</button>
                           <button css={amountButton}>금액순</button>
                           <div css={searchSortContainer}>
                                <div css={searchSortButtonContainer} onClick={sortHiden}>
                                    <button css={searchSortButton} >{sortWord}</button>
                                    <div css={direction}>{sortHidenFlage ? "∧" : "∨"} </div>
                                </div>
                                {sortHidenFlage ? (<ul css={sortCategoryList}>
                                    <li css={sortCategory} onClick={sortWordChange}>전체</li>
                                    <li css={sortCategory} onClick={sortWordChange}>진행중</li>
                                    <li css={sortCategory} onClick={sortWordChange}>종료</li>
                                    </ul>) : ""}
                           </div>
                        </div>
                    </div>
                    <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={searchResultPanel}>
                        <div css={panelImgContainer}>
                            <img css={panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={panelInfo}>
                            <div css={panelTitle}>
                                <div css={progress}>진행중</div>
                                <div css={panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={panelTotalAmount}>총 <div css={Amount}>5,555,000</div> 원</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;<div>
<input type="text"/></div>