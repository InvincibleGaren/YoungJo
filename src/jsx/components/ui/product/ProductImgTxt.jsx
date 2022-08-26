import React from 'react'
import { useState } from 'react';

function ProductImgTxt({detailImgList}) {

   const [isFold, setIsFold] = useState(false);
   const handleFold = () => {
      setIsFold(!isFold)
      console.log(isFold)
   }

   return (
      <div>
         <div className="mndtl_detail_cont type_1800">
               <div className="mndtl_detail_area ty_detail">
                  {/* <div className="mndtl_tmpl_detail"> */}
                  <div className={ isFold ? "mndtl_tmpl_detail" : "mndtl_tmpl_detail_auto"}>
                     <div className="mndtl_tmpl_html">
                        {
                           detailImgList && detailImgList.map((data) => (
                              <img key={data.id} src={data.imgPath} alt={data.imgAlt} /> 
                           ))
                        }
                     </div>
                  </div>
               </div>
         </div>
         <div>
            <button onClick={()=>handleFold()}>상세정보 펼쳐보기 &#9660;</button>
            <button>상세정보 접기 &#9650;</button>
         </div>
         <div className='mndtl_sec_bx'></div>
    </div>
   )
}

export default ProductImgTxt;