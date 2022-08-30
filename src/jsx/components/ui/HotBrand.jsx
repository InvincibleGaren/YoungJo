import React, { useEffect, useState } from 'react';
import hbdatas from '../../../datas/HotBrandDatas';
import axios from "axios";
import TitleUi from "./MainTitleUi";
import Server from "../../../datas/Server.js";


import "../../../css/components/HotBrand.css";

function HotBrand() {

    const [hbData, setHBData] = useState([]);
    const url = `${Server.baseUrl}api/slide/img`;

    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setHBData(Response.data)
        })
        .catch(error => {
            setHBData(hbdatas)
          })
    },[]);

    return ( 
        <div className='HB_container'>
            <TitleUi title="Hot Brand"/>
            <ul className='HB'>
               {
                    hbData && hbData.map(hb =>(
                        <li key = {hb.id}>
                            <div className = "clickable">
                                <img src = {hb.imgUrl} alt = "img"/>
                                <p>{hb.name}</p>
                            </div>
                        </li>
                    ))

               }
            </ul>
        </div>
     );
}

export default HotBrand;