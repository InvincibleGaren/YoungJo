import React from 'react'

function ProductPrice({productData}) {
  return (
    <div className="mndtl_prd_price">
        {/* <div className="mndtl_prd_newpr">
            <div className="new_price">
                <span className="blind">판매가격</span>
                <em className="ssg_price">329,000</em><span className="ssg_tx">원<span className="cm_tx_opt"></span></span>
            </div>
        </div>

        <div className="mndtl_prd_oldpr">
            <div className="old_price">
                <del><span className="blind">정상가격</span><em className="ssg_price">15,900</em><span className="ssg_tx">원</span></del>
            </div>
            <div className="mndtl_tx_sale mndtl_coupon">쿠폰포함</div>
        </div> */}

        <div className="mndtl_prd_newpr">
            {/* <div className="mndtl_prd_per">
                <span className="blind">할인율</span>
                <span>25%</span>
            </div> */}
            <div className="new_price">
                {/* <span className="blind">판매가격</span> */}
                <em className="ssg_price">{productData.minPrice}</em>
                <span className="ssg_tx">원</span>
                <span className={ productData.isSamePrice ? "isSamePrice":"cm_tx_opt"}>~</span>
            </div>
            {/* <a href="#" className="mndtl_ic mndtl_ic_qmark_new24 modal-layer-open clickable" target="">
                <span className="blind">가격 자세히보기</span>
            </a> */}
        </div>
    </div>
  )
}

export default ProductPrice