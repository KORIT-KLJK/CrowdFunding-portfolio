/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay])

const containerBanner = css`
  position: relative;
  width: 100%;
  height: 347px;
  border-top: 1px solid #e1e1e1;
`;

const bannerColor = css`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #DC6089;
`;

const mainBanner = css`
  display: block;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  z-index: 10;
  width: 1140px;
  height: 240px;
  background-repeat: no-repeat;
  background-size: auto 292px;
  background-position: 50%;
`;

const slide = css`
  position: relative;
  display: flex;    // 안의 요소를 결정 
  justify-content: center;
  align-items: center;
  height: 300px;  // div자체가 아무런 크기를 주지않았을 경우 화면의 100%를 먹음.

  background-color: none;
  color: black;
  font-size: 65px;
  text-align: center;
`;

const slideImg = css`
  width: 1140px;
  height: 301px;
`;

const swiperParam = {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false }
};

const FundingSlide = () => {
  
  return(
    <div css={containerBanner}>
      <div css={bannerColor}>
        <div css={mainBanner} className='bannder'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            {...swiperParam}
          > 
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20210624_44/1624513957776G6eYv_PNG/PC__%25EB%25B0%25B0%25EB_2280x500_2%25EB%25B0%25B0%25EC_41c982.png" /></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230526_192/1685081906679qyfX5_PNG/PC%25A9%25E1_2280x500_699cee.png" /></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230427_284/1682571253198ohhV9_PNG/PC_2280x500_e7b6a6.png" /></div></SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  )
};

export default FundingSlide;
