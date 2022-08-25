import React from 'react';

function CartEmpty() {
    return (  
        <>
            <div className="mcom_tit_renew ty_top">
				<h2 className="mcom_tit_txt">장바구니</h2>

                {/* <!-- 클레임 배송조회 팝업 호출시 아래 버튼 노출안함(default 노출) --> */}
                <div className="mcom_tit_lft">
                    <a href="javascript:;" className="btn_back" onClick=""><span className="sp_ctg_icon ctg_icon_back orderInfoTracking" data-tracking-cd="00014_000000094_t00060" data-tracking-value="뒤로가기"><span className="blind">이전 페이지</span></span></a>
                </div>
                {/* <!-- 클레임 배송조회 팝업 호출시 아래 버튼 노출안함(default 노출) --> */}
                <div className="mcom_tit_rgt">
                    <div className="btn_cate btn_search">
                        <button type="button">
                            {/* 검색버튼 */}
                            <span className="sp_ctg_icon ctg_icon_search payTracking" data-pt-click="장바구니|GNB|검색"><span className="blind">검색</span></span>
                        </button>
                    </div>
                    <div className="btn_cate btn_home">
                    <a id="headerHomeBtn" href="#"  onClick="">
                        <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span></a>
                    </div>
                </div>
            </div>

            {/* 검색누르면 뜨는 거 */}
            <div className="m_srharea m_srhprev">
                {/* <fieldset> */}
                    <div className="m_head_srh">
                        <div className="m_head_inparea2">
                            <div className="addr_ipbx">
                                {/* 뒤로가기 화살표 svg */}
                                <span className="inp_ico_prev"><span className="blind">이전페이지</span></span>
                                <span className="inpbx2">
                                    <input type="text" id="query" name="query" autocomplete="off" placeholder="검색어를 입력하세요." />
                                    <label for=""><span className="blind">검색하기</span></label>
                                    <input type="hidden" id="select_site_no" value="6005" data-evn="PROD" />
                                </span>
                                <button type="button" className="addr_del"><span className="blind">검색단어 초기화</span></button>
                            </div>
                            <button className="mcom_b_def" type="button"><span className="inp_ico_srch"><span className="blind">검색</span></span></button>
                        </div>
                    </div>
                {/* </fieldset> */}
            </div>

            <div className="mnodr_nodata">
		    	<i className="mnodr_ic ic_basket"></i>
		        <p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
		        <p className="mnodr_tx_desc">로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!</p>
		        <div className="mnodr_btn_area ty_mgtop">
                    <button type="button" name="loginBtn" className="mnodr_btn ty_point ty_lg codr_btn_login">
                        <span className="mnodr_btn_tx">로그인하기</span>
                    </button>
                </div>
		    </div>

            <div className="mnodr_thickhr"></div>

            <div className="mnodr_form_sec">
                <h3 className="mnodr_form_tit"><strong>장바구니 상품안내</strong></h3>
                <ul className="mnodr_bullst ty2">
                    <li>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                    <li>상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
                </ul>
            </div>
            <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg ty_space_lg">
                <div className="mcom_mall_wrap v2">
                    <div className="mcom_noti_wrap">
                        <p className="mcom_noti_txt">㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는 오픈마켓 상품이 포함되어 있습니다.</p>
                        <p className="mcom_noti_txt">오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.</p>
                    </div>
                </div>
		    </div>
        </>
    );
}

export default CartEmpty;