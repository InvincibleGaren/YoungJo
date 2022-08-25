import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempResponse from "../../../datas/HappyLoungeData.json"

import { Link } from 'react-router-dom';
import HappyLoungeItem from "./HappyLoungeItem"

import "../../../css/components/HappyLounge.css"
import TitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';
import LetsTryOnItemSlider from '../widgets/LetsTryOnItemSlider';

function LetsTryOn() {

    const [happyLoungeItem, setHappyLoungeItem] = useState([])
    const countQuery = "qty=5";
    const url = "http://10.10.10.127:9000/api/happyLoungeItem?"+countQuery
    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setHappyLoungeItem(Response.data)
        })
        .catch(error => {
            setHappyLoungeItem(TempResponse)
        })
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