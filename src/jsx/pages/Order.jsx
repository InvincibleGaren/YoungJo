import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Server from "../../datas/Server.js";
import MemberHeader from '../components/ui/MemberHeader';

import "../../css/components/Order.css"
import OrderItem from '../components/OrderItem';

function Order() {
   const [purchaseData, setPurchaseData] = useState();
   
   const pathname = useParams();
   useEffect(()=>{
    
    const url = `${Server.baseUrl}api/purch/user/proceed`;
    const token = sessionStorage.getItem("login");
    const config = {timeout:1000, headers:{authentication: token}}
    const data = {pdtIdList:[pathname.productId]}
    
    axios.post(url, data, config)
      .then(Response => {
         console.log(Response);
         setPurchaseData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })
   },[])

   const totalPrice = (array) => {
    const sum = array?.reduce((totalValue, item) => totalValue+item.price, 0);
    return sum;
  }

    return ( 
      <div className='Order'>
        <MemberHeader title="결제하기" />
        <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
            <li className="mnodr_article_item ordPageShpplocArea fullOrdArea">
	            <article className="mnodr_article mnodr_delivery_infos">
		            <div className="mnodr_article_head">
			            <div className="mnodr_article_headlt">
				            <h2 className="mnodr_tx_tit">배송지 : {purchaseData?.myDeliAddr?.recipientName}</h2>
			            </div>
			            <div className="mnodr_article_headrt">
				            <button type="button" className="mnodr_btn ty_grayline ty_xxs payTracking" data-pt-click="주문서|배송지|변경" name="btnShowTgtDiv" data-target-div="shpplocInfoDiv_1">변경</button>
			            </div>				
			        </div>
		            <div className="mnodr_article_cont ty_pull">
			            <div className="mnodr_form_sec">
				            <p className="mnodr_tx_desc">{purchaseData?.myDeliAddr?.address}</p>
                            <div className="mnodr_tx_wrap ty_space">
                                <span className="mnodr_tx_size2 mnodr_tx_gray">
                                    <span id="dispRcptpeNm_0">{purchaseData?.myDeliAddr?.recipientName}</span> 
                                    / 
                                    <span id="dispHpno_0">{purchaseData?.myDeliAddr?.phoneNumber}</span>
                                </span>
                                <span className="mnodr_chk">
                                    <input type="checkbox" id="relaxNoUseYn_0" name="shpploc[0].relaxNoUseYn" defaultValue="Y" className="blind payTracking" data-pt-click="|배송지|안심번호 사용" />
                                    <label htmlFor="relaxNoUseYn_0">
                                        <span className="mnodr_chk_tx">안심번호 사용</span>
                                    </label>
                                </span>
                            </div>
				        </div>
		            </div>
	            </article>
            </li>
        </ul>
        <article className="mnodr_article" id="discountBenefitArticle">
            <ul className="mnodr_article_cont">
                <li className="mnodr_article_item">
                    <div className="mnodr_article_head">
                        <div className="mnodr_article_headlt">
                            <h2 className="mnodr_tx_tit">할인혜택</h2>
                        </div>
                        <input type="hidden" id="totBsellAmt" defaultValue="0" />
                    </div>
                    <div className="mnodr_article_cont">
                        <div className="mnodr_discount_sec ty_space discountBenefitDtlArea">
                            <dl className="mnodr_priceitem ty_narrow">
                                <dt>
                                    <span className="mnodr_priceitem_stit">상품할인</span>
                                    <button type="button" className="mnodr_btn_info_detail modal-fix-open payTracking" data-pt-click="주문서|할인혜택|상품할인금액_상세" data-layer-target="#mnodr_modal_discount_price">
                                        <i className="mnodr_ic ic_info_detail">
                                            <span className="blind"></span>
                                        </i>
                                    </button>
                                </dt>
                                <dd>
                                    <span className="mnodr_tx_primary">- <em className="ssg_price dispTotItemEnuriWithout10Amt">10,440</em><span className="ssg_tx">원</span></span>
                                </dd>
                            </dl>
                            <dl className="mnodr_priceitem fullOrdArea">
                                <dt><span className="mnodr_priceitem_stit">결제할인 (쿠폰 0장 보유)</span></dt>
                                <dd>
                                    <span className="mnodr_tx_primary">- <em className="ssg_price">0</em><span className="ssg_tx">원</span></span>
                                </dd>
                            </dl>

                            <ul className="mnodr_paydetail_sublst fullOrdArea cpnApplyDtlArea"></ul>
                            <div className="fullOrdArea">
                                <p className="mnodr_coupon_desc mnodr_tx_size2 ssgpaySecCpnGuideArea">SSGPAY전용쿠폰은 SSG<span className="mnodr_tx_point">PAY</span>로 결제 시 자동 적용됩니다.</p>
                                <p className="mnodr_coupon_desc mnodr_tx_size2 ssgcomCrdShppcstCpnGuideArea"><span className="mnodr_tx_point">SSG.COM카드 배송비 쿠폰은 해당 카드 선택시 자동 적용됩니다.</span></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
        {/* 포인트 사용 */}
        <article id="pointArticle" className="mnodr_article mnodr_acdo_toggle fullOrdArea">
			<div className="mnodr_article_head mnodr_acdo_btn payTracking" data-pt-click="주문서|포인트|펼침" id="pointToggleButton">
				<div className="mnodr_article_headlt">
					<h2 className="mnodr_tx_tit">포인트 <span className="totPointAmtArea"> : <span id="totPointAmt">0</span>원 보유</span></h2>
				</div>
                <div className="mnodr_article_headrt">
                    <button type="button" className="mnodr_toggle_btn"><span className="blind">포인트사용 보기</span></button>
                </div>
			</div>
            <div className="mnodr_article_head_subtx crdDcApplyGuideArea">
                <p className="mnodr_tx_desc">
                    <span className="mnodr_tx_gray">카드할인혜택이 적용되어 포인트 사용이 불가합니다.</span>
                </p>
            </div>
            <div className="mnodr_article_head_subtx mnodr_pt_desc">
                <span className="mnodr_tx_desc mnodr_tx_gray">SSG MONEY, 신세계포인트 외 제휴포인트</span>
            </div>
            <div className="mnodr_article_cont mnodr_acdo_cont ty_toggle">
                <div className="mnodr_point_sec">
                    <div className="mnodr_form_sec ty10 pointUseDivArea">
                        <p className="mnodr_tx_desc">
                            SSG MONEY
                            <span id="ssgMoneyBaseAmt"></span>
                        </p>
                        <div className="mnodr_form_cont">
                            <div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="ssgMoneyUseInput" name="paymtMeans[1].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" />
                                </span>
                                <button type="button" id="ssgMoneyUseAllButton" className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|SSG MONEY_전액사용"><span className="mnodr_btn_tx">전액사용</span></button>
                            </div>
                            <ul className="mnodr_bullst ty1">
                                <li className="ssgMoneyAuthGuideArea">10만원 초과 사용시 SSGPAY에 가입/인증이 필요합니다.</li>
                                <li className="ssgMoneyMaxValGuideArea">간편가입회원은 최대 10만원까지 이용가능합니다.</li>
                                <li className="ssgMoneyImpossibleGuideArea">※ 안정적인 서비스 제공을 위해 시스템 점검중입니다. <span className="ssgMoneyImpossibleDtsArea">06/01 10:00</span>까지 SSG MONEY 사용이 잠시 불가하니 양해부탁드립니다.</li>
                            </ul>
						</div>
						<input type="hidden" name="paymtMeans[1].paymtMeansCd" defaultValue="617" />
					</div>
					<div className="mnodr_form_sec ty10 pointUseDivArea ssgVoucherArea">
						<p className="mnodr_tx_desc">SSG VOUCHER<span id="ssgVoucherBaseAmt"></span></p>
                        <div className="mnodr_form_cont">
                            <div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="ssgVoucherUseInput" name="paymtMeans[7].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" />
                                </span>
                                <button type="button" id="ssgVoucherUseAllButton" className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|SSG VOUCHER_전액사용"><span className="mnodr_btn_tx">전액사용</span></button>
                            </div>
                        </div>
						<input type="hidden" name="paymtMeans[7].paymtMeansCd" defaultValue="618" />
					</div>
					<div className="mnodr_form_sec ty10 pointUseDivArea">
						<p className="mnodr_tx_desc">신세계포인트<span id="shinsegaePointBaseAmt"></span></p>
                        <div className="mnodr_form_cont">
                            <div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="shinsegaePointUseInput" name="paymtMeans[2].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="shinsegaePointSearchButton" className="mnodr_btn mnodr_inp_btn modal-alert-open" data-layer-target="#_layerAlertPointCard" data-no-click-outside=""><span className="mnodr_btn_tx">사용</span></button>
                                <button type="button" id="shinsegaePointUseAllButton" className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|신세계포인트_전액사용" ><span className="mnodr_btn_tx">전액사용</span></button>
                            </div>
                            <ul className="mnodr_bullst ty1">
                                <li className="shinsegaePointImpossibleGuideArea">※ 안정적인 서비스 제공을 위해 시스템 점검중입니다. <span className="shinseagePointImpossibleDtsArea">06/01 10:00</span>까지 신세계포인트 사용이 잠시 불가하니 양해부탁드립니다.</li>
                            </ul>
                        </div>
                        <input type="hidden" name="paymtMeans[2].paymtMeansCd" defaultValue="600" />
					</div>
					<div className="mnodr_form_sec ty10 pointUseDivArea">
						<p className="mnodr_tx_desc">OK 캐쉬백<span id="okCashBagBaseAmt"></span></p>
                        <div className="mnodr_form_cont">
                            <div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="okCashBagUseInput" name="paymtMeans[4].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="okCashBagSearchButton" className="mnodr_btn mnodr_inp_btn modal-alert-open payTracking" data-pt-click="주문서|포인트|OK캐쉬백_조회" data-layer-target="#_layerPointokCashbag"><span className="mnodr_btn_tx">조회</span></button>
                                <button type="button" id="okCashBagUseAllButton" className="mnodr_btn mnodr_inp_btn pointUseAllButton"><span className="mnodr_btn_tx">전액사용</span></button>
                            </div>
                        </div>
                        <input type="hidden" name="paymtMeans[4].paymtMeansCd" defaultValue="660" />
					</div>
					<div className="mnodr_form_sec ty10 pointUseDivArea">
						<p className="mnodr_tx_desc">PAYCO포인트<span id="paycoPointBaseAmt"></span></p>
                        <div className="mnodr_form_cont">
                            <div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="paycoPointUseInput" name="paymtMeans[5].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="paycoPointSearchButton" className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking" data-pt-click="주문서|포인트|PAYCO포인트_조회"><span className="mnodr_btn_tx">조회</span></button>
                            </div>
                        </div>
                        <input type="hidden" name="paymtMeans[5].paymtMeansCd" defaultValue="670" />
					</div>
					<div className="mnodr_form_sec ty3 pointUseDivArea">
						<p className="mnodr_tx_desc">U+ 라이프콕<span id="uplusPointBaseAmt"></span></p>
						<div className="mnodr_form_cont">
							<div className="mnodr_inp_btn_grp">
                                <span className="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputMode="numeric" id="uplusPointUseInput" name="paymtMeans[6].amt" defaultValue="" placeholder="0원" className="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="uplusPointSearchButton" className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking" data-pt-click="주문서|포인트|U+라이프콕_조회"><span className="mnodr_btn_tx">조회</span></button>
						    </div>
					    </div>
					    <input type="hidden" name="paymtMeans[6].paymtMeansCd" defaultValue="651" />
					</div>
                    <div className="mnodr_article_flex">
                        <button type="button" className="mnodr_charge_btn payTracking" data-pt-click="주문서|포인트|신세계상품권_SSGMONEY_충전" id="ssgMoneyConvertButton">
                            <span className="mnodr_tx_desc2"><strong>신세계상품권으로 SSG MONEY를 충전할 수 있어요.</strong></span>
                            <span className="mnodr_ic_arr"></span>
                        </button>
                    </div>
                </div>
                <div className="mnodr_point_sec">
                    <div className="mnodr_form_sec ty3 mnodr_acdo_toggle ty_depth2">
                        <div className="mnodr_form_cont">
                            <span className="mnodr_chk">
                                <input type="checkbox" id="shinsegaePointCardSavingCheckbox" className="blind payTracking pointSavingCheckbox" data-pt-click="주문서|포인트|신세계포인트 카드 적립_체크" defaultChecked="" />
                                <label htmlFor="shinsegaePointCardSavingCheckbox">
                                    <span className="mnodr_tx_desc">신세계포인트 카드 적립</span>
                                </label>
                                <button type="button" id="shinsegaePointToggleButton" className="mnodr_acdo_btn mnodr_arrow_btn payTracking" data-pt-click="주문서|포인트|신세계포인트 카드 적립_펼침"><span className="blind">더보기</span></button>
                            </span>
                            <div className="mnodr_acdo_cont ty_toggle ty_depth2">
                                <div className="mnodr_point_dtl">
                                    <p className="mnodr_tx_desc">카드번호</p>
                                    <span className="mnodr_inp_txt">
                                        <input type="number" pattern="[0-9]*" inputMode="numeric" id="shinsegaePointCardNoInput" defaultValue="9350130365558203" placeholder="- 를 제외한 숫자만 입력해 주세요." className="pointSavingNoInput" maxLength="16" />
                                    </span>
                                    <ul className="mnodr_bullst ty5">
                                        <li>신세계·이마트 제휴카드 고객은 해당 카드로 결제하셔야 신세계포인트가 0.7% 적립됩니다. (단, 신세계씨티카드는 0.2%, 이마트KB/이마트SC /신세계SC 카드는 0.1% 적립)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</article>
        <article className="mnodr_article fullOrdArea" id="paymtMthdArticle">
            <div className="mnodr_article_head">
                <div className="mnodr_article_headlt">
                    <h2 className="mnodr_tx_tit">결제방법</h2>
                    <div className="mnodr_article_headbubble">
                        <p>주문더하기는 이전 주문과 같은 카드로만 결제할 수 있어요</p>
                    </div>
                    <span className="crdDcccc"></span>
                </div>
            </div>
            <label htmlFor="_mnodrpay_ssgpay" aria-expanded="false" aria-controls="_mnodrpay_ssgpay_cont" id="_mnodrpay_ssgpay_toggle" className="mnodr_ssgpay_acdotogglebtn">
                <div className="mnodr_ssgpay_acdohead">
                <span className="mnodr_ssgpay_acdocol">
                    <h3 className="mnodr_ssgpay_acdoheadtit">
                        <span className="mnodr_ssgpay_acdoheadtx">
                            <span className="mnodr_tx_ssgpay"><span className="blind">SSGPAY</span></span>
                            <span className="mnodr_tx_ssgpay_desc">카드</span>
                        </span>
                    </h3>
                </span>
                </div>
            </label>
            <label htmlFor="_mnodrpay_ssgpay_account" aria-expanded="false" aria-controls="_mnodrpay_ssgpay_account_cont" id="_mnodrpay_ssgpay_account_toggle" className="mnodr_ssgpay_acdotogglebtn" aria-selected="true">
                <div className="mnodr_ssgpay_acdohead">
                    <span className="mnodr_ssgpay_acdocol">
                        <h3 className="mnodr_ssgpay_acdoheadtit">
                            <span className="mnodr_ssgpay_acdoheadtx">
                                <span className="mnodr_tx_ssgpay"><span className="blind">SSGPAY</span></span>
                                <span className="mnodr_tx_ssgpay_desc">계좌</span>
                            </span>
                        </h3>
                    </span>
                 </div>
            </label>
            <label htmlFor="_mnodrpay_etc" aria-expanded="false" aria-controls="_mnodrpay_etc_cont" id="_mnodrpay_etc_toggle" className="mnodr_ssgpay_acdotogglebtn" aria-selected="true">
                <div className="mnodr_ssgpay_acdohead">
                <span className="mnodr_ssgpay_acdocol">
                    <h3 className="mnodr_ssgpay_acdoheadtit">
                        <span className="mnodr_ssgpay_acdoheadtx">일반결제</span>
                    </h3>
                </span>
                </div>
            </label>
        </article>
        <ul className="mnodr_article_list fullOrdArea">
            <li className="mnodr_article_item">
                <div className="mnodr_article_head">
                    <div className="mnodr_article_headlt">
                        <h2 className="mnodr_tx_tit">주문자 정보</h2>
                    </div>
                    <div className="mnodr_article_headrt">
                        <button type="button" className="mnodr_btn ty_grayline ty_xxs payTracking" data-pt-click="주문서|주문자정보|변경" name="btnShowTgtDiv" data-target-div="notiInfoDiv">변경</button>
                    </div>
                </div>
                <div className="mnodr_form_cont">
                    <dl className="mnodr_dl_desc">
                        <dt><span className="mnodr_tx_desc mnodr_tx_gray">주문자명</span></dt>
                        <dd>
                            <p className="mnodr_tx_desc" id="ordpeNmStr">{purchaseData?.buyerName}</p>
                        </dd>
                    </dl>
                    <dl className="mnodr_dl_desc">
                        <dt><span className="mnodr_tx_desc mnodr_tx_gray">연락처</span></dt>
                        <dd>
                            <p className="mnodr_tx_desc" id="ordpeHpnoStr">{purchaseData?.buyerPhoneNumber}</p>
                        </dd>
                    </dl>
                    <dl className="mnodr_dl_desc">
                        <dt><span className="mnodr_tx_desc mnodr_tx_gray">이메일</span></dt>
                        <dd>
                            <p className="mnodr_tx_desc" id="ordpeEmailStr">{purchaseData?.buyerEmail}</p>
                        </dd>
                    </dl>
                    <dl className="mnodr_dl_desc">
                        <dt><span className="mnodr_tx_desc mnodr_tx_gray">품절시 환불</span></dt>
                        <dd>
                            <p className="mnodr_tx_desc">
                                <span id="rfdMthdStrArea">주문 시 결제수단으로 환불받기</span>
                                    </p>
                        </dd>
                        <dd>
                        {/* <span className="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_10" name="ord.rfdMthdCd" defaultValue="10" defaultChecked="checked" />
                            <label htmlFor="rdoRefund_10">주문 시 결제수단으로 환불받기</label>
                        </span>
                            <span className="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_20" name="ord.rfdMthdCd" defaultValue="20" />
                            <label htmlFor="rdoRefund_20">SSG MONEY로 자동환불 받기</label>
                        </span>
                            <span className="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_30" name="ord.rfdMthdCd" defaultValue="30" />
                            <label htmlFor="rdoRefund_30">고객계좌로 환불받기</label>
                        </span> */}
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
        <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
                <div className="mnodr_article_headlt">
                    <h2 className="mnodr_tx_tit">배송 요청사항</h2>
                </div>
                <div className="mnodr_article_headrt">
                    <button type="button" className="mnodr_btn ty_grayline ty_xxs payTracking" data-pt-click="주문서|배송요청사항|변경" name="btnShowTgtDiv" data-target-div="rcptInfoDiv_1">변경</button>
                </div>
            </div>
            <div className="mnodr_article_cont ty_pull">
                <div className="mnodr_form_sec">
                    <dl className="mnodr_dl_desc">
                        <dt><span className="mnodr_tx_desc mnodr_tx_gray">택배배송 요청사항</span></dt>
                        <dd>
                            <p className="mnodr_tx_desc" id="deliShppMemoTxt_0">배송 전에 연락주세요</p>
                            <input type="hidden" id="deliShppMemo_0" name="shpploc[0].deliShppMemo" defaultValue="배송 전에 연락주세요" />
                        </dd>
                    </dl>
                    </div>
            </div>
        </article>
        <article className="mnodr_article">
		    <div className="mnodr_article_head">
			    <div className="mnodr_article_headlt">
					<h2 className="mnodr_tx_tit">택배배송</h2>
			    </div>
		    </div>
		    <div className="mnodr_article_cont ty_pull">
			    <div className="mnodr_form_sec">
					<div className="mnodr_unit">
                        {
                            purchaseData?.pdtList?.map((item)=>{
                                return <OrderItem key={item.listIndex} Item={item} />
                            })
                        }
			        </div>
			    </div>
		    </div>
	    </article>
        <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg ty_space_lg">
			<div className="mcom_mall_wrap v2">
				<div className="mcom_noti_wrap">
					<p className="mcom_noti_txt">㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는 오픈마켓 상품이 포함되어 있습니다.</p>
                    <p className="mcom_noti_txt">오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.</p>
                </div>
			</div>
		</div>
        <button type="button" className="mnodr_btn ty_point ty_m payTracking" data-pt-click="주문서|웹바|결제하기" name="processPaymtButton">
            <span className="mnodr_btn_tx">
                <em className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">
                    {
                        totalPrice(purchaseData?.pdtList)
                    }
                </em>
                <span className="ssg_tx">원</span> 
                결제하기
            </span>
		</button>
      </div>
   );
}

export default Order;