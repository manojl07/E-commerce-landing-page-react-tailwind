import React from 'react'
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Carousel.css";


const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/offer/LOFT-HOMEPAGE-BANNER-WEB.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other-2/STACK-Samsung-carousals-banner-desktop.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/watchband_banner_desktop.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other-2/STACK-apple-carousals-banner-desktop.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/LOOP_hero_banner_desktop.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/PUFT_collection_hero_banner_desktop.jpg?tr=cm-pad_crop,v-3,w-1920" alt="" /></SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
    </>
  )
}

export default Carousel