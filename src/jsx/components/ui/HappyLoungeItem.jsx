import React, { useEffect, useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Hart from "../../components/ui/Hart";
import Cart from "../../components/ui/Cart";

import "../../../css/components/HappyLoungeItem.css"
import PickBox from './PickBox';

function HappyLoungeItem({product}) {
    return ( 
        <div className="cmgrid_full_box cmitem_ty_deal v2 " data-page-set-id="112" data-has-next="false">
                <div className="cmitem_unit " data-unittype="item">
                    <div className="cmitem_goods ">
                        <div className="cmitem_gridbx ty_rect">
                            <div className="cmitem_thmb">
                                <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005" className="cmitem_thmb_link clickable" data-react-tarea="홈|해피라운지_상품|상품_클릭|[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外">
                                    <div className="cmitem_thmb_imgbx">
                                        <img className="cmitem_thmb_img" src="//sitem.ssgcdn.com/03/52/59/item/1000059595203_i1_500.jpg" alt="[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外" onerror="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'" />
                                    </div>
                                </Link>
                            </div>
                            <div className="cmitem_other">
                                <ul className="cmitem_other_list ty_full">
                                    <li>
                                        <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                            <div className="cmitem_other_thmb">
                                                <img src="https://sitem.ssgcdn.com/02/72/28/item/1000304287202_i1_150.jpg" alt="다른 옵션 이미지" onerror="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                            <div className="cmitem_other_thmb">
                                                <img src="https://sitem.ssgcdn.com/60/71/28/item/1000304287160_i1_150.jpg" alt="다른 옵션 이미지" onerror="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                            <div className="cmitem_other_thmb">
                                                <img src="https://sitem.ssgcdn.com/24/72/28/item/1000304287224_i1_150.jpg" alt="다른 옵션 이미지" onerror="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005" className="clickable" data-react-tarea="홈|해피라운지_상품|상품_클릭|[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外">
                                            <div className="cmitem_other_thmb ty_more">
                                                <i className="icon ty_xs icon_plusmark" aria-hidden="true"></i>
                                                <span className="blind">상품 더보기</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cmitem_detailbx ty_deal_text2">
                            <div className="cmitem_tx_thmb">
                                <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000059595203&amp;siteNo=6004&amp;salestrNo=6005" className="cmitem_tx_thmb_link clickable" data-react-tarea="홈|해피라운지_상품|상품_클릭|[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外">
                                    <div className="cmitem_tit_selling">
                                        <span className="cmitem_tit_txt1">WOMEN주간PICK</span>
                                        <span className="cmitem_tit_txt2">지금 사랑받는 아이템</span>
                                    </div>
                                    <div className="cmitem_tit">
                                        <span className="cm_mall_text"><i className="sm">신세계몰</i></span>
                                        <span className="cmitem_goods_tit">[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外</span>
                                    </div>
                                    <div className="cmitem_pricewrap ty_smcolor">
                                        <div className="cmitem_price_row cmitem_ty_newpr">
                                            <div className="new_price">
                                                <span className="blind">판매가격</span>
                                                <em className="ssg_price">60,563</em><span className="ssg_tx">원<span className="cm_tx_opt">~</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="cmitem_row_control">
                                <div className="cmitem_sideinfo_block">
                                    <span className="cmitem_tag ty_deal ty_outline">838개 구매중</span>
                                </div>
                                <div className="cmitem_btn_wrap">
                                    <span className="cmlike _js_cmlike interestIt">
                                        <button className="cmlike_btn _js_cmlike_btn clickable" data-position="clip" data-react-tarea="홈|해피라운지_상품|상품_좋아요|[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外_" data-react-tarea-dtl-cd="t00003">
                                            <span className="cmlike_ico">
                                                <i className="cmlike_primary_m"></i>
                                                <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                                                <span className="sr_on"><span className="blind">관심상품 등록</span></span>
                                            </span>
                                        </button>
                                    </span>
                                    <button className="cmitem_btn_cart clickable" data-react-tarea="홈|해피라운지_상품|상품_장바구니담기|[WOMEN] 주간PICK! SSG 특별혜택★간절기 신상 오픈! 니트/원피스/가디건 外">
                                        <span className="blind">장바구니 담기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default HappyLoungeItem;