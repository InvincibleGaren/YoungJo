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

    const [slideData, setSlideData] = useState([])
    const url = "http://10.10.10.127:9000/api/slide/img"
    useEffect(() => {
        axios.get(url).then(Response => {
            setSlideData(Response.data)
        })
    },[])

    // const [slideData, setSlideData] = useState([])
    // const url = "http://10.10.10.127:9000/api/ctg/main-detail"
    // useEffect(() => {
    //     axios.get(url).then(Response => {
    //         console.log(Response);
    //         setSlideData(Response.data)
    //     })
    // },[])

    return ( 
        <Swiper
            modules={[Autoplay]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                slideData && slideData.map(item=>(
                    <SwiperSlide key={item.id}><img src={item.url} /></SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default Slider;