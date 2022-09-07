import axios from 'axios';
import React, { useEffect, useState } from 'react';
import unsdatas from '../../../datas/UNSDatas'


import '../../../css/components/UnderNewService.css'

function UnderNewService() {

    const [unsData, setUNSData] = useState([])

    useEffect(()=> {
        setUNSData(unsdatas)
    },[])


    return ( 
        <div className='UNSContainer'>
            <ul className='UNS'>
               {
                    unsData && unsData.map(uns =>(
                        <li key = {uns.id}>
                            <div className = "clickable">
                                <img src = {uns.imgUrl} alt = "img"/>
                                <p>{uns.name}</p>
                            </div>
                        </li>
                    ))

               }
            </ul>
        </div>

        
     );
}

export default UnderNewService; 