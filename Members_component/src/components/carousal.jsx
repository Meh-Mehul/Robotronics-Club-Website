import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Coordinator from './Coordinator'; // Assuming you have this component
import '../assets/carousal.css'

const Projectstrying = () => {
  return (
    
    <div className="container">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator />
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
};

export default Projectstrying;

