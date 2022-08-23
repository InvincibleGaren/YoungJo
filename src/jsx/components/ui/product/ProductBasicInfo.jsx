import React from 'react'
import ProductPrice from './ProductPrice'

function ProductBasicInfo({productData}) {
  return (
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
            <ProductPrice productData = {productData} />
        </div>
    </div>
  )
}

export default ProductBasicInfo