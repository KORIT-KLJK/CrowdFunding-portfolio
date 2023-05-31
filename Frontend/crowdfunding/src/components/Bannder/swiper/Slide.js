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
  background-color: #10c838;

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

const slide = css`
  position: relative;
  display: flex;    // 안의 요소를 결정 
  justify-content: center;
  align-items: center;
  height: 300px;  // div자체가 아무런 크기를 주지않았을 경우 화면의 100%를 먹음.

  background-color: #f1f1f1;
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
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230519_235/1684466659301ob4Ix_PNG/%25B4%25ED%25BC%25EB_pc_2280x584_e2ffff.png"></img></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230526_61/1685064020114JYGS0_PNG/%25B4%25ED%25BC%25EB_pc_2280x584_41c98c.png"></img></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230510_59/1683681529975fVYnl_PNG/%25B4%25ED%25BC%25EB_PC_2280x584__fcf4e8%252C_f0b154.png"></img></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230530_140/1685415017749jnl07_JPEG/0530_%25EA%25B5%25D7%25D9%25EB%25B0%25A9%25EA%25B3%25B5_%25B4%25ED%25BC%25EB_PC_2280x584_e8e4fb.jpg"></img></div></SwiperSlide>
            <SwiperSlide><div css={slide}><img css={slideImg} src="https://happybean-phinf.pstatic.net/20230530_293/1685431286033oMwAx_PNG/%25B4%25ED%25BC%25EB_PC_2280x584.png"></img></div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
};

export default Slide;
