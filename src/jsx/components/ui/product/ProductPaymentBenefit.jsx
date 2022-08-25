import React from 'react'
import ProductCard from './ProductCard'

function ProductPaymentBenefit() {
  return (
    <div>
        <ProductCard />
        
        <div className="mndtl_info_installment">
          <dl className="mndtl_info_dl">
              <dt>무이자 할부</dt>
              <dd><a href="#" className="mndtl_txt_btn" target="_parent">카드사별 무이자 혜택</a></dd>
          </dl>
        </div>
        
        <div className="mndtl_info_benefit" data-react-tarea-cd="00006_000000004">
          <dl className="mndtl_info_dl mndtl_toggle">
              <dt>SSG<br/>MONEY</dt>
              <dd data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;SSG MONEY&quot;}]">
                  <em className="mndtl_info_tit">3% 적립 또는 3% 즉시할인</em>
                      <span className="mndtl_info_desc">2022.08.01 ~ 2022.09.30</span>
              </dd>
          </dl>
        </div>
    </div>
  )
}

export default ProductPaymentBenefit