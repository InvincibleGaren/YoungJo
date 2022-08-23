import React from 'react'

function ProductDelivery({productData}) {
  return (
    <div className="mndtl_info_delivery">
        <dl className="mndtl_info_dl">
            <dt>배송정보</dt>
            <dd>
                <em className="mndtl_info_tit">택배배송 </em>
                <span class="mndtl_info_parcel"> {productData.courierCompany}
                    <a href="#" class="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivcmpny" target="">
                        <span class="blind">택배사 정보 안내 팝업</span>
                    </a>
                </span>
                <span className="mndtl_info_desc">
                    <span>
                        제주<em className="ssg_price"> {productData.shippingFeeJeju}</em><span className="ssg_tx">원</span>
                    </span>
                    <span>
                        , 도서산간<em className="ssg_price"> {productData.shippingFeeIsland}</em><span className="ssg_tx">원</span>
                    </span>
                    &nbsp;추가
                    <a href="#" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivfee" target="">
                        <span className="blind">제주/도서산간 배송비 안내 팝업</span>
                    </a>
                </span>
            </dd>
        </dl>
    </div>
  )
}

export default ProductDelivery