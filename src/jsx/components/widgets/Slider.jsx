import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


import SliderImg1 from '../../../img/slider1.jfif';
import SliderImg2 from '../../../img/slider2.jfif';
import SliderImg3 from '../../../img/slider3.jfif';
import SliderImg4 from '../../../img/slider4.jfif';
import SliderImg5 from '../../../img/slider5.jfif';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../../../css/components/Slider.css';

function Slider() {
    return ( 
        <Swiper
            modules={[Autoplay]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><Link to="/"><img src={SliderImg1} /></Link></SwiperSlide>
            <SwiperSlide><img src={SliderImg2} /></SwiperSlide>
            <SwiperSlide><img src={SliderImg3} /></SwiperSlide>
            <SwiperSlide><img src={SliderImg4} /></SwiperSlide>
            <SwiperSlide><img src={SliderImg5} /></SwiperSlide>
        </Swiper>
     );
}

export default Slider;