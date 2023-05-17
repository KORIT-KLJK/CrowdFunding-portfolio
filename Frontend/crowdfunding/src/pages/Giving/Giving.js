/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderMain from "../../components/Header/HeaderMain/HeaderMain";
import home from "../../assets/images/home.png";
import child from "../../assets/images/child.png";
import old from "../../assets/images/old.png";
import disable from "../../assets/images/disable.png";
import multi from "../../assets/images/multi.png";
import globe from "../../assets/images/globe.png";
import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from "react-query";
import axios from "axios";

const categoryImg = {
  전체: home,
  아동: child,
  노인: old,
  장애인: disable,
  다문화: multi,
  환경: globe,
};

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

export const categoryArea = css`
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
  border: 0;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  &:focus {
    border: 1px solid #047ff1;
    color: #047ff1;
  }
`;

const categoryImgCss = css`
  position: relative;
  width: 50px;
  height: 50px;
`;

const categoryButton = css`
  width: 130px;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-right: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  &:focus {
    border: 1px solid #047ff1;
    color: #047ff1;
  }
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
  flex-direction: column;
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
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 10px;
`;

const givingCardList = css`
  display: flex;
  flex-wrap: wrap;
  width: 1164px;
  margin: 12px 0 -24px -24px;
  clear: both;
`;

const cardToday = css`
  border: 1px solid rgba(0, 0, 0, 0.09);
  float: left;
  position: relative;
  width: 267px;
  height: 363px;
  margin: 0 0 24px 24px;
  display: table;
  background-color: #10c838;
  font-family: NanumSquareWebFont, dotum, Sans-serif;
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
  letter-spacing: 0.3px;
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

const givingCard = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  width: 267px;
  height: 363px;
  margin: 0 0 24px 24px;
  background-color: #fff;
  font-family: NanumSquareWebFont, dotum, Sans-serif;

  cursor: pointer;
  &:hover {
    border: 1px solid #aaa;
  }
`;

const cardItemContent = css`
  padding: 21px 20px 0;
`;

const img = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const eventStatus = css`
  border: 1px solid #37b343;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 14.5%;
  left: 89.5%;
  width: 60px;
  height: 60px;
  background-color: #38d247cc;
  color: white;
  font-size: 14px;
`;

const cardImgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const cardItemTitle = css`
  text-overflow: ellipsis;
  height: 50px;
  line-height: 25px;
  font-size: 17px;
  letter-spacing: -0.5px;
  color: #333;
`;

const cardItemOrganization = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 8px;
  font-size: 15px;
  color: #828282;
`;

const cardItemBar = css`
  width: 100%;
  height: 5px;
  margin-top: 13px;
  background-color: #10c838;
`;

const cardItemPercent = css`
  display: inline-block;
  margin-top: 11px;
  font-size: 17px;
  letter-spacing: -0.2px;
  color: #00ab33;
`;

const cardItemMoney = css`
  float: right;
  margin-top: 11px;
  font-size: 17px;
  font-weight: 600;
  color: #333;
