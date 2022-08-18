import React from 'react'
import { useState, useEffect } from 'react';
import productExtraInfoDatas from '../../../datas/ProductExtraInfoDatas.json';

function ProductExtraInfo() {

   const [extraData, setExtraData] = useState();
   useEffect(()=>{
      setExtraData(productExtraInfoDatas);
   }, [])

    return (
        <div className="mndtl_sec_bx">
            <div className="mndtl_etc">
               <div className="mndtl_etc_cont">
                  <ul className="mndtl_etc_lst">
                     {
                        extraData && extraData.map(extra => (
                           <li key={extra.id}>
                              <a href="#" target="_parent">
                                 <span><em>{extra.text}</em></span>
                                 <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                              </a>
                           </li>
                        ))
                     }
                  </ul>
               </div>
            </div>
        </div>
    );
}

export default ProductExtraInfo;