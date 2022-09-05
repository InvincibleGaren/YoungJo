import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Server from '../../datas/Server.js';

import MypageTop from '../components/MypageTop'
import FooterNav from '../components/ui/FooterNav'
import Footer from '../layouts/Footer'

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
            {myPageData && <MypageTop mypagedata = {myPageData}/>}
            <Footer/>
            <FooterNav/>
        </div>
    )
}

export default MyPage