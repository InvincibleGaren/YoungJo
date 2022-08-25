import React from 'react'

function ProductImgTxt({detailImgList}) {

   return (
      <div>
        <div className="mndtl_detail_cont type_1800">
            <div className="mndtl_detail_area ty_detail">
               <div className="mndtl_tmpl_detail">
                  <div className="mndtl_tmpl_html">
                     {
                        detailImgList && detailImgList.map( (data, idx) => (
                           <img src={data.imgPath} alt='상품 상세 이미지' key={idx}/> 
                        ))
                     }
                  </div>
               </div>
            </div>
        </div>
        <div className='mndtl_sec_bx'></div>
    </div>
   )
}

export default ProductImgTxt;