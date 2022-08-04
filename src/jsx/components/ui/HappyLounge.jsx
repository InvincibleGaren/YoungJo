import React from 'react';

import { Link } from 'react-router-dom';
import HappyLoungeItem from "../../components/ui/HappyLoungeItem"
import Img1 from '../../../img/slider1.jfif'
import Img2 from '../../../img/slider2.jfif'
import Img3 from '../../../img/slider3.jfif'
import Img4 from '../../../img/slider4.jfif'

import "../../../css/components/HappyLounge.css"

function HappyLounge() {
    return ( 
        <div className='HappyLounge'>
            <h3>Happy Lounge</h3>
            <div>
                <span>당신의 쇼핑이 특별해지는, 매일 오전 9시</span>
                <Link to="/">전체보기&gt;</Link>
            </div>
            <div>
                <HappyLoungeItem />
            </div>
        </div>
     );
}

export default HappyLounge;