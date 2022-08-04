import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../../../css/components/HappyLoungeItem.css"

function HappyLoungeItem() {

    const [HappyLoungeItem, setHappyLoungeItem] = useState([])
    const url = "http://10.10.10.127:9000/api/HappyLoungeItem/img"
    useEffect(() => {
        axios.get(url,{}).then(Response => {
            console.log(Response);
            setHappyLoungeItem(Response.data)
            
        })
    },[])
    
    return ( 
        <div className='HappyLoungeItem'>
            <div className='HappyLoungeItemLeft'>
                {
                    HappyLoungeItem && HappyLoungeItem.map((item)=>(             
                            item.id == 1 ?  
                                <Link to="/" key={item.id}><img src={item.url} /></Link>
                            :
                            ""
                    ))
                }
            </div>
            <div className='HappyLoungeItemRight'>
                {
                    HappyLoungeItem && HappyLoungeItem.map((item)=>(             
                            item.id > 1 ?  
                                <Link to="/" key={item.id}><img src={item.url} /></Link>
                            :
                            ""
                    ))
                } 
                <Link to="/">
                    <div className='plus'>+</div>    
                </Link>              
            </div>
        </div>
     );
}

export default HappyLoungeItem;