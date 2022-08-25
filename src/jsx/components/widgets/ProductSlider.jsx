import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../../../css/components/HeaderSlider.css';

function ProductSlider({thumbImgList}) {

    console.log(thumbImgList)

    return (
        <Swiper className='HeaderSlider'
            spaceBetween = {0}
            slidesPerView = {1}
        >
        {
            thumbImgList && thumbImgList.map((item) => (
                <SwiperSlide key={item.id}> 
                    <img src={item.imgPath} alt={item.imgAlt}/>
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
}

export default ProductSlider;