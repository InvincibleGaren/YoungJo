import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../../../css/components/HeaderSlider.css';

function ProductSlider({productData}) {

    const [slideData, setSlideData] = useState([]);
    useEffect(() => {
        setSlideData(productData.thumbImgList);
    },[])

    return (
        <Swiper className='HeaderSlider'
            spaceBetween = {0}
            slidesPerView = {1}
        >
        {
            slideData && slideData.map(item => (
                <SwiperSlide key={productData.id}> 
                    {/* <Link to="/"> */}
                        <img src={item.imgPath} />
                    {/* </Link> */}
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
}

export default ProductSlider;