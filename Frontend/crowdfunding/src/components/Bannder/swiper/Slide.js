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
  background-color: yellowgreen;

`;

const mainBanner = css`
  display: block;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  z-index: 10;
  width: 1140px;
  height: 240px;
  background-repeat: no-repeat;
  background-size: auto 292px;
  background-position: 50%;
`;

const slideA = css`
  position: relative;
  display: flex;    // 안의 요소를 결정 
  justify-content: center;
  align-items: center;
  height: 300px;  // div자체가 아무런 크기를 주지않았을 경우 화면의 100%를 먹음.

  background-color: red;
  color: black;
  font-size: 65px;
  text-align: center;
`;

const slideB = css`
  position: relative;
  display: flex;    
  justify-content: center;
  align-items: center;
  height: 300px;  

  background-color: orange;
  color: black;
  font-size: 65px;
  text-align: center;
`;
const slideC = css`
  position: relative;
  display: flex;    
  justify-content: center;
  align-items: center;
  height: 300px;  

  background-color: yellow;
  color: black;
  font-size: 65px;
  text-align: center;
`;
const slideD = css`
  position: relative;
  display: flex;    
  justify-content: center;
  align-items: center;
  height: 300px;  

  background-color: green;
  color: black;
  font-size: 65px;
  text-align: center;
`;

const swiperParam = {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false }
};

const Slide = () => {
  
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
            <SwiperSlide><div css={slideA}>Slide 1</div></SwiperSlide>
            <SwiperSlide><div css={slideB}>Slide 2</div></SwiperSlide>
            <SwiperSlide><div css={slideC}>Slide 3</div></SwiperSlide>
            <SwiperSlide><div css={slideD}>Slide 4</div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
};

export default Slide;
