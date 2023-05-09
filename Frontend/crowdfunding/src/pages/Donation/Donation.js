/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderMain from "../../components/Header/HeaderMain/HeaderMain";
import home from "../../assets/images/home.png";
import child from "../../assets/images/child.png";
import old from "../../assets/images/old.png";
import disable from "../../assets/images/disable.png";
import multi from "../../assets/images/multi.png";
import globe from "../../assets/images/globe.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"
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
  border-top: 1px solid rgba(0, 0, 0, 0.12);
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
  background-color: #10c838;
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
  letter-spacing: -0.5px;
  color: #333;
  width: 1164px;
  margin: 12px 0 -24px 0;
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

const fundBankBox = css`
  text-align: right;
`;

const fundBankArea = css`
  display: block;
  padding: 9px 14px;
  outline: 0;
  line-height: 17px;
`;

const fundBankButton = css`
  position: relative;
  width: 140px;
  height: 35px;
  padding: 2px 39px 0 13px;
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
  text-align: -webkit-match-parent;
`;

const ulListBox = css`
  position: absolute;
  top: 35px;
  right: -1px;
  z-index: 20;
  padding: 12px 0;
  border: 1px solid #e3e3e3;
  width: 140px;
  background-color: #fff;
  text-align: left;
  color: #333;
`;

const liBox = css`
  display: block;
  padding: 9px 14px;
  outline: 0;
  line-height: 17px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

const arrowIcon = css`
  margin-left: 65px;
`;

const donationCardList = css`
  width: 1164px;
  margin: 12px 0 -24px -24px;
  clear: both;
`;

const cardToday = css`
  border: 1px solid rgba(0,0,0,.09);
  float: left;
  position: relative;
  width: 267px;
  height: 363px;
  margin: 0 0 24px 24px;
  display: table;
  background-color: #10c838;
  font-family: NanumSquareWebFont,dotum,Sans-serif;
  text-align: center;
  color: #fff;
`;

const cardTodayInner = css`
  display: table-cell;
  vertical-align: middle;
`;

const labelToday = css`
  display: block;
  width: 70px;
  margin: 0 auto;
  padding: 6px 0 5px;
  background-clip: padding-box;
  background-color: #0da82f;
  font-weight: 700;
  letter-spacing: .3px;
  color: #fff;
`;

const cardTodayTitle = css`
  display: block;
  margin-top: 17px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  letter-spacing: -1px;
  color: #fff;
`;

const cardTodayText = css`
  display: inline-block;
  margin-top: 34px;
  padding: 0 5px;
  font-size: 20px;
  line-height: 30px;
`;

const point = css`
  font-weight: 700;
  color: #fff;
`;

const scrollNumber = css`
  font-weight: bold;
  color: #fff;
`;

const donationCard = css`
  float: left;
  position: relative;
  width: 267px;
  height: 363px;
  margin: 0 0 24px 24px;
  background-color: #fff;
  font-family: NanumSquareWebFont,dotum,Sans-serif;
`;

const cardImg = css`
  vertical-align: top;
`;

const Donation = () => {
  const [showList, setShowList] = useState(false);

  const ClickView = (e) => {
    if (e.type !== "click") {
      if (e.keyCode !== 13) {
        return;
      }
    }
    setShowList(!showList);
  };
  return (
    <div css={mainContainer}>
      <header css={header}>
        <HeaderMain />
      </header>
      <body>
        <div css={menubarMain}>
          <div css={menubar}>
            <a css={menubarItem} href="/donation">
              진행중 모금함
            </a>
            <a css={menubarItem} href="/donation">
              더블 모금함
            </a>
            <a css={menubarItem} href="/donation">
              모금후기
            </a>
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
          <h4 css={fundBank}>
            모금함 <span css={fundPoint}>922</span>개
          </h4>
          <div css={fundBankBox}>
            <div css={fundBankArea}>
              <button css={fundBankButton} onClick={ClickView}>
                추천 순<IoIosArrowDown css={arrowIcon} />
                {showList && (
                  <ul css={ulListBox} role="listbox" aria-hidden="false">
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>추천 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>최신 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>모금액 많은 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>모금액 적은 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>모금액 높은 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                    >
                      <span>종료임박 순서</span>
                    </li>
                  </ul>
                )}
              </button>
            </div>
          </div>
          <div css={donationCardList}>
            <div css={cardToday}>
              <a href="https://happybean.naver.com/statistics" css={cardTodayInner}>
                <span css={labelToday}>Today</span>
                <strong css={cardTodayTitle}>오늘 함께한 기부금</strong>
                <span css={cardTodayText}>
                  <strong css={point}>
                    <span css={scrollNumber}>3,320</span>
                    <span css={scrollNumber}>명</span>
                  </strong>
                  <span css={scrollNumber}>이</span>
                  <br />
                  <strong css={point}>
                  <span css={scrollNumber}>10,827,900</span>
                  원
                  </strong>
                  <span css={scrollNumber}>을</span>
                  <br />
                  <span css={scrollNumber}>기부하였습니다.</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Donation;
