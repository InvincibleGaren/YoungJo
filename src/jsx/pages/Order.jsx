import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetailInfo from '../components/ui/product/ProductDetailInfo';
import ProductExtraInfo from '../components/ui/product/ProductExtraInfo';
import ProductHeader from '../components/ui/product/ProductHeader';
import Review from '../components/ui/Review';
import ProductBottomButton from '../components/ui/product/ProductBottomButton';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Server from "../../datas/Server.js";
import HeaderTop from '../components/ui/HeaderTop';
import MemberHeader from '../components/ui/MemberHeader';


function Order() {
   const [productData, setProductData] = useState();
   const [likeCheck, setLikeCheck] = useState(false);

   const pathname = useParams();

//    useEffect(()=>{

//       const url = `${Server.baseUrl}api/pdtBoard/detail/${pathname.productId}`;
//       const token = sessionStorage.getItem("login");
//       const config = {timeout:1000, headers:{authentication: token}}
      
//       axios.get(url, config)
//       .then(Response => {
//          console.log(Response.data);
//          setProductData(Response.data.data);
//       })
//       .catch(error => {
//          console.log(error)
//       })
//    }, [likeCheck])

    return ( 
      <div className='Order'>
        <MemberHeader title="결제하기" />
        <ul class="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
            <li class="mnodr_article_item ordPageShpplocArea fullOrdArea">
	            <article class="mnodr_article mnodr_delivery_infos">
		            <div class="mnodr_article_head">
			            <div class="mnodr_article_headlt">
				            <h2 class="mnodr_tx_tit">배송지 : 박찬우</h2>
			            </div>
			            <div class="mnodr_article_headrt">
				            <button type="button" class="mnodr_btn ty_grayline ty_xxs payTracking" data-pt-click="주문서|배송지|변경" name="btnShowTgtDiv" data-target-div="shpplocInfoDiv_1">변경</button>
			            </div>				
			        </div>
		            <div class="mnodr_article_cont ty_pull">
			            <div class="mnodr_form_sec">
				            <p class="mnodr_tx_desc">[46297] 부산 금정구 식물원로36-16, 101호 (장전동, 부광그린빌라)</p>
                            <div class="mnodr_tx_wrap ty_space">
                                <span class="mnodr_tx_size2 mnodr_tx_gray">
                                    <span id="dispRcptpeNm_0">박찬우</span> 
                                    / 
                                    <span id="dispHpno_0">010-3012-0712</span>
                                </span>
                                <span class="mnodr_chk">
                                    <input type="checkbox" id="relaxNoUseYn_0" name="shpploc[0].relaxNoUseYn" value="Y" class="blind payTracking" data-pt-click="|배송지|안심번호 사용" />
                                    <label for="relaxNoUseYn_0">
                                        <span class="mnodr_chk_tx">안심번호 사용</span>
                                    </label>
                                </span>
                            </div>
				        </div>
		            </div>
	            </article>
            </li>
        </ul>
        <article class="mnodr_article" id="discountBenefitArticle">
            <ul class="mnodr_article_cont">
                <li class="mnodr_article_item">
                    <div class="mnodr_article_head">
                        <div class="mnodr_article_headlt">
                            <h2 class="mnodr_tx_tit">할인혜택</h2>
                        </div>
                        <input type="hidden" id="totBsellAmt" value="0" />
                    </div>
                    <div class="mnodr_article_cont">
                        <div class="mnodr_discount_sec ty_space discountBenefitDtlArea">
                            <dl class="mnodr_priceitem ty_narrow">
                                <dt>
                                    <span class="mnodr_priceitem_stit">상품할인</span>
                                    <button type="button" class="mnodr_btn_info_detail modal-fix-open payTracking" data-pt-click="주문서|할인혜택|상품할인금액_상세" data-layer-target="#mnodr_modal_discount_price">
                                        <i class="mnodr_ic ic_info_detail">
                                            <span class="blind"></span>
                                        </i>
                                    </button>
                                </dt>
                                <dd>
                                    <span class="mnodr_tx_primary">- <em class="ssg_price dispTotItemEnuriWithout10Amt">10,440</em><span class="ssg_tx">원</span></span>
                                </dd>
                            </dl>
                            <dl class="mnodr_priceitem fullOrdArea">
                                <dt><span class="mnodr_priceitem_stit">결제할인 (쿠폰 0장 보유)</span></dt>
                                <dd>
                                    <span class="mnodr_tx_primary">- <em class="ssg_price">0</em><span class="ssg_tx">원</span></span>
                                </dd>
                            </dl>

                            <ul class="mnodr_paydetail_sublst fullOrdArea cpnApplyDtlArea"></ul>
                            <div class="fullOrdArea">
                                <p class="mnodr_coupon_desc mnodr_tx_size2 ssgpaySecCpnGuideArea">SSGPAY전용쿠폰은 SSG<span class="mnodr_tx_point">PAY</span>로 결제 시 자동 적용됩니다.</p>
                                <p class="mnodr_coupon_desc mnodr_tx_size2 ssgcomCrdShppcstCpnGuideArea"><span class="mnodr_tx_point">SSG.COM카드 배송비 쿠폰은 해당 카드 선택시 자동 적용됩니다.</span></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
        {/* 포인트 사용 */}
        <article id="pointArticle" class="mnodr_article mnodr_acdo_toggle fullOrdArea">
			<div class="mnodr_article_head mnodr_acdo_btn payTracking" data-pt-click="주문서|포인트|펼침" id="pointToggleButton">
				<div class="mnodr_article_headlt">
					<h2 class="mnodr_tx_tit">포인트 <span class="totPointAmtArea"> : <span id="totPointAmt">0</span>원 보유</span></h2>
				</div>
                <div class="mnodr_article_headrt">
                    <button type="button" class="mnodr_toggle_btn"><span class="blind">포인트사용 보기</span></button>
                </div>
			</div>
            <div class="mnodr_article_head_subtx crdDcApplyGuideArea">
                <p class="mnodr_tx_desc">
                    <span class="mnodr_tx_gray">카드할인혜택이 적용되어 포인트 사용이 불가합니다.</span>
                </p>
            </div>
            <div class="mnodr_article_head_subtx mnodr_pt_desc">
                <span class="mnodr_tx_desc mnodr_tx_gray">SSG MONEY, 신세계포인트 외 제휴포인트</span>
            </div>
            <div class="mnodr_article_cont mnodr_acdo_cont ty_toggle">
                <div class="mnodr_point_sec">
                    <div class="mnodr_form_sec ty10 pointUseDivArea">
                        <p class="mnodr_tx_desc">
                            SSG MONEY
                            <span id="ssgMoneyBaseAmt"></span>
                        </p>
                        <div class="mnodr_form_cont">
                            <div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="ssgMoneyUseInput" name="paymtMeans[1].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" />
                                </span>
                                <button type="button" id="ssgMoneyUseAllButton" class="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|SSG MONEY_전액사용"><span class="mnodr_btn_tx">전액사용</span></button>
                            </div>
                            <ul class="mnodr_bullst ty1">
                                <li class="ssgMoneyAuthGuideArea">10만원 초과 사용시 SSGPAY에 가입/인증이 필요합니다.</li>
                                <li class="ssgMoneyMaxValGuideArea">간편가입회원은 최대 10만원까지 이용가능합니다.</li>
                                <li class="ssgMoneyImpossibleGuideArea">※ 안정적인 서비스 제공을 위해 시스템 점검중입니다. <span class="ssgMoneyImpossibleDtsArea">06/01 10:00</span>까지 SSG MONEY 사용이 잠시 불가하니 양해부탁드립니다.</li>
                            </ul>
						</div>
						<input type="hidden" name="paymtMeans[1].paymtMeansCd" value="617" />
					</div>
					<div class="mnodr_form_sec ty10 pointUseDivArea ssgVoucherArea">
						<p class="mnodr_tx_desc">SSG VOUCHER<span id="ssgVoucherBaseAmt"></span></p>
                        <div class="mnodr_form_cont">
                            <div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="ssgVoucherUseInput" name="paymtMeans[7].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" />
                                </span>
                                <button type="button" id="ssgVoucherUseAllButton" class="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|SSG VOUCHER_전액사용"><span class="mnodr_btn_tx">전액사용</span></button>
                            </div>
                        </div>
						<input type="hidden" name="paymtMeans[7].paymtMeansCd" value="618" />
					</div>
					<div class="mnodr_form_sec ty10 pointUseDivArea">
						<p class="mnodr_tx_desc">신세계포인트<span id="shinsegaePointBaseAmt"></span></p>
                        <div class="mnodr_form_cont">
                            <div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="shinsegaePointUseInput" name="paymtMeans[2].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="shinsegaePointSearchButton" class="mnodr_btn mnodr_inp_btn modal-alert-open" data-layer-target="#_layerAlertPointCard" data-no-click-outside=""><span class="mnodr_btn_tx">사용</span></button>
                                <button type="button" id="shinsegaePointUseAllButton" class="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking" data-pt-click="주문서|포인트|신세계포인트_전액사용" ><span class="mnodr_btn_tx">전액사용</span></button>
                            </div>
                            <ul class="mnodr_bullst ty1">
                                <li class="shinsegaePointImpossibleGuideArea">※ 안정적인 서비스 제공을 위해 시스템 점검중입니다. <span class="shinseagePointImpossibleDtsArea">06/01 10:00</span>까지 신세계포인트 사용이 잠시 불가하니 양해부탁드립니다.</li>
                            </ul>
                        </div>
                        <input type="hidden" name="paymtMeans[2].paymtMeansCd" value="600" />
					</div>
					<div class="mnodr_form_sec ty10 pointUseDivArea">
						<p class="mnodr_tx_desc">OK 캐쉬백<span id="okCashBagBaseAmt"></span></p>
                        <div class="mnodr_form_cont">
                            <div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="okCashBagUseInput" name="paymtMeans[4].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="okCashBagSearchButton" class="mnodr_btn mnodr_inp_btn modal-alert-open payTracking" data-pt-click="주문서|포인트|OK캐쉬백_조회" data-layer-target="#_layerPointokCashbag"><span class="mnodr_btn_tx">조회</span></button>
                                <button type="button" id="okCashBagUseAllButton" class="mnodr_btn mnodr_inp_btn pointUseAllButton"><span class="mnodr_btn_tx">전액사용</span></button>
                            </div>
                        </div>
                        <input type="hidden" name="paymtMeans[4].paymtMeansCd" value="660" />
					</div>
					<div class="mnodr_form_sec ty10 pointUseDivArea">
						<p class="mnodr_tx_desc">PAYCO포인트<span id="paycoPointBaseAmt"></span></p>
                        <div class="mnodr_form_cont">
                            <div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="paycoPointUseInput" name="paymtMeans[5].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="paycoPointSearchButton" class="mnodr_btn mnodr_inp_btn pointSearchButton payTracking" data-pt-click="주문서|포인트|PAYCO포인트_조회"><span class="mnodr_btn_tx">조회</span></button>
                            </div>
                        </div>
                        <input type="hidden" name="paymtMeans[5].paymtMeansCd" value="670" />
					</div>
					<div class="mnodr_form_sec ty3 pointUseDivArea">
						<p class="mnodr_tx_desc">U+ 라이프콕<span id="uplusPointBaseAmt"></span></p>
						<div class="mnodr_form_cont">
							<div class="mnodr_inp_btn_grp">
                                <span class="mnodr_inp_txt">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" id="uplusPointUseInput" name="paymtMeans[6].amt" value="" placeholder="0원" class="ty_txt_right pointUseInput" disabled="" />
                                </span>
                                <button type="button" id="uplusPointSearchButton" class="mnodr_btn mnodr_inp_btn pointSearchButton payTracking" data-pt-click="주문서|포인트|U+라이프콕_조회"><span class="mnodr_btn_tx">조회</span></button>
						    </div>
					    </div>
					    <input type="hidden" name="paymtMeans[6].paymtMeansCd" value="651" />
					</div>
                    <div class="mnodr_article_flex">
                        <button type="button" class="mnodr_charge_btn payTracking" data-pt-click="주문서|포인트|신세계상품권_SSGMONEY_충전" id="ssgMoneyConvertButton">
                            <span class="mnodr_tx_desc2"><strong>신세계상품권으로 SSG MONEY를 충전할 수 있어요.</strong></span>
                            <span class="mnodr_ic_arr"></span>
                        </button>
                    </div>
                </div>
                <div class="mnodr_point_sec">
                    <div class="mnodr_form_sec ty3 mnodr_acdo_toggle ty_depth2">
                        <div class="mnodr_form_cont">
                            <span class="mnodr_chk">
                                <input type="checkbox" id="shinsegaePointCardSavingCheckbox" class="blind payTracking pointSavingCheckbox" data-pt-click="주문서|포인트|신세계포인트 카드 적립_체크" checked="" />
                                <label for="shinsegaePointCardSavingCheckbox">
                                    <span class="mnodr_tx_desc">신세계포인트 카드 적립</span>
                                </label>
                                <button type="button" id="shinsegaePointToggleButton" class="mnodr_acdo_btn mnodr_arrow_btn payTracking" data-pt-click="주문서|포인트|신세계포인트 카드 적립_펼침"><span class="blind">더보기</span></button>
                            </span>
                            <div class="mnodr_acdo_cont ty_toggle ty_depth2">
                                <div class="mnodr_point_dtl">
                                    <p class="mnodr_tx_desc">카드번호</p>
                                    <span class="mnodr_inp_txt">
                                        <input type="number" pattern="[0-9]*" inputmode="numeric" id="shinsegaePointCardNoInput" value="9350130365558203" placeholder="- 를 제외한 숫자만 입력해 주세요." class="pointSavingNoInput" maxlength="16" />
                                    </span>
                                    <ul class="mnodr_bullst ty5">
                                        <li>신세계·이마트 제휴카드 고객은 해당 카드로 결제하셔야 신세계포인트가 0.7% 적립됩니다. (단, 신세계씨티카드는 0.2%, 이마트KB/이마트SC /신세계SC 카드는 0.1% 적립)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</article>
        <article class="mnodr_article fullOrdArea" id="paymtMthdArticle">
            <div class="mnodr_article_head">
                <div class="mnodr_article_headlt">
                    <h2 class="mnodr_tx_tit">결제방법</h2>
                    <div class="mnodr_article_headbubble">
                        <p>주문더하기는 이전 주문과 같은 카드로만 결제할 수 있어요</p>
                    </div>
                    <span class="crdDcccc"></span>
                </div>
            </div>
            <label for="_mnodrpay_ssgpay" aria-expanded="false" aria-controls="_mnodrpay_ssgpay_cont" id="_mnodrpay_ssgpay_toggle" class="mnodr_ssgpay_acdotogglebtn">
                <div class="mnodr_ssgpay_acdohead">
                <span class="mnodr_ssgpay_acdocol">
                    <h3 class="mnodr_ssgpay_acdoheadtit">
                        <span class="mnodr_ssgpay_acdoheadtx">
                            <span class="mnodr_tx_ssgpay"><span class="blind">SSGPAY</span></span>
                            <span class="mnodr_tx_ssgpay_desc">카드</span>
                        </span>
                    </h3>
                </span>
                </div>
            </label>
            <label for="_mnodrpay_ssgpay_account" aria-expanded="false" aria-controls="_mnodrpay_ssgpay_account_cont" id="_mnodrpay_ssgpay_account_toggle" class="mnodr_ssgpay_acdotogglebtn" aria-selected="true">
                <div class="mnodr_ssgpay_acdohead">
                    <span class="mnodr_ssgpay_acdocol">
                        <h3 class="mnodr_ssgpay_acdoheadtit">
                            <span class="mnodr_ssgpay_acdoheadtx">
                                <span class="mnodr_tx_ssgpay"><span class="blind">SSGPAY</span></span>
                                <span class="mnodr_tx_ssgpay_desc">계좌</span>
                            </span>
                        </h3>
                    </span>
                 </div>
            </label>
            <label for="_mnodrpay_etc" aria-expanded="false" aria-controls="_mnodrpay_etc_cont" id="_mnodrpay_etc_toggle" class="mnodr_ssgpay_acdotogglebtn" aria-selected="true">
                <div class="mnodr_ssgpay_acdohead">
                <span class="mnodr_ssgpay_acdocol">
                    <h3 class="mnodr_ssgpay_acdoheadtit">
                        <span class="mnodr_ssgpay_acdoheadtx">일반결제</span>
                    </h3>
                </span>
                </div>
            </label>
        </article>
        <ul class="mnodr_article_list fullOrdArea">
            <li class="mnodr_article_item">
                <div class="mnodr_article_head">
                    <div class="mnodr_article_headlt">
                        <h2 class="mnodr_tx_tit">주문자 정보</h2>
                    </div>
                    <div class="mnodr_article_headrt">
                        <button type="button" class="mnodr_btn ty_grayline ty_xxs payTracking" data-pt-click="주문서|주문자정보|변경" name="btnShowTgtDiv" data-target-div="notiInfoDiv">변경</button>
                    </div>
                </div>
                <div class="mnodr_form_cont">
                    <dl class="mnodr_dl_desc">
                        <dt><span class="mnodr_tx_desc mnodr_tx_gray">주문자명</span></dt>
                        <dd>
                            <p class="mnodr_tx_desc" id="ordpeNmStr">박찬우</p>
                        </dd>
                    </dl>
                    <dl class="mnodr_dl_desc">
                        <dt><span class="mnodr_tx_desc mnodr_tx_gray">연락처</span></dt>
                        <dd>
                            <p class="mnodr_tx_desc" id="ordpeHpnoStr">010-3012-0712</p>
                        </dd>
                    </dl>
                    <dl class="mnodr_dl_desc">
                        <dt><span class="mnodr_tx_desc mnodr_tx_gray">이메일</span></dt>
                        <dd>
                            <p class="mnodr_tx_desc" id="ordpeEmailStr">9cksqhdel3@naver.com</p>
                        </dd>
                    </dl>
                    <dl class="mnodr_dl_desc">
                        <dt><span class="mnodr_tx_desc mnodr_tx_gray">품절시 환불</span></dt>
                        <dd>
                            <p class="mnodr_tx_desc">
                                <span id="rfdMthdStrArea">주문 시 결제수단으로 환불받기</span>
                                    </p>
                        </dd>
                        <dd>
                        {/* <span class="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_10" name="ord.rfdMthdCd" value="10" checked="checked" />
                            <label for="rdoRefund_10">주문 시 결제수단으로 환불받기</label>
                        </span>
                            <span class="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_20" name="ord.rfdMthdCd" value="20" />
                            <label for="rdoRefund_20">SSG MONEY로 자동환불 받기</label>
                        </span>
                            <span class="codr_inp_rdo">
                            <input type="radio" id="rdoRefund_30" name="ord.rfdMthdCd" value="30" />
                            <label for="rdoRefund_30">고객계좌로 환불받기</label>
                        </span> */}
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
      </div>
   );
}

export default Order;