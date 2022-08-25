import React from 'react'

function ProductReport() {
  return (
    <div className="mndtl_detail_info">
        <div className="mndtl_detail_err" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;:&quot;신고하기&quot;}]">
            <i className="mndtl_ic mndtl_ic_warning"></i>
            <p className="mndtl_err_txt">상품정보에<br/>문제가 있나요?</p>
            <a href="#" className="mndtl_btn_err clickable" data-react-tarea-dtl-cd="t00060" target="_parent"><span>신고하기</span></a>
        </div>
    </div>
  )
}

export default ProductReport