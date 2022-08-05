import React, { useEffect, useState } from 'react';
import hbdatas from '../../datas/HotBrandDatas'

import "../../css/components/HotBrand.css"

function HotBrand() {

    const [hbData, setHBData] = useState([])
    // const url=''

    useEffect(()=> {
        // axios.get(url).then(hbdatas);
        // console.log(hbdatas)
        setHBData(hbdatas)
    },[])

    return ( 
        <div className='HB_container'>
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