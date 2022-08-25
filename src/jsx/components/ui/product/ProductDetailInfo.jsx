import React from 'react'
import ProductImgTxt from './ProductImgTxt';
import ProductModel from './ProductModel';
import ProductReport from './ProductReport';

function ProductDetail({productData}) {
   return (
      <div>
         <div>
            <div className='mndtl_sec_bx'></div>
                  <div className="mndtl_sec_caution_text mndtl_tx_point">
                     <h3 className="mndtl_caution_tit">직거래 유도 주의 안내</h3>
                     <div className="mndtl_caution_desc"> 
                     판매자가 쓱톡/문자 등을 이용하여 <br/> 
                     현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고<br/> 
                     SSG.COM 고객센터로 신고 해 주시기 바랍니다. 
                     </div>
            </div>
         </div>
         <ProductModel />
         <ProductReport />
         <ProductImgTxt detailImgList = {productData.detailImgList} />
      </div>
   );
}

export default ProductDetail;