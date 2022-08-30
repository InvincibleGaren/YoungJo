import React, { useEffect, useState } from 'react';
// import hbdatas from '../../datas/HotBrandDatas'
import axios from 'axios';
import Server from "../../datas/Server.js";


function HotBrand() {

    const [hbData, setHBData] = useState([])
    // const url=''

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/mainPage/hotBrand`)
        .then(Reponse => {
            setHBData(Reponse.data)
        })       
    },[])

    return ( 
        <div className='HB_container'>
            <ul className='HB'>
               {
                    hbData && hbData.map(hb =>(
                        <li key = {hb.id}>
                            <div className = "clickable">
                                <img src = {hb.imgUrl} alt = "img"/>
                                <p>{hb.title}</p>
                            </div>
                        </li>
                    ))

               }
            </ul>
        </div>
     );
}

export default HotBrand;