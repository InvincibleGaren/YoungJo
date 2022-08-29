import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Server from "../../../datas/Server.json"

import TempResponse from '../../../datas/Category.json'
import "../../../css/components/Category.css"

function Category() {
    const [CategoryData, setCategoryData] = useState([])
    const url = `${Server.baseUrl}api/category/img`
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