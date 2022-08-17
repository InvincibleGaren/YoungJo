// UnderNewService.jsx는 App.js에서 import하고 return값에 넣어서 호출
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import unsdatas from '../../datas/UNSDatas'



function UnderNewService() {

    const [unsData, setUNSData] = useState([])
    

    useEffect(()=> {
        setUNSData(unsdatas)
    },[])
    


    return ( 
        <div>
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