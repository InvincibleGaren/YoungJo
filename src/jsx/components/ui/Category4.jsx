import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Img1 from '../../../img/slider1.jfif'
import Img2 from '../../../img/slider2.jfif'
import Img3 from '../../../img/slider3.jfif'
import Img4 from '../../../img/slider4.jfif'

import TempResponse from '../../../datas/Category.json'
import "../../../css/components/Category.css"

function Category() {
    const [CategoryData, setCategoryData] = useState([])
    const url = "http://10.10.10.127:9000/api/category/img"
    useEffect(() => {
        axios.get(url,{}).then(Response => {
            setCategoryData(Response.data)
        })
        .catch(error => {
            setCategoryData(TempResponse)
          })
    },[])
    
    return ( 
        <div className='Category'>
            {
                CategoryData && CategoryData.map(item=>(
                    <Link to="/" key={item.id}><img src={item.url} /></Link>
                ))
            }
        </div>
     );
}

export default Category;