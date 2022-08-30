import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import TempResponse from "../../../datas/HeaderSlideData.json"
import Server from "../../../datas/Server.js";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../../../css/components/HeaderSlider.css';


function HeaderSlider() {

    const [slideData, setSlideData] = useState([])
    const url = `${Server.baseUrl}api/slide/img`
    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setSlideData(Response.data)
        })
        .catch(error => {
            setSlideData(TempResponse)
          })
    },[])

    return ( 
        <Swiper className='HeaderSlider'
            modules={[Autoplay]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
        >
            {
                slideData && slideData.map(item=>(
                    <SwiperSlide key={item.id}> 
                        <Link to="/">
                            <img src={item.url} />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default HeaderSlider;