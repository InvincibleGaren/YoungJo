import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Server from "../../../../datas/Server.js";
import CartItem from './CartItem.jsx';
import { useNavigate } from "react-router-dom";

function CartLogIn() {
    const Navigate = useNavigate();
    const access_token = sessionStorage.getItem("login");
    console.log(access_token);

    const [userDatas, setUserDatas] = useState();
    const [cartDatas, setCartDatas] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=>{
        axios.get (`${Server.baseUrl}api/my/deliveryAddr`, {
                headers: {
                    'Authentication': access_token
                }
            })
            .then(Response=>{
                console.log(Response.data);
                console.log(Response.data.data);
                setUserDatas(Response.data.data);
            })
            .catch(error=>{
                console.log(error);
            })
    }, [])

    useEffect(()=>{
        axios.get (`${Server.baseUrl}api/cart`, {
                headers: {
                  'Authentication': access_token
                }
            })
            .then(Response=>{
                console.log(Response.data);
                console.log(Response.data.data);
                setCartDatas(Response.data.data);
            })
            .catch(error=>{
                console.log(error);
            })
    }, [])

    useEffect(()=>{
        let tempTotal = 0;
          if ( cartDatas ) {
              cartDatas.map(cart => (
                tempTotal = tempTotal + (cart.price * cart.pdtQty)
              ));
          }
        setTotalPrice(tempTotal)
    },[cartDatas])
    
    return (  
        <>
            {/* 카트헤더 */}
            <div className="reveal-left-header reveal-right-header mnodr_head_fix">
                <div className="mcom_tit_renew ty_top">
                    <h2 className="mcom_tit_txt">장바구니</h2>
                    <div className="mcom_tit_lft">
                        <Link to="#" className="btn_back" onClick={()=>{Navigate(-1)}}>
                            <span className="sp_ctg_icon ctg_icon_back orderInfoTracking" data-tracking-cd="00014_000000094_t00060" data-tracking-value="뒤로가기">
                                <span className="blind">이전 페이지</span>
                            </span>
                        </Link>
                    </div>
                    <div className="mcom_tit_rgt">
                        <div className="btn_cate btn_search">
                            <button type="button">
                                {/* 검색버튼 */}
                                <span className="sp_ctg_icon ctg_icon_search payTracking" data-pt-click="장바구니|GNB|검색"><span className="blind">검색</span></span>
                            </button>
                        </div>
                        <div className="btn_cate btn_home">
                        <Link to={"/"} id="headerHomeBtn">
                            <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span>
                        </Link>
                        </div>
                    </div>
                </div>
                    {/* 검색누르면 뜨는 거 */}
                <div className="m_srharea m_srhprev">
                    <fieldset>
                        <div className="m_head_srh">
                            <div className="m_head_inparea2">
                                <div className="addr_ipbx">
                                    {/* 뒤로가기 화살표 svg */}
                                    <span className="inp_ico_prev"><span className="blind">이전페이지</span></span>
                                    <span className="inpbx2">
                                        <input type="text" id="query" name="query" autoComplete="off" placeholder="검색어를 입력하세요." />
                                        <label folaber=""><span className="blind">검색하기</span></label>
                                        <input type="hidden" id="select_site_no" value="6005" data-evn="PROD" />
                                    </span>
                                    <button type="button" className="addr_del"><span className="blind">검색단어 초기화</span></button>
                                </div>
                                <button className="mcom_b_def" type="button"><span className="inp_ico_srch"><span className="blind">검색</span></span></button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            
            {
                userDatas &&
                <div>
                    <div>
                        <ul className="mnodr_tab" id="cartTab">
                            <li className="on">
                                <a href="#" className="cartTracking">
                                <span className="mnodr_tab_tx">일반배송</span></a>
                            </li>
                            <li>
                                <a href="#" className="cartTracking">
                                <span className="mnodr_tab_tx">정기배송</span></a>
                            </li>
                            <li className="new">
                                <a href="#" className="mnodr_bn mnodr_cartshare_banner layer_filter2">
                                    <span className="mnodr_tab_tx">함께장보기</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mnodr_info2">
                        <div className="mnodr_info2_header">
                            <div className="mnodr_info2_row">
                                <i className="icon ty_sm icon_location" aria-hidden="true"></i>
                                <h3 className="mnodr_info2_tit">{userDatas.recipientName}</h3>
                                <span className="mnodr_info2_subtit">기본배송지</span>
                            </div>
                            <p className="mnodr_info2_desc"><span className="blind">배송지 주소</span>{userDatas.deliveryAddress}</p>
                            <p className="mnodr_info2_desc mnodr_tx_point" id="delicoText"></p>
                        </div>
                        <div className="mnodr_info2_contents">
                            <div className="mnodr_info2_btnarea">
                                <button className="mnodr_info2_btn cartTracking" type="button" name="btnReqMultShpp">
                                    여러곳으로 한방에
                                </button>
                                <button type="button" id="changeAddressBtn" className="mnodr_info2_btn layer_filter cartTracking">
                                    배송지 변경
                                </button>
                                <a className="modal-fix-open"></a>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            { 
                cartDatas == '' ? 
                <div className="mnodr_nodata">
                    <p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
                    <div className="mnodr_btn_area ty_mgtop"></div>
                </div>
                :
                <div>
                    <div className='mnodr_control_wrap'>
                        <div className="mnodr_control mnodr_sticky">
                            <div className="mnodr_control_group">
                                <span className="mnodr_chk">
                                    <input type="checkbox" id="chk_all" name="btChekAll" className="blind cartTracking" />
                                    <label htmlFor="chk_all">
                                        <span className="blind">모든상품전체선택</span>
                                    </label>
                                </span>
                                <label htmlFor="chk_all" className="mnodr_control_tx">
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
                            </span>
                        </div>
                        
                        <div id="_acdo_parcel" name="progress_20" className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_">
                            <div className="mnodr_acdo_header">
                                <label htmlFor="_unit_test_morning_group" className="mnodr_acdo_grplabel"></label>
                                <span className="mnodr_chk ty_group">
                                    <input type="checkbox" className="blind codr_inp_chk cartTracking" name="btChekShppGrp" id="20" />
                                    <label htmlFor="20"><span className="blind">택배배송상품전체선택</span></label>
                                </span>
                                <div className="mnodr_acdo_titwrap">
                                    <div className="mnodr_acdo_titarea">
                                        <label htmlFor="20">
                                            <span className="blind">택배배송상품전체선택</span>
                                            <h3 className="mnodr_acdo_tit">택배배송</h3>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {
                                cartDatas && cartDatas.map(item => (
                                    <CartItem key={item.pdtId} cartItem = {item} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="mnodr_acdo_summary" id="shppGrp0">
                        <span className="ssg_price codr_subtotal_sum">{totalPrice.toLocaleString()}원 + 배송비 0원 = {totalPrice.toLocaleString()}원</span>
                        <span className="ssg_tx">&nbsp;&#40;무료배송&#41;</span>
                        <button className="mnodr_acdo_smrybtn cartTracking" type="button">
                            <p className="mnodr_tx_gray">배송비SAVE 상품보기 &#187;</p>
                        </button>
                    </div>
                    <div className="mnodr_total" id="cartInformation">
                        <div className="mnodr_form_sec">
                            <h3 className="mnodr_form_tit"><strong>결제 예정금액</strong></h3><br />
                            <dl className="mnodr_priceitem ty_narrow">
                                <dt>
                                    <span className="mnodr_priceitem_stit">주문금액</span>
                                </dt>
                                <dd>
                                    <span className="mnodr_tx_primary">+<em className="ssg_price viewAmt_sellprc">{totalPrice.toLocaleString()}</em><span className="ssg_tx">원</span></span>
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
                                        <em className="ssg_price viewAmt_paymt">{totalPrice.toLocaleString()}</em>
                                        <span className="ssg_tx">원</span>
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            }

            {/* 카트푸터 */}
            <div>
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
            </div>
        </>
    );
}

export default CartLogIn;