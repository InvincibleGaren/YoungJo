import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShinsegaeTimeDealItem from "../ui/NewServiceItem"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import TempResponse from "../../../datas/LetsTryOnItemSlider.json"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import '../../../css/components/LetsTryOnItemSlider.css';

import MainTitleUi from '../ui/MainTitleUi';
import SubTitleUi from '../ui/SubTitleUi';


function LetsTryOnItemSlider() {

    const [slideData, setSlideData] = useState([])
    const url = "http://10.10.10.127:9000/api/slide/img"
    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setSlideData(Response.data)
        })
        .catch(error => {
            setSlideData(TempResponse)
          })
    },[])

    return ( 
        <Swiper className='LetsTryOnItemSlider'
            modules={[Autoplay, Scrollbar]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            width={970}
        >
            {
                slideData && slideData.map(item=>(
                    <SwiperSlide key={item.id}>
                        <div className='Top'>
                            <div className='Left'>
                                <Link to="/">
                                    <img src={item.url} />
                                </Link>
                            </div>
                            <div className='Right'>
                                <Link to="/">
                                    <img src={item.url2} />
                                </Link>
                                <Link to="/">
                                    <img src={item.url3} />
                                </Link>  
                                <Link to="/">
                                    <img src={item.url4} />
                                </Link>  
                            </div>             
                        </div>
                        <Link to="/">
                            <MainTitleUi title={item.text1} />
                            <SubTitleUi title={item.text2} />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default LetsTryOnItemSlider;