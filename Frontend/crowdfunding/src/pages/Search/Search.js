/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';
import * as S from './style'


const Search = () => {
    const [giveflage, setGiveflage] = useState(false);
    const [fundflage, setFundflage] = useState(false);

    const [sortHidenFlage, setSortHidenFlage] = useState(false);

    const [sortTemaWord, setSortTemaWord] = useState("최신순")

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

    const sortTemaWordChange = (e) => {
        setSortTemaWord(e.target.textContent);
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
        <div css={S.searchMainContainer}>
            <div css={S.searchBox}>
                <input type="text" css={S.searchInput} placeholder='검색어를 입력해 주세요'/>
                <button css={S.searchButton}><FiSearch/></button>
            </div>
            <div css={S.searchResultBox}>
                <div css={S.searchResultCategory}>
                    <button onClick={giveSateChange} css={giveflage ? S.trueCategoryButton : S.falseCategoryButton}>기부</button>
                    <button onClick={fundSateChange} css={fundflage ? S.trueCategoryButton : S.falseCategoryButton}>펀딩</button>
                </div>
                <div css={S.searchResultContainer}>
                    <div css={S.searchResultTop}>
                        <div css={S.searchResultLeft}>검색결과 " " 건</div>
                        <div css={S.searchResultRight}>
                           <button onClick={sortTemaWordChange} css={S.newestButton}>최신순</button>
                           <button onClick={sortTemaWordChange} css={S.amountButton}>금액순</button>
                           <div css={S.searchSortContainer}>
                                <div css={S.searchSortButtonContainer} onClick={sortHiden}>
                                    <button css={S.searchSortButton} >{sortWord}</button>
                                    <div css={S.direction}>{sortHidenFlage ? "∧" : "∨"} </div>
                                </div>
                                {sortHidenFlage ? (<ul css={S.sortCategoryList}>
                                    <li css={S.sortCategory} onClick={sortWordChange}>전체</li>
                                    <li css={S.sortCategory} onClick={sortWordChange}>진행중</li>
                                    <li css={S.sortCategory} onClick={sortWordChange}>종료</li>
                                    </ul>) : ""}
                           </div>
                        </div>
                    </div>
                    <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                     <div css={S.searchResultPanel}>
                        <div css={S.panelImgContainer}>
                            <img css={S.panelImg} src="https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720"
                            alt='https://happybean-phinf.pstatic.net/20230428_23/1682638883837QfVjU_JPEG/KakaoTalk_20230427_201547249_01jpg?type=w720'/>
                        </div>
                        <div css={S.panelInfo}>
                            <div css={S.panelTitle}>
                                <div css={S.progress}>진행중</div>
                                <div css={S.panelTitleText}> 행복한 어린이 날</div>    
                            </div>
                            <div css={S.centerName}> <HiHome/> 모두의 마블</div>
                        </div>
                        <div css={S.panelTotalAmount}>총 <div css={S.Amount}>5,555,000</div> 원</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;<div>
<input type="text"/></div>