import axios from 'axios';
import React, { useEffect, useState } from 'react';
import unsdatas from '../../../datas/UNSDatas'

import '../../../css/components/UnderNewService.css'
import { Link } from 'react-router-dom';

function UnderNewService() {

    const [unsData, setUNSData] = useState([])

    useEffect(()=> {
        setUNSData(unsdatas)
    },[])


    return ( 
        // <div className='UNSContainer'>
        //     <ul className='UNS'>
        //        {
        //             unsData && unsData.map(uns =>(
        //                 <li key = {uns.id}>
        //                     <div className = "clickable">
        //                         <img src = {uns.imgUrl} alt = "img"/>
        //                         <p>{uns.name}</p>
        //                     </div>
        //                 </li>
        //             ))

        //        }
        //     </ul>
        // </div>

        <div className="cmgrid_full_box" data-page-set-id="115" data-react-tarea-cd="100000000149_115_288" data-observable-unit="true">
            <div className="cmitem_quick_unit ty_horizontal ">
                <div className="cmitem_quick_cont">
                    <ul className="cmitem_quick_lst ty_view5 is_moreset">
                        {
                            unsData && unsData.map((data)=>(
                                <li key={data.id}>
                                    <Link to={"#"}>
                                        <img src={data.imgUrl} alt={data.name} width="100%"/>
                                        <span className="cmitem_quick_tx">{data.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

        
     );
}

export default UnderNewService; 