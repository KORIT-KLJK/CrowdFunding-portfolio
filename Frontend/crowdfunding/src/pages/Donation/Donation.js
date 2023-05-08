/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import HeaderMain from "../../components/Header/HeaderMain/HeaderMain";
import home from "../../assets/images/home.png";
import child from "../../assets/images/child.png";
import old from "../../assets/images/old.png";
import disable from "../../assets/images/disable.png";
import multi from "../../assets/images/multi.png";
import globe from "../../assets/images/globe.png";

const mainContainer = css`
  min-width: 1140px;
`;

const header = css`
  color: #202020;
  font: NanumBarunGothic;
`;

const menubarMain = css`
  position: relative;
  margin-bottom: -1px;
  border-top: 1px solid rgba(0,0,0,.12);
`;

const menubar = css`
  width: 1140px;
  margin: 0 auto;
  font-size: 0;
  text-align: center;
`;

const menubarItem = css`
    display: inline-block;
    height: 50px;
    padding: 16px 35px;
    font-size: 17px;
    text-align: center;
    vertical-align: middle;
`;

const categoryName = css`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const categoryArea = css`
  background-color: #10C838;
`;

const categoryInner = css`
  display: flex;
  width: 1140px;
  margin: 0 auto;
  padding: 48px 20px 42px;
  font-size: 16px;
  list-style: none;
`;

const categoryItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const label = css`
  display: inline-block;
  position: relative;
  padding-top: 73px;
  font-size: 16px;
`;

const icon = css`
  background-position: -144px -715px;
  width: 32px;
  height: 32px;
`;

const fundBank = css`
  float: left;
  font-size: 19px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -.5px;
  color: #333;
  width: 1164px;
  margin: 12px 0 -24px -24px;
  clear: both;
`;

const fundPoint = css`
  font-weight: 700;
  letter-spacing: 0;
  color: #00ab33;
`;

const fundMainCardContainer = css`
  width: 1140px;
  margin: 60px auto 0;
`;

const fundBankArea = css`
  padding: 2PX 39px 0 13px;
  background-color: #fff;
  line-height: 32px;
  text-align: left;
  white-space: nowrap;
  color: #333;
`;

const fundBankButton = css`
  position: relative;
  padding: 2PX 39px 0 13px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  line-height: 32px;
  text-align: left;
  white-space: nowrap;
  color: #333;
  cursor: pointer;
`;

const fundBankButtonItem = css`
  display: block;
  padding: 9px 14px;
  outline: 0;
  line-height: 17px;
  cursor: pointer;
`;

const Donation = () => {
  return (
    <div css={mainContainer}>
      <header css={header}>
        <HeaderMain />
      </header>  
      <body>
        <div css={menubarMain}>
          <div css={menubar}>
            <a css={menubarItem} href="/donation">진행중 모금함</a>
            <a css={menubarItem} href="/donation">더블 모금함</a>
            <a css={menubarItem} href="/donation">모금후기</a>
          </div>
        </div>
        <div css={categoryArea}>
          <h2 css={categoryName}>테마 카테고리</h2>
          <ul css={categoryInner}>
            <li css={categoryItem}>
              <img src={home} css={icon} alt="" />
              <label for={label}>전체보기</label>
            </li>
            <li css={categoryItem}>
              <img src={child} css={icon} alt="" />
              <label for={label}>아동•청소년</label>
            </li>
            <li css={categoryItem}>
              <img src={old} css={icon} alt="" />
              <label for={label}>노인</label>
            </li>
            <li css={categoryItem}>
              <img src={disable} css={icon} alt="" />
              <label for={label}>장애인</label>
            </li>
            <li css={categoryItem}>
              <img src={multi} css={icon} alt="" />
              <label for={label}>다문화</label>
            </li>
            <li css={categoryItem}>
              <img src={globe} css={icon} alt="" />
              <label for={label}>환경</label>
            </li>
          </ul>
        </div>
        <div role="main" css={fundMainCardContainer}>
          <h4 css={fundBank}>모금함 <span css={fundPoint}>922</span>개</h4>
          <div css={fundBankArea}>
            <button css={fundBankButton} 
            aria-label="정렬 순 선택" 
            aria-owns="wa_listbox" 
            aria-haspopup="listbox" 
            aria-expanded="false" 
            role="listbox">추천 순</button>
            <ul role="listbox" aria-hidden="true">
              <li css={fundBankButtonItem} role="option" tabindex="0" data-order="" data-sorttype="desc" aria-selected="true">
                <span></span>
              </li>
              <li css={fundBankButtonItem} role="option" ></li>
            </ul>
          </div>
        </div>
          
      </body>
        

      
      
    </div>
  );
};

export default Donation;
