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

    const [searchParam, setSearchParam] = useState({page:1, searchValue:"", searchCategory:"기부", searchSort:"전체", searchTema:"최신순"});
    const [refresh, setRefresh] = useState(true);
    const [findGivingData, setFindGivingData] = useState({
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
        return await axios.get('http://localhost:8080/get/search/page',option)
    },{
        enabled:refresh,
        onSuccess: () => {
            setRefresh(false);
        }
    }
    );
    console.log(getPageData)

    const [sortHidenFlage, setSortHidenFlage] = useState(false);
    const [sortTemaWord, setSortTemaWord] = useState("최신순")
    const [sortWord, setSortWord] = useState("전체");
    const [categoryName, setCategoryName] = useState("기부");

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
        setRefresh(true);
    }
    const sortWordChange = (e) => {
        setSortWord(e.target.textContent);
        setSearchParam({...searchParam, searchSort:e.target.textContent})
        setRefresh(true);
    }

    const categoryChange = (e) => {
        setCategoryName(e.target.textContent);
        setSearchParam({...searchParam, searchCategory:e.target.textContent})
        setRefresh(true);
    }

    const searchValueChange = (e) => {
        setSearchParam({...searchParam, searchValue: e.target.value})
    }

    const searchValueSubmitEnter = (e) => {
        if(e.keyCode === 13) {
            searchValueSubmit()
        }
    }
    const searchValueSubmit = () => {
        setRefresh(true);
    }


    const pageNation = () => {
        if(getPageData.isLoading) {
            return <></>;
        }

        const nowPage = searchParam.page

        const lastPage = getPageData.data.data.totalCount % 20 === 0 
            ? getPageData.data.data.totalCount / 20 
            : Math.floor(getPageData.data.data.totalCount / 20) + 1;

        const startIndex = searchParam.page % 5 === 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];

        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                 <button disabled={nowPage === 1} onClick={() => {
                    setSearchParam({...searchParam, page: 1});
                    setRefresh(true);
                }}>&#60;&#60;</button>

                <button disabled={nowPage === 1} onClick={() => {
                    setSearchParam({...searchParam, page: nowPage-1});
                    setRefresh(true);
                }}>&#60;</button>

                {pageNumbers.map(page => (<button key={page} onClick={() =>{
                    setSearchParam({...searchParam, page});
                    setRefresh(true);
                }}disabled={page === nowPage}>{page}</button>))}

                <button disabled={nowPage === lastPage} onClick={() => {
                    setSearchParam({...searchParam, page: nowPage+1});
                    setRefresh(true);
                }}>&#62;</button>

                <button disabled={nowPage === lastPage} onClick={() => {
                    setSearchParam({...searchParam, page: lastPage});
                    setRefresh(true);
                }}>&#62;&#62;</button>
            </>
        )
    }

    return (
        <div css={S.searchMainContainer}>
            <div css={S.searchBox}>
                <input type="text" onChange={searchValueChange} onKeyUp={searchValueSubmitEnter} css={S.searchInput} placeholder='검색어를 입력해 주세요'/>
                <button css={S.searchButton} onClick={searchValueSubmit}><FiSearch/></button>
            </div>
            <div css={S.searchResultBox}>
                <div css={S.searchResultCategory}>
                    <button onClick={categoryChange} css={categoryName === "기부" ? S.trueCategoryButton : S.falseCategoryButton}>기부</button>
                    <button onClick={categoryChange} css={categoryName === "펀딩" ? S.trueCategoryButton : S.falseCategoryButton}>펀딩</button>
                </div>
                <div css={S.searchResultContainer}>
                    <div css={S.searchResultTop}>
                        <div css={S.searchResultLeft}>검색결과 "{getPageData.isLoading ? "" : getPageData.data.data.totalCount}" 건</div>
                        <div css={S.searchResultRight}>
                           <button onClick={sortTemaWordChange} css={S.newestButton({sortTemaWord})}>최신순</button>
                           <button onClick={sortTemaWordChange} css={S.amountButton({sortTemaWord})}>금액순</button>
                           <div css={S.searchSortContainer}>
                                <div css={S.searchSortButtonContainer} onClick={sortHiden}>
                                    <button css={S.searchSortButton} >{sortWord}</button>
                                    <div css={S.direction}>{sortHidenFlage ? "" : "∨"} </div>
                                </div>
                                {sortHidenFlage ? (<ul css={S.sortCategoryList}>
                                    <li css={S.sortCategory} onClick={sortWordChange}>전체</li>
                                    <li css={S.sortCategory} onClick={sortWordChange}>진행중</li>
                                    <li css={S.sortCategory} onClick={sortWordChange}>종료</li>
                                    </ul>) : ""}
                           </div>
                        </div>
                    </div>
                    {getPageData.isLoading ? "" : getPageData.data.data.pageList.map(page=> (
                             <div key={page.pageId} css={S.searchResultPanel}>
                             <div css={S.panelImgContainer}>
                                 <img css={S.panelImg} src={page.imgUrl} alt={page.imgUrl}/>
                             </div>
                             <div css={S.panelInfo}>
                                 <div css={S.panelTitle}>
                                     <div css={S.progress(page.eventStatus)}>{page.eventStatus}</div>
                                     <div css={S.panelTitleText}>{page.pageTitle}</div>    
                                 </div>
                                 <div css={S.centerName}> <HiHome/> {page.userName}</div>
                             </div>
                             <div css={S.panelTotalAmount}>총 <div css={S.Amount}>{page.pageTotalAmount}</div> 원</div>
                         </div>
                    ))}
                   
                    <div>
                    {pageNation()}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;<div>
<input type="text"/></div>