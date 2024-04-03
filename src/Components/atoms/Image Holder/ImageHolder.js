import React from 'react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./imgHolder.css"
import "swiper/swiper-bundle.css";
import PlatinumTag from '../Platinum Tag/PlatinumTag';
const ImageHolder = ({images }) => {
  return (
    <div className='w-[322px] h-[186px] relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img src={`images/${el}`} alt={el}  className='h-full w-full rounded-xl'/>
          </SwiperSlide>
        ))}
      </Swiper>
      <PlatinumTag/>
    </div>
  );
}

export default ImageHolder
