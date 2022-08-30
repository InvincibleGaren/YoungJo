import React from 'react'

function Cart() {
  return (
    <>
    {/* 로그인 안했을때만 */}
    <div className="mnodr_info2">
        <div className="mnodr_info2_header">
            <div className="mnodr_info2_row">
                <i className="mnodr_ic ic_power"></i> 
                <span className="mnodr_info2_tit ty2">로그인을 해보세요.</span>
            </div>
            <p className="mnodr_tx_desc mnodr_tx_gray">
                장바구니에 담아두신 상품을 나중에도 확인하실 수 있습니다.</p>
        </div>
        <div className="mnodr_info2_contents">
            <div className="mnodr_info2_btnarea">
                <button className="mnodr_info2_btn" type="button" name="loginBtn">로그인 하기</button>
            </div>
        </div>
    </div>

    <div className='mnodr_control_wrap'>
        <div className="mnodr_control mnodr_sticky">
            <div className="mnodr_control_group">
                <span className="mnodr_chk">
                    <input type="checkbox" id="chk_all" name="btChekAll" className="blind cartTracking" />
                    <label for="chk_all">
                        <span className="blind">모든상품전체선택</span>
                    </label>
                </span>
                <label for="chk_all" className="mnodr_control_tx">
                    <span className="df">전체</span>
                    <span className="sm">전체</span>
                </label>
                <span className="mnodr_control_tx">
                    <a href="#" className="mnodr_control_link layer_filter cartTracking">
                        <span className="mnodr_selbox_tx">배송방법바꾸기</span>
                    </a>
                    <a className="modal-fix-open"></a>
                </span>
            </div>
            <span className="mnodr_control_delete">
                <a href="#" className="df cartTracking" name="btDelChekItemAll">품절상품삭제</a>
                <a href="#" className="sm cartTracking" name="btDelChekItemAll">품절삭제</a>
            </span>
        </div>
        
        <div id="_acdo_parcel" name="progress_20" className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_">
            <div className="mnodr_acdo_header">
                <label for="_unit_test_morning_group" className="mnodr_acdo_grplabel"></label>
                <span className="mnodr_chk ty_group">
                    <input type="checkbox" className="blind codr_inp_chk cartTracking" name="btChekShppGrp" id="20" />
                    <label for="20"><span className="blind">택배배송상품전체선택</span></label>
                </span>
                <div className="mnodr_acdo_titwrap">
                    <div className="mnodr_acdo_titarea">
                        <label for="20">
                            <span className="blind">택배배송상품전체선택</span>
                            <h3 className="mnodr_acdo_tit">택배배송</h3>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mnodr_acdo_cont">
                <div className="mnodr_unit">
                    <div id="mnodr_unit_5145007481" className="pay_item_area mnodr_unit_item ">
                        <div className="mnodr_unit_thmb">
                            <span className="mnodr_chk">
                                <input type="checkbox" className="blind cartTracking" id="chk_order_5145007481" name="cbCartId" value="5145007481" />
                                <label for="chk_order_5145007481"><span className="blind">상품선택</span></label>
                            </span>
                            <span className="mnodr_unit_img" aria-hidden="true">
                                <img src="https://sitem.ssgcdn.com/11/02/36/item/1000048360211_i1_140.jpg" alt="나이키 의류 반팔 티셔츠 반바지 23종 모음" id="img5145007481" width="75" height="75" /></span>
                            </div>
                        <div className="mnodr_unit_cont">
                            <div className="mnodr_unit_info">
                                <span className="cm_mall_text">
                                    <i className="sm">신세계몰</i>
                                </span>
                            </div>
                            <div className="mnodr_unit_util">
                                <button type="button" className="mnodr_unit_pin1 cartTracking" name="btKeep">
                                    <i className="mnodr_ic ic_pin "><span className="blind">계속 담아두기</span></i>
                                </button>
                                <button type="button" className="mnodr_unit_del cartTracking" name="btnDel">
                                    <i className="mnodr_ic ic_del"><span className="blind">상품 삭제</span></i>
                                </button>
                            </div>
                            
                            <p className="mnodr_unit_tit">
                                <a className="cartTracking" href="#">
                                    <strong className="mnodr_unit_brd"> 나이키 </strong>
                                    <span className="mnodr_unit_name">
                                        나이키 의류 반팔 티셔츠 반바지 23종 모음
                                    </span>
                                </a>
                            </p>
                            <span className="mnodr_unit_option">옵션 :&nbsp;01_827021-100/XL</span>
                            <div className="mnodr_unit_prdpay">
                                <div className="mnodr_unit_l">
                                    <div className="mnodr_unit_oldprice">
                                        <del>
                                            <span className="blind">정상가격</span>
                                            <em className="ssg_price itemSellprc">34,900</em>
                                            <span className="ssg_tx">원</span>
                                        </del>
                                        
                                        <button type="button" className="mnodr_btn_detail modal-alert-open">
                                            <i className="mnodr_ic ic_detail"><span className="blind">자세히 보기</span></i>
                                        </button>
                                        <div className="mnodr_modal ty_alert" role="dialog" aria-hidden="true" id="_layerDiscountInfo_5145007481">
                                            <div className="mnodr_modal_wrap" role="document">
                                                <div className="mnodr_modal_cont">
                                                    <h3 className="mnodr_modal_tit">할인내역 정보</h3>
                                                    <dl className="mnodr_priceitem ty_narrow">
                                                        <dt>
                                                            <span className="mnodr_priceitem_stit">판매가</span>
                                                        </dt>
                                                        <dd>
                                                            <strong className="mnodr_tx_primary">
                                                                <em className="ssg_price itemSellprc">34,900</em>
                                                                <span className="ssg_tx">원</span>
                                                            </strong>
                                                        </dd>
                                                    </dl>
                                                    <dl className="mnodr_priceitem ty_total">
                                                        <dt>
                                                            <span className="mnodr_priceitem_stit">최적가</span>
                                                        </dt>
                                                        <dd>
                                                            <strong className="mnodr_tx_primary">
                                                                <em className="ssg_price itemOrdAmt">34,900</em>
                                                                <span className="ssg_tx">원</span>
                                                            </strong>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mnodr_unit_newprice">
                                        <span className="blind">판매가격</span>
                                        <em className="ssg_price itemOrdAmt">34,900</em>
                                        <span className="ssg_tx">원</span>
                                    </div>
                                </div>
                                
                                <div className="mnodr_unit_r">
                                    <div className="mnodr_amount">
                                        <div className="mnodr_opa_area">
                                            <span className="blind">현재수량</span>
                                            <span className="mnodr_opa_tx ordQty">1</span>
                                        </div>
                                        <button type="button" name="btUpdOrdQtyMinus" className="mnodr_btn_minus cartTracking">
                                            <i className="mnodr_ic ic_minus"><span className="blind">주문수량빼기</span></i>
                                        </button>
                                        <button type="button" name="btUpdOrdQtyPlus" className="mnodr_btn_plus cartTracking">
                                            <i className="mnodr_ic ic_plus"><span className="blind">주문수량더하기</span></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mnodr_unit_orderstate">
                                    <div className="mnodr_unit_deadline">
                                        <i className="icon ty_sm icon_alert" aria-hidden="true"></i>
                                        <span className="mnodr_tx_point">마감임박(남은수량:9)</span>
                                    </div>
                            </div>
                            <div className="mnodr_unit_btnarea ty_fillbtn">
                                <button type="button" className="mnodr_unit_btn layer_filter cartTracking">
                                    <span>옵션변경</span>
                                </button>

                                <button type="button" name="btOrd" className="mnodr_unit_btn ty_point cartTracking">
                                    <span>바로구매</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mnodr_acdo_summary" id="shppGrp0">
                    <span className="ssg_price codr_subtotal_sum">34,900원 + 배송비 0원 = 34,900원</span>
                    <span className="ssg_tx">&nbsp;(무료배송)</span>
                    <button className="mnodr_acdo_smrybtn cartTracking" type="button">
                        <p className="mnodr_tx_gray">배송비SAVE 상품보기</p>
                        <i className="mnodr_ic ic_arr ty_arr_right ty_arr_gray"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className="mnodr_total" id="cartInformation">
        <div className="mnodr_form_sec">
            <h3 className="mnodr_form_tit"><strong>결제 예정금액</strong></h3>
            <dl className="mnodr_priceitem ty_narrow">
                <dt>
                    <span className="mnodr_priceitem_stit">주문금액</span>
                </dt>
                <dd>
                    <span className="mnodr_tx_primary">+<em className="ssg_price viewAmt_sellprc">34,900</em><span className="ssg_tx">원</span></span>
                </dd>
            </dl>
            <dl className="mnodr_priceitem ty_narrow">
                <dt>
                    <span className="mnodr_priceitem_stit">상품할인</span>
                </dt>
                <dd>
                    <span className="mnodr_tx_primary">-<em className="ssg_price viewAmt_dcprc">0</em><span className="ssg_tx">원</span></span>
                </dd>
            </dl>
            <dl className="mnodr_priceitem ty_narrow">
                <dt>
                    <span className="mnodr_priceitem_stit">배송비</span>
                </dt>
                <dd>
                    <span className="mnodr_tx_primary">+<em className="ssg_price viewAmt_shppcst">0</em><span className="ssg_tx">원</span></span>
                </dd>
            </dl>
            <dl className="mnodr_priceitem ty_total">
                <dt>
                    <span className="mnodr_tx_point mnodr_priceitem_stit">총 결제예정금액</span>
                </dt>
                <dd>
                    <span className="mnodr_priceitem_total">
                        <em className="ssg_price viewAmt_paymt">34,900</em>
                        <span className="ssg_tx">원</span>
                    </span>
                </dd>
            </dl>
        </div>
    </div>
    </>
  )
}

export default Cart