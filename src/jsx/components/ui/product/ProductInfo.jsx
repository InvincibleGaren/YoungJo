import React from 'react'
import SmileClubBanner from '../../SmileClubBanner'
import ProductInfoReview from './ProductInfoReview'

function ProductInfo({productData}) {
  return (
    <div className="mndtl_sec mndtl_prd_wrap" data-react-tarea-cd="00006_000000005">
      <div>
        <div className="mndtl_mall">
            <div className="mndtl_mall_badge">
                <span className="cm_mall_text">
                    <i className="sm">{productData.salesSite}</i>
                </span>
            </div>
            <button type="button" className="mndtl_btn_share modal-layer-open">
                <i className="mndtl_ic mndtl_ic_share clickable"></i>
                <span className="blind">공유</span>
            </button>
        </div>
        
        <div className="mndtl_prd_info">
            <h2 className="mndtl_prd_title">
                <a href="#" className="mndtl_prdtit_brand clickable"target="_parent">{productData.brand}</a>
                <span className="mndtl_prdtit_name">{productData.title}</span>
            </h2>
            <div className="mndtl_prd_price">
              <div className="mndtl_prd_newpr">
                  <div className="new_price">
                      <em className="ssg_price">{productData.minPrice}</em>
                      <span className="ssg_tx">원</span>
                      <span className={ productData.isSamePrice ? "isSamePrice":"cm_tx_opt"}>~</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <SmileClubBanner />
      <ProductInfoReview />
    </div>
  )
}

export default ProductInfo