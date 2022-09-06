import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Server from '../../datas/Server.js';
import MypageTop from '../components/ui/myPage/MypageTop.jsx';

import FooterNav from '../components/ui/FooterNav'
import Footer from '../layouts/Footer'
import OrderShippingTracking from '../components/ui/myPage/OrderShippingTracking.jsx';
import MyPageMenu from '../components/ui/myPage/MyPageMenu.jsx';
import MyPageReview from '../components/ui/myPage/MyPageReview.jsx';
import MyPageBanner from '../components/ui/myPage/MyPageBanner.jsx';
import MyPageBottomMenu from '../components/ui/myPage/MyPageBottomMenu.jsx';
import MyPageHeader from '../components/ui/myPage/MyPageHeader';

function MyPage() {

    const access_token = sessionStorage.getItem("login");
    const [myPageData, setMyPageData] =  useState();

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/my/myPage`, {
            headers: {
                'Authentication': access_token
            }
        })
        .then(Response => {
            console.log("myPage 데이터:",Response.data.data)
            setMyPageData(Response.data.data)
        })
    },[])

    console.log(access_token)

    return (
        <div>
            <MyPageHeader/>
            {myPageData && <MypageTop mypagedata = {myPageData}/>}
            <OrderShippingTracking/>
            <MyPageMenu/>
            <MyPageReview/>
            <MyPageBanner/>
            <MyPageBottomMenu/>
            <Footer/>
            <FooterNav/>
        </div>
    )
}

export default MyPage