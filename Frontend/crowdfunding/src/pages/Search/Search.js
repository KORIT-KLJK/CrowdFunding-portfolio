/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';
import * as S from './style'
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';



const Search = () => {
    const queryClient = useQueryClient();

    const [searchParam, setSearchParam] = useState({page:1, searchValue:"", searchCategory:"전체", searchSort:"전체", searchTema:"최신순"});
    const [refresh, setRefresh] = useState(true);
    const [findGivingData, setFindGivingDate] = useState({
        img_url: "",
        givingPageTitle:"",
        centerName:"",
        givingAmount:"",
        endDate:""
    });

    const [findFundingData, setFundingData] = useState({
        img_url: "",
        fundingPageTitle:"",
        userName:"",
        fundingAmount:"",
        endDate:""
    });

    const getPageData = useQuery(["registerSearchPage"], async () => {
        const option = {
            params: {
                ...searchParam
            }
        }
        return await axios.get('http://localhost:8080/get/search/page')
    },{
        enabled:refresh,
        onSuccess: () => {
            setRefresh(false);
        }
    }
    )

    const [sortHidenFlage, setSortHidenFlage] = useState(false);
    const [sortTemaWord, setSortTemaWord] = useState("최신순")
    const [sortWord, setSortWord] = useState("전체");
    const [categoryName, setCategoryName] = useState("전체");

    const sortHiden = () => {
        if(sortHidenFlage) {
            setSortHidenFlage(false)
        } else {
            setSortHidenFlage(true)
        }
    }

    const sortTemaWordChange = (e) => {
        setSortTemaWord(e.target.textContent);
        setSearchParam({...searchParam, searchTema:e.target.textContent})
    }
    const sortWordChange = (e) => {
        setSortWord(e.target.textContent);
        setSearchParam({...searchParam, searchSort:e.target.textContent})
    }

    const categoryChange = (e) => {
        setCategoryName(e.target.textContent);
        setSearchParam({...searchParam, searchCategory:e.target.textContent})
    }

    const searchValueChange = (e) => {
        setSearchParam({...searchParam, searchValue: e.target.value})
    }

    // const pageNation = () => {
    //     if(getBooks.isLoading) {
    //         return <></>;
    //     }

    //     const nowPage = searchParams.page

    //     const lastPage = getBooks.data.data.totalCount % 20 === 0 
    //         ? getBooks.data.data.totalCount / 20 
    //         : Math.floor(getBooks.data.data.totalCount / 20) + 1;

    //     const startIndex = searchParam.page % 5 === 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1;
    //     const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

    //     const pageNumbers = [];

    //     for(let i = startIndex; i <= endIndex; i++) {
    //         pageNumbers.push(i);
    //     }

    //     return (
    //         <>
    //              <button disabled={nowPage === 1} onClick={() => {
    //                 setSearchParam({...searchParam, page: 1});
    //                 setRefresh(true);
    //             }}>&#60;&#60;</button>

    //             <button disabled={nowPage === 1} onClick={() => {
    //                 setSearchParam({...searchParam, page: nowPage-1});
    //                 setRefresh(true);
    //             }}>&#60;</button>

    //             {pageNumbers.map(page => (<button key={page} onClick={() =>{
    //                 setSearchParam({...searchParam, page});
    //                 setRefresh(true);
    //             }}disabled={page === nowPage}>{page}</button>))}

    //             <button disabled={nowPage === lastPage} onClick={() => {
    //                 setSearchParam({...searchParam, page: nowPage+1});
    //                 setRefresh(true);
    //             }}>&#62;</button>

    //             <button disabled={nowPage === lastPage} onClick={() => {
    //                 setSearchParam({...searchParam, page: lastPage});
    //                 setRefresh(true);
    //             }}>&#62;&#62;</button>
    //         </>
    //     )
    // }

    return (
        <div css={S.searchMainContainer}>
            <div css={S.searchBox}>
                <input type="text" onChange={searchValueChange} css={S.searchInput} placeholder='검색어를 입력해 주세요'/>
                <button css={S.searchButton}><FiSearch/></button>
            </div>
            <div css={S.searchResultBox}>
                <div css={S.searchResultCategory}>
                    <button onClick={categoryChange} css={categoryName === "기부" ? S.trueCategoryButton : S.falseCategoryButton}>기부</button>
                    <button onClick={categoryChange} css={categoryName === "펀딩" ? S.trueCategoryButton : S.falseCategoryButton}>펀딩</button>
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