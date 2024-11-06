import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SliderImage1 from '../assets/bk3niit.jpg'
import SliderImage2 from '../assets/bk2niit.jpg'

const Slider = () => {
  const images = [
    SliderImage1,
    SliderImage2,
    
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:2500}}
      modules={[Navigation, Pagination,Autoplay]}
      className='Slider'
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
         <div className='homeImageContainer'>
         <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="homeImage"
          />
         </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