`;

const Giving = () => {
  const [givingRefresh, setGivingRefresh] = useState(true);
  const [showList, setShowList] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("최신순");
  const [searchParams, setSearchParams] = useState({
    page: 1,
    categoryId: 0,
    selectedOrder: "최신순",
  });

  const givingCategorys = useQuery(
    ["givingCategory"],
    async () => {
      return await axios.get("http://localhost:8080/giving/category");
    },
    {
      enabled: givingRefresh,
      onSuccess: () => {
        setGivingRefresh(false);
      },
    }
  );

  const givingData = useQuery(
    ["givingData"],
    async () => {
      const option = {
        params: {
          ...searchParams,
        },
      };
      const response = await axios.get(
        "http://localhost:8080/giving/main",
        option
      );
      return response;
    },
    {
      enabled: givingRefresh,
      onSuccess: () => {
        setGivingRefresh(false);
      },
    }
  );

  console.log(givingData);

  const ClickView = (e) => {
    if (e.type !== "click") {
      if (e.keyCode !== 13) {
        return;
      }
    }
    setShowList(!showList);
  };

  const handleCategoryClick = (categoryId) => {
    console.log(categoryId);
    setSearchParams({ ...searchParams, categoryId });
    setGivingRefresh(true);
  };

  const handleSortByAmount = (selectedOrder) => {
    setSelectedOrder(selectedOrder);
    setSearchParams({ ...searchParams, selectedOrder });
    setGivingRefresh(true);
  };

  return (
    <div css={mainContainer}>
      <header css={header}>
        <HeaderMain />
      </header>
      <body>
        <div css={menubarMain}>
          <div css={menubar}>
            <a css={menubarItem} href="/giving">
              진행중 모금함
            </a>
            <a css={menubarItem} href="/giving">
              더블 모금함
            </a>
            <a css={menubarItem} href="/giving">
              모금후기
            </a>
          </div>
        </div>
        <div css={categoryArea}>
          <h2 css={categoryName}>테마 카테고리</h2>
          <ul css={categoryInner}>
            <button css={categoryItem} onClick={() => handleCategoryClick(0)}>
              <img css={categoryImgCss} src={home}></img>전체
            </button>
            {givingCategorys.isLoading ? (
              <div>불러오는 중...</div>
            ) : (
              givingCategorys.data.data.map((category) => (
                <button
                  css={categoryItem}
                  key={category.givingCategoryId}
                  onClick={() => handleCategoryClick(category.givingCategoryId)}
                >
                  <img
                    css={categoryImgCss}
                    src={categoryImg[category.givingCategoryName]}
                    alt={category.givingCategoryName}
                  ></img>
                  {category.givingCategoryName}
                </button>
              ))
            )}
          </ul>
        </div>
        <div role="main" css={fundMainCardContainer}>
          <h4 css={fundBank}>
            모금함 <span css={fundPoint}>922</span>개
          </h4>
          <div css={fundBankBox}>
            <div css={fundBankArea}>
              <button css={fundBankButton} onClick={ClickView}>
                {selectedOrder}
                <IoIosArrowDown css={arrowIcon} />
                {showList && (
                  <ul css={ulListBox} role="listbox" aria-hidden="false">
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                      onClick={() => handleSortByAmount("최신순")}
                    >
                      <span>최신순</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order=""
                      data-sorttype="desc"
                      aria-selected="true"
                      onClick={() => handleSortByAmount("모금액 많은 순서")}
                    >
                      <span>모금액 많은 순서</span>
                    </li>
                    <li
                      role="option"
                      css={liBox}
                      tabindex="0"
                      data-order="giving.amountCollected"
                      data-sorttype="desc"
                      aria-selected="true"
                      onClick={() => handleSortByAmount("모금액 적은 순서")}
                    >
                      <span>모금액 적은 순서</span>
                    </li>
                  </ul>
                )}
              </button>
            </div>
          </div>
          <main css={givingCardList}>
            <div css={cardToday}>
              <a
                href="https://happybean.naver.com/statistics"
                css={cardTodayInner}
              >
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
                    <span css={scrollNumber}>10,827,900</span>원
                  </strong>
                  <span css={scrollNumber}>을</span>
                  <br />
                  <span css={scrollNumber}>기부하였습니다.</span>
                </span>
              </a>
            </div>
            {givingData.isLoading ? (
              <div>불러오는 중...</div>
            ) : (
              givingData.data.data.map((giving) => (
                <div css={givingCard} key={giving.pageId}>
                  <div css={cardImgContainer}>
                    <img
                      css={img}
                      src={giving.imgUrl}
                      alt={giving.imgUrl}
                    ></img>
                  </div>
                  <div css={cardItemContent}>
                    <div css={cardItemTitle}>{giving.pageTitle}</div>
                    <div css={cardItemOrganization}>{giving.centerName}</div>
                    <progress css={cardItemBar} max="200">
                      {giving.achievementRate}
                    </progress>
                    <div css={cardItemPercent}></div>
                    <div css={cardItemMoney}>
                      {new Intl.NumberFormat("en-US").format(giving.goalTotal)}
                      원
                    </div>
                  </div>
                </div>
              ))
            )}
          </main>
        </div>
      </body>
    </div>
  );
};

export default Giving;
