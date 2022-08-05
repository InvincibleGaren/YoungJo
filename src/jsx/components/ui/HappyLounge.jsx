import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import HappyLoungeItem from "../../components/ui/HappyLoungeItem"
import Img1 from '../../../img/slider1.jfif'
import Img2 from '../../../img/slider2.jfif'
import Img3 from '../../../img/slider3.jfif'
import Img4 from '../../../img/slider4.jfif'

import "../../../css/components/HappyLounge.css"
import TitleUi from './TitleUi';

function HappyLounge() {

    const [happyLoungeItem, setHappyLoungeItem] = useState([])
    const countQuery = "qty=5";
    const url = "http://10.10.10.127:9000/api/happyLoungeItem?"+countQuery
    useEffect(() => {
        axios.get(url).then(Response => {
            console.log(Response);
            setHappyLoungeItem(Response.data)
        })
    },[])


    return ( 
        <div className='HappyLounge'>
            <TitleUi 
                title="Happy Lounge"
                spanTxt="당신의 쇼핑이 특별해지는, 매일 오전 9시"
                url="/"
            />
            <div className='HappyLoungeItemList'>
                {
                    happyLoungeItem && happyLoungeItem.map((item)=>( 

                        <HappyLoungeItem product={item}/>
                    ))
                }
            </div>
        </div>
     );
}

export default HappyLounge;