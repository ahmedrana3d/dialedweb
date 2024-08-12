import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectFade, EffectCoverflow, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax';
import '../fiveswiper.css';
import { useAnimateText } from '../ScrollAnimations';

export const Section5Mobile = () => {

    useAnimateText(".five-title-mobile")

  return (
    <section className="section fivemobile" >
        <h1 className="headline five-title-mobile">Our Team</h1>
        <Swiper
            modules={[ Scrollbar, EffectCards, EffectFade, EffectCoverflow, Parallax ]}
            spaceBetween={50}
            slidesPerView={1}
            effect='cards'
            // parallax={ true }
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