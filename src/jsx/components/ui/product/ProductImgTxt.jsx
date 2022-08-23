import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ProductImgTxt({productData}) {

   const [imgDatas, setImgDatas] = useState();
   useEffect(()=>{
      setImgDatas(productData.detailImgList);
   }, []) 

   return (
      <div>
        <div class="mndtl_detail_cont type_1800">
            <div class="mndtl_detail_area ty_detail">
               <div class="mndtl_tmpl_detail">
                  <div class="mndtl_tmpl_html">
                     {
                        imgDatas && imgDatas.map( data => (
                           <img key={productData.id} src={data.imgPath} /> 
                        ))
                     }
                  </div>
               </div>
            </div>

            <div class="mndtl_detail_more" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;:&quot;펼쳐보기&quot;}]">
               <button type="button" class="mndtl_detail_btnmore clickable" data-react-tarea-dtl-cd="t00060" aria-hidden="true" aria-current="false">
                  <span class="sr_off">상세정보 펼쳐보기</span>
                  <span class="sr_on">상세정보 접기</span>
                  <i class="mndtl_ico_arr"></i>
               </button>
            </div>

            {/* <details>
                <summary>상세정보 펼쳐보기 / 상세정보 접기</summary>
            </details> */}
        </div>
        <div className='mndtl_sec_bx'></div>
    </div>
   )
}

export default ProductImgTxt;