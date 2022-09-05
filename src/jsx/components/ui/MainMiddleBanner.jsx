import React from 'react';
import { Link } from 'react-router-dom'

function MainMiddleBanner() {

    return ( 
        <div className="cmgrid_full_box" data-page-set-id="113" data-react-tarea-cd="100000000149_113_285" data-observable-unit="true">
            <div className="cmhero_banner cmhero_ty_simple ty_bn24">
                <div className="cmhero_swiper disabled" id="_cmhero_swiper">
                    <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide swiper-slide-active">
                                <div className="cmhero_bn gate_unit" data-areaid="ad_list">
                                    <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                                        <Link to="#" className="cmitem_btn_tt_adinfo ssg-tooltip">
                                            <span className="blind">광고 안내 툴팁</span>
                                        </Link>
                                        <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                                            검색어와 관련된 상품으로 입찰가순으로 전시됩니다.
                                            <button type="button" className="cmitem_close_tt_adinfo ssg-tooltip-close">
                                                <span className="blind">광고 안내 툴팁 닫기</span>
                                            </button>
                                        </div>
                                    </div>
                                    <Link to="/" className="cmhero_bnlnk clickable" data-react-tarea="홈|광고배너|배너_클릭|ㅇ">
                                        <img className="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/ssgadp/7m/74/1002182747m.jpg" alt="ㅇ" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
			        </div>
                    <div className="swiper-ctrls">
                        <div className="swiper_ctrls_util">
                            <div className="swiper_autoplay">
                                <button type="button" className="btn_autoplay pause clickable" data-react-tarea="홈|광고배너|정지_재생_클릭">
                                    <span className="label_pause"><span className="blind">배너 목록 자동 재생 정지</span></span>
                                    <span className="label_play"><span className="blind">배너 목록 자동 재생 시작</span></span>
                                </button>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper_moreview" data-react-unit-type="text">
                                <button type="button" className="btn_moreview clickable" data-react-tarea="홈|광고배너|더보기_클릭">
                                    <span className="blind">배너 전체보기</span>
                                    <i className="icon ty_xs icon_plusmark" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MainMiddleBanner;