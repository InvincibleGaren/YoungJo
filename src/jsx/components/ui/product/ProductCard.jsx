import React from 'react'

function ProductCard() {
  return (
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
  )
}

export default ProductCard