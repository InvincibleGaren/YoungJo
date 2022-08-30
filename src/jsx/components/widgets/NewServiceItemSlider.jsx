import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShinsegaeTimeDealItem from "../ui/NewServiceItem"
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import TempResponse from "../../../datas/ShinsegaeTimeDealSlideData.json"




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import '../../../css/components/NewServiceItemSlider.css';

import MainTitleUi from '../ui/MainTitleUi';
import SubTitleUi from '../ui/SubTitleUi';
import Server from "../../../datas/Server.js";


function NewServiceItemSlider() {

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
        <Swiper
            modules={[Autoplay, Scrollbar]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            scrollbar={{ draggable: false }}
        >
            
            {
                slideData && slideData.map(item=>(
                    <SwiperSlide key={item.id}>
                        <Link to="/" className='SliderItem'>
                            <img src={item.url} />
                            <MainTitleUi title={item.text1} />
                            <SubTitleUi title={item.text2} />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default NewServiceItemSlider;