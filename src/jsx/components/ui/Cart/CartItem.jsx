import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Server from "../../../../datas/Server.js";

function CartItem({cartItem, setCartDatas}) {

    const [productQty, setProductQty] = useState(cartItem.pdtQty);
    const access_token = sessionStorage.getItem("login");

    const inCreQty = () =>{
        setProductQty(productQty + 1);
    }
    const deCreQty = () =>{
        if(productQty === 1){
            return alert("상품의 개수는 1 이하가 될 수 없습니다.");
        }
        setProductQty(productQty - 1);
    }

    const url = `${Server.baseUrl}api/cart/pdt`;
    useEffect(()=>{
        console.log(url, access_token, cartItem.pdtId, productQty)
        axios.put(url,
            {
                "pdtId" : cartItem.pdtId,
                "pdtQty" : productQty
            },
            { headers: {
                'Authentication': access_token
              }}
            )
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [productQty])

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
                        <span className="mnodr_unit_option">개당가격 :&nbsp;{(cartItem.price).toLocaleString()}</span>
                        <span className="mnodr_unit_option">남은수량 :&nbsp;{cartItem.stock}</span>
                        <div className="mnodr_unit_prdpay">
                            <div className="mnodr_unit_l">
                                <div className="mnodr_unit_newprice">
                                    <span className="blind">판매가격</span>
                                    <em className="ssg_price itemOrdAmt">{(cartItem.price * productQty).toLocaleString()}</em>
                                    <span className="ssg_tx">원</span>
                                </div>
                            </div>
                            
                            {/* 수량조절부분 */}
                            <div className="mnodr_unit_r">
                                <div className="mnodr_amount">
                                    <div className="mnodr_opa_area">
                                        <span className="blind">현재수량</span>
                                        <span className="mnodr_opa_tx ordQty">{productQty}</span>
                                    </div>
                                    <button type="button" name="btUpdOrdQtyMinus" className="mnodr_btn_minus cartTracking" onClick={deCreQty}>
                                        <i className="mnodr_ic ic_minus"><span className="blind">주문수량빼기</span></i>
                                    </button>
                                    <button type="button" name="btUpdOrdQtyPlus" className="mnodr_btn_plus cartTracking" onClick={inCreQty}>
                                        <i className="mnodr_ic ic_plus"><span className="blind">주문수량더하기</span></i>
                                    </button>
                                </div>
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