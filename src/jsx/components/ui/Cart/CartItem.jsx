import React from 'react'
import { useState } from 'react'

function CartItem({cartItem}) {

    const [pdtQtyChange, setPdtQtyChange] = useState();

    return (
        <div className="mnodr_acdo_cont">
            <div className="mnodr_unit">
                <div id="mnodr_unit_5145007481" className="pay_item_area mnodr_unit_item ">
                    <div className="mnodr_unit_thmb">
                        <span className="mnodr_chk">
                            <input type="checkbox" className="blind cartTracking" id="chk_order_5145007481" name="cbCartId" value="5145007481" />
                            <label htmlFor="chk_order_5145007481"><span className="blind">상품선택</span></label>
                        </span>
                        <span className="mnodr_unit_img" aria-hidden="true">
                            {/* 데이터에 alt 추가 예정 */}
                            <img src={cartItem.thumbImg} alt="나이키 의류 반팔 티셔츠 반바지 23종 모음" width="75" height="75" /></span>
                        </div>
                    <div className="mnodr_unit_cont">
                        <div className="mnodr_unit_info">
                            <span className="cm_mall_text">
                                <i className="sm">{cartItem.salesSite}</i>
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
                                <strong className="mnodr_unit_brd"> {cartItem.brand} </strong>
                                <span className="mnodr_unit_name">
                                    {cartItem.title}
                                </span>
                            </a>
                        </p>
                        <span className="mnodr_unit_option">옵션 :&nbsp;{cartItem.optionValue1} / {cartItem.optionValue2}</span>
                        <div className="mnodr_unit_prdpay">
                            <div className="mnodr_unit_l">
                                <div className="mnodr_unit_newprice">
                                    <span className="blind">판매가격</span>
                                    <em className="ssg_price itemOrdAmt">{(cartItem.price * cartItem.pdtQty).toLocaleString()}</em>
                                    <span className="ssg_tx">원</span>
                                </div>
                            </div>
                            
                            {/* 수량조절부분 */}
                            <div className="mnodr_unit_r">
                                <div className="mnodr_amount">
                                    <div className="mnodr_opa_area">
                                        <span className="blind">현재수량</span>
                                        <span className="mnodr_opa_tx ordQty">{cartItem.pdtQty}</span>
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
                                    <span className="mnodr_tx_point">마감임박 &#40;남은수량:{cartItem.stock}&#41;</span>
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
            
        </div>
    )
}

export default CartItem