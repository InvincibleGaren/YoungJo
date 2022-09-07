import React, { useEffect, useState } from 'react';
import hbdatas from '../../../datas/HotBrandDatas';
import axios from "axios";
import TitleUi from "./MainTitleUi";
import Server from "../../../datas/Server.js";


import "../../../css/components/HotBrand.css";
import MainTitleUi from './MainTitleUi';

function HotBrand() {

    const [hbData, setHBData] = useState([]);
    const url = `${Server.baseUrl}api/slide/img`;

    useEffect(() => {
        setHBData(hbdatas)
    },[]);

    return ( 
        // <div className='HB_container'>
        //     <TitleUi title="Hot Brand"/>
        //     <ul className='HB'>
        //        {
        //             hbData && hbData.map(hb =>(
        //                 <li key = {hb.id}>
        //                     <div className = "clickable">
        //                         <img src = {hb.imgUrl} alt = "img"/>
        //                         <p>{hb.name}</p>
        //                     </div>
        //                 </li>
        //             ))

        //        }
        //     </ul>
        // </div>
        
        <>
        <MainTitleUi 
            title = "Hot Brand"
        />

        <div className="cmgrid_full_box" data-page-set-id="120" data-react-tarea-cd="100000000149_120_298" data-observable-unit="true">
            <div className="cmitem_quick_unit ty_horizontal ">
                <div className="cmitem_quick_cont">
                    <ul className="cmitem_quick_lst ty_view4">
                        {
                            hbData && hbData.map((data)=>(
                                <li key={data.id}>
                                    <a href="https://m-shinsegaemall.ssg.com/special/chanel/main.ssg" className="clickable">
                                        <img src={data.imgUrl} alt={data.name} width="100%" />
                                        <span className="cmitem_quick_tx">{data.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}

export default HotBrand;