import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import '../fiveswiper.css';

export const Section5Mobile = () => {

  return (
    <section className="fivemobile" >
        <h1 className="headline five-title-mobile">Our Team</h1>
        <Swiper
            modules={[ Scrollbar, EffectCards, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true, dragSize: 125, dragClass: "swiper-box-scrollbar-drag", horizontalClass: "swiper-box-scrollbar-horizontal" }}
            className='swiper-box'
        >
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-1"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-2"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-3"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-4"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-5"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-6"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="fivemobile-box fivemobile-box-image-7"></div>
            </SwiperSlide>
        </Swiper>
    </section>
  );
};