import React from 'react'
import ProductSlider from '../../widgets/ProductSlider';
import ProductCard from './ProductCard';
import ProductInfo from './ProductInfo';

function ProductHeader({productData}) {
    console.log(productData)
    return (
        <div>
            <ProductSlider thumbImgList = {productData.thumbImgList} />
            <ProductInfo productData = {productData} />
            <div className="mndtl_info_item">
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
                <div className="mndtl_info_delivery">
                    <dl className="mndtl_info_dl">
                        <dt>배송정보</dt>
                        <dd>
                            <em className="mndtl_info_tit">택배배송 </em>
                            <span className="mndtl_info_parcel"> {productData.courierCompany}
                                <a href="#" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivcmpny" target="">
                                    <span className="blind">택배사 정보 안내 팝업</span>
                                </a>
                            </span>
                            <span className="mndtl_info_desc">
                                <span>
                                    제주<em className="ssg_price"> 5,000</em><span className="ssg_tx">원</span>
                                </span>
                                <span>
                                    , 도서산간<em className="ssg_price"> 7,000</em><span className="ssg_tx">원</span>
                                </span>
                                &nbsp;추가
                                <a href="#" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivfee" target="">
                                    <span className="blind">제주/도서산간 배송비 안내 팝업</span>
                                </a>
                            </span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;