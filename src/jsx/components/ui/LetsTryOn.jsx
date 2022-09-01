import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempResponse from "../../../datas/HappyLoungeData.json"

import "../../../css/components/HappyLounge.css"
import TitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';
import LetsTryOnItemSlider from '../widgets/LetsTryOnItemSlider';
import Server from "../../../datas/Server.js";


function LetsTryOn() {

    const [happyLoungeItem, setHappyLoungeItem] = useState([])
    const countQuery = "qty=5";
    
    useEffect(() => {
        // const url = `${Server.baseUrl}api/happyLoungeItem?`+countQuery
        // axios.get(url, {timeout:1000}).then(Response => {
        //     setHappyLoungeItem(Response.data)
        // })
        // .catch(error => {
        //     setHappyLoungeItem(TempResponse)    
        // })
        setHappyLoungeItem(TempResponse)
    },[])



    return ( 
        <div className='HappyLounge'>
            <TitleUi title="Let's Try on" />
            <div className="HappyLoungeSubTitle">
                <SubTitleUi title="직접 만져보고 입는 것처럼 생동감있는 쇼핑"/>
            </div>
            <LetsTryOnItemSlider />
        </div>
     );
}

export default LetsTryOn;