/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const searchMainContainer = css`
    width: 900px;
    height: 2000px;
    margin: auto;
    margin-top: 10px;
`;

const searchBox = css`
    padding: 0px;
    margin: 20px auto;
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

const Search = () => {
    return (
        <div css={searchMainContainer}>
            <div css={searchBox}>
                <input type="text" css={searchInput}/>
                <button css={searchButton}><FiSearch/></button>
            </div>
        </div>
    );
};

export default Search;<div>
<input type="text"/></div>