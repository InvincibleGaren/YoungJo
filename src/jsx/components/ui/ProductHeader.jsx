import React from 'react'
import ProductSlider from '../../components/widgets/ProductSlider';
import ProductInfo from './ProductInfo';

function ProductHeader({productData}) {
    return (
        <>
        <ProductSlider productData = {productData} />
        <ProductInfo  productData = {productData} />

        {/* Product 결제 배송*/}
        <div className="mndtl_info_item">
            {/* <!-- 카드혜택 --> */}
            <div className="mndtl_info_card">
                <dl className="mndtl_info_dl mndtl_toggle">
                    <dt>카드혜택가</dt>
                    <dd>
                        <button type="button" className="mndtl_card_btnmore mndtl_toggle_btn">
                            <span className="mndtl_info_price">
                                <em className="ssg_price">10,948</em><span className="ssg_tx">원~</span>
                            </span>
                            <i className="mndtl_ic mndtl_ic_toggle">
                                <span className="blind">
                                    <span className="sr_off">카드혜택가 펼치기</span>
                                    <span className="sr_on">카드혜택가 접기</span>
                                </span>
                            </i>
                        </button>
                        <div className="mndtl_card_cont mndtl_toggle_cont">
                            <dl className="mndtl_info_dl mndtl_toggle">
                                <dt>
                                    <span className="mndtl_card_name">SSG.COM EDITION2카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_1" target="">더보기</a>
                                </dt>
                                <dd>
                                <span className="mndtl_info_desc">
                                    SSG PAY 7만원 이상 
                                    결제 시 10,948원</span>
                                <a href="#" className="mndtl_info_btn" target="_parent">
                                    <span className="mndtl_info_tx">스마일클럽 가입비 지원 + ~12% 적립</span>
                                    <i className="mndtl_ic_arr"></i>
                                </a>
                                </dd>
                            </dl>
                            <dl className="mndtl_info_dl mndtl_toggle">
                                <dt>
                                    <span className="mndtl_card_name">SSG.COM 삼성카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_2" target="">더보기</a>
                                </dt>
                                <dd>
                                    <span className="mndtl_info_desc">
                                        결제 시 11,067원</span>
                                    <a href="#" className="mndtl_info_btn" target="_parent">
                                        <span className="mndtl_info_tx">SSG MONEY 1% 적립 + 4% 추가 적립</span>
                                        <i className="mndtl_ic_arr"></i>
                                    </a>
                                </dd>
                            </dl>
                            <dl className="mndtl_info_dl mndtl_toggle">
                                <dt>
                                    <span className="mndtl_card_name">신한, 신세계신한, 이마트신한카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_3" target="">더보기</a>
                                </dt>
                                <dd>
                                    <span className="mndtl_info_desc">
                                        SSG PAY 7만원 이상 
                                        결제 시 11,067원
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </dd>
                </dl>
            </div>

            {/* <!-- 무이자할부 --> */}
            <div className="mndtl_info_installment">
            <dl className="mndtl_info_dl">
                <dt>무이자 할부</dt>
                <dd><a href="#" className="mndtl_txt_btn" target="_parent">카드사별 무이자 혜택</a></dd>
            </dl>
            </div>
            
            <div class="mndtl_info_benefit" data-react-tarea-cd="00006_000000004">
            <dl class="mndtl_info_dl mndtl_toggle">
                    <dt>SSG<br/>MONEY</dt>
                    <dd data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;SSG MONEY&quot;}]">
                        <em class="mndtl_info_tit">3% 적립 또는 3% 즉시할인</em>
                            <span class="mndtl_info_desc">2022.08.01 ~ 2022.09.30</span>
                    </dd>
                </dl>
            </div>

            <div className="mndtl_info_delivery">
            {/* <!-- 배송유형 배너 -->
            <!-- //배송유형 배너 --> */}
            <dl className="mndtl_info_dl">
                <dt>배송정보</dt>
                <dd>
                    <em className="mndtl_info_tit">택배배송 </em>
                    <span class="mndtl_info_parcel"> 대한통운<a href="#" class="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivcmpny" target=""><span class="blind">택배사 정보 안내 팝업</span></a></span>
                    <span className="mndtl_info_desc">
                        8/18(목)도착 예정<a href="javascript:;" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivery" target="_parent"><span className="blind">배송기간 안내 팝업</span></a>
                        <br/>
                        배송비 무료<br/>제주
                    <em className="ssg_price">3,000</em><span className="ssg_tx">원</span>,&nbsp;도서산간
                    <em className="ssg_price">4,000</em><span className="ssg_tx">원</span> 추가<a href="#" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivfee" target=""><span className="blind">제주/도서산간 배송비 안내 팝업</span></a></span>
                    
                    {/* <!--  몰탭 광고 상품 비노출 처리 --> */}
                </dd>
            {/* <!-- 프리미엄 배송 --> */}
            </dl>
            </div>
            {/* <!-- 구매유의사항 --> */}
            <div className="mndtl_info_note"></div>
            {/* <!--  몰탭 광고 상품 비노출 처리 -->
            <!-- 혜택상품정보 --> */}
        </div>
        </>
    );
}

export default ProductHeader;