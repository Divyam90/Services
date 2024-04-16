import React from 'react'
import './carousal.css'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sliderData from '../../data';

const Slider = () => {
  return (
      <div className="headings">
          <div className="textss">
          <h2>Featured Services Offered</h2>
          <p>We offer best services by providing professional services</p>
          </div>
    <div className="s-container">
         <Swiper className="myswiper"
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        loopFillGroupWithBlank={true}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      modules={[Navigation]}
    >
        {sliderData.map((item)=>(
      <SwiperSlide className="swiperslide"><img className="image-slider" src={item.image} alt="" />{item.title}</SwiperSlide>

        ))}

        

    </Swiper>
    </div>
    </div>
  )
}

export default Slider