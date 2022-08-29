import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempResponse from "../../../datas/HappyLoungeData.json"

import { Link } from 'react-router-dom';
import HappyLoungeItem from "../../components/ui/HappyLoungeItem"

import "../../../css/components/HappyLounge.css"
import TitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';

function HappyLounge() {

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
            <TitleUi title="Happy Lounge" />
            <div className="HappyLoungeSubTitle">
                <SubTitleUi title="당신의 쇼핑이 특별해지는, 매일 오전 9시"/>
                <Link to={'/'}>전체보기&gt;</Link>
            </div>
            <div className='HappyLoungeItemList'>
                {
                    happyLoungeItem && happyLoungeItem.map((item)=>( 

                        <HappyLoungeItem product={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
     );
}

export default HappyLounge;