/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const searchMainContainer = css`

    width: 900px;
    height: 2000px;
    margin: auto;
    margin-top: 50px;
`;

export const searchBox = css`
    padding: 0px;
    margin: 50px auto;
    width: 760px;
    height: 50px;
    border: 2px solid green;
`

export const searchInput = css`
    padding-left: 2px;
    border: none;
    width: 93%;
    height: 80%;

    font-size: 20px;

    &:focus {
    outline:none;   
    }
`;

export const searchButton = css`
    border: none;
    width: 7%;
    height: 100%;

    font-size: 20px;

    cursor: pointer;
`

export const searchResultBox = css`
    margin: auto;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 800px;
`;

export const searchResultCategory = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 50px;

    border-bottom: 1px solid black;
`;

export const falseCategoryButton = css`
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

export const trueCategoryButton = css`
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

export const searchResultContainer = css`
    margin-top: 30px;
    width: 100%;
`

export const searchResultTop = css`
    display: flex;
    justify-content: space-between;
`;

export const searchResultLeft = css`
    margin-top: 7px;

`;

export const searchResultRight = css`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 50px

`;

export const newestButton = ({sortTemaWord}) => css`
    margin-top: 10px;
    
    width: 30%;
    height: 20px;

    border: none;
    background-color: ${sortTemaWord==='최신순' ? '#dbdbdb' : 'white'};

    cursor: pointer;
`;

export const amountButton = ({sortTemaWord}) => css`
    margin-top: 10px;
    margin-right: 25px;
    width: 30%;
    height: 20px;

    border: none;
    background-color: ${sortTemaWord==='금액순' ? '#dbdbdb' : 'white'};

    cursor: pointer;
`;

export const searchSortContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 200px;
`;

export const searchSortButtonContainer = css`
    display: flex;
    justify-content: center;
    
    width: 100%;
    height: 20%;

    border: 1px solid black;
    
    background-color: white;
    
    cursor: pointer;
`;

export const searchSortButton = css`
    width: 80%;
    height: 100%;

    border: none;
    font-size: 15px;
`;
export const direction = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;

    font-size: 20px;
    border: none;
`;

export const sortCategoryList = css`
    z-index: 99;
    width: 100%;
    
    border: 1px solid black;
    border-top: none;

    background-color: white;

    cursor: pointer;
`;

export const sortCategory = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 10px;

    background-color: white;
`;

export const searchResultPanel = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0px;
    width: 100%;
    height: 130px;

    border-bottom: 1px solid #dbdbdb;

    cursor: pointer;
`;

export const panelImgContainer = css`
    width: 15%;
    height: 100%;
`;

export const panelImg = css`
    width: 100%;
    height: 100%;
`

export const panelInfo = css`
    display: flex;
    flex-direction: column;

    padding-left: 20px;
    width: 65%;
`;

export const panelTitle = css`
    display: flex;
`;

export const progress = (eventStatus) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 50px;
    background-color: ${eventStatus==='진행중' ? 'green' : 'gray'};
    color: white;

    font-size: 12px;
`;

export const panelTitleText = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    font-size: 15px;
`;

export const centerName = css`
    display: flex;
    
    padding-top: 10px;
    font-size: 14px;
`;

export const panelTotalAmount = css`
    display: flex;
   
    width:20%;

    font-size: 20px;
`;

export const Amount = css`
    margin: 0px 10px;
    color: green;
`;