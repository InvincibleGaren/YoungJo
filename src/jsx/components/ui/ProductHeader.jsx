import React from 'react'
import ProductSlider from '../../components/widgets/ProductSlider';
import ProductPrice from './ProductPrice';

function ProductHeader({productData}) {
    return (
        <>
        <ProductSlider />
        
        <div className="mndtl_sec mndtl_prd_wrap" data-react-tarea-cd="00006_000000005">
            <div className="mndtl_mall">
                <div className="mndtl_mall_badge">
                    <span className="cm_mall_text">
                        <i className="sm">{productData.salesSite}</i>
                    </span>
                </div>
                {/* <div className="mndtl_mall_info">
                </div> */}
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

            <ProductPrice />

            {/* <!-- 멤버십 적립 혜택 안내 -->
            <!-- 스마일클럽 배너 --> */}
            <div className="mndtl_smile_lst">
                <div className="mndtl_smile_type">
                    <a href="#" className="clickable" target="_parent">
                        <img className="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" alt="스마일 클럽 무료 체험" data-ll-status="loaded" srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" />
                    </a>
                    {/* <p className="blind">스마일 클럽 무료 체험</p> */}
                </div>
            </div>
            </div>

            <div id="itemLiveList" className="mndtl_live_v2">
            <div className="mndtl_live_wrap">
                <ul className="mndtl_live_list">
                    <li>
                        <div className="mndtl_live_msg">
                        <p className="mndtl_live_tx">직접 써보신 분들이 많아요! 543명의 &nbsp;고객 리뷰가 있습니다</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

            {/* <!-- 리뷰/쓱톡 --> */}
            <div className="mndtl_refer">
            <div className="mndtl_grade">
                <span className="mndtl_star12">
                    <span className="mndtl_star12_per"></span>
                    <span className="blind">별점 5점 중 <em>4.3</em>점</span>
                </span>
                <a href="#" className="mndtl_grade_total modal-iframe-open clickable" data-react-tarea-dtl-cd="t00060" data-title="고객리뷰" data-tab-name="_detailreview_tab" data-layer-target="/mitem/reviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="">543건 리뷰<span className="blind">더보기</span></a>
                {/* <!-- 포토&동영상 전체보기 --> */}
                <a href="#" className="mndtl_mediall_more modal-iframe-open" data-title="포토&amp;동영상 전체(58)" data-tab-name="_detailimgreview_tab" data-layer-target="/mitem/imgReviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005" target="">
                    <div className="mndtl_mediall_summary_list">
                        <div className="mndtl_figure_thmb">
                        <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220801111229_1177967825_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=4cc3c257036796b93ed6bc283842c17bd5e01df5" />
                        </div>
                        <div className="mndtl_figure_thmb">
                        <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220729132326_1177703594_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=0bb4f441bb15d05ffa82306a7372fff1af9821d1" />
                        </div>
                        <div className="mndtl_figure_thmb">
                        <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220723114235_1177285261_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=1b09a1b8e6f1bbec6d8be304b52cebf4f708bd31" />
                        </div>
                    </div>
                </a>
                </div>
            </div>
            </div>

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