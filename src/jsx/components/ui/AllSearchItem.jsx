import React from 'react';

import "../../../css/components/AllSearchItem.css"

function AllSearchItem({Item}) {
    return ( 
        <li id="AllSearchItem" className="cmitem_grid_item" data-react-comm-type="srchwd" data-react-comm-id="소고기" data-react-srch-rsv-div-cd="10" data-react-tarea-cd="00001_000000010" data-observable-unit="false" data-react-salestr-no="" data-react-site-no="">
            <div class="mnsditem_unit" data-react-unit-type="item" data-observable-item="true" data-react-unit-id="1000052597055" data-react-unit-inx="0" data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id="" data-react-advert-tgt-id="" data-react-advert-bilng-type-cd="" data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd="" data-react-advert-advert-acct-grp-id="" data-react-unit-text="">
                <div class="mnsditem_helper">
                    <div class="mnsditem_helper_el mnsditem_bdg_holiday"><span>명절</span></div>
                </div>
                <div class="mnsditem_goods " data-unittype="item" data-advertacctid="" data-advertbidid="" data-adtgtid="1000052597055" data-adidx="1" data-advertbilngtypecd="" data-advertkindcd="" data-advertextensterydivcd="" data-prioradvertacctgrpid="">
                    <div class="mnsditem_thmb">
                        <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000052597055&amp;siteNo=6004&amp;salestrNo=6005&amp;tlidSrchWd=소고기&amp;srchPgNo=1&amp;src_area=slist" class="mnsditem_thmb_link clickable" data-info="1000052597055" data-index="0" data-position="view" data-react-tarea-dtl-cd="t00001">
                            <div class="mnsditem_thmb_imgbx">
                                <img src={Item.mainImgUrl} data-src="//sitem.ssgcdn.com/55/70/59/item/1000052597055_i1_500.jpg" alt="2022년 추석 LA갈비 외 인기 축산선물 세트 모음전" onerror="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=500&amp;h=500&amp;t=1ec79c3423d0d0bb5cfce1a84b8605496eddb340'" class="ssg_lazy mnsditem_thmb_img loaded" data-ll-status="loaded" />
                            </div>
                        </a>
                        <div class="mnsditem_btn_like">
                            <span class="cmlike _js_cmlike interestIt">
                                <input type="hidden" name="attnDivCd" value="10" />
                                <input type="hidden" name="attnDivDtlCd" value="10" />
                                <input type="hidden" name="siteNo" value="6004" />
                                <input type="hidden" name="attnTgtIdnfNo1" value="1000052597055" />
                                <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                                <input type="hidden" name="uitemId" value="00000" />
                                <input type="hidden" name="notiTitle" value="2022년 추석 LA갈비 외 인기 축산선물 세트 모음전" />
                                <input type="hidden" name="notiImgPath" value="//sitem.ssgcdn.com/55/70/59/item/1000052597055_i1_500.jpg" />
                                <input type="hidden" name="checked" value="N" />
                                <input type="hidden" name="useForcedSsgYn" value="N" />
                                <button class="cmlike_btn _js_cmlike_btn clickable" data-position="clip" data-react-tarea-dtl-cd="t00003">
                                    <span class="cmlike_ico">
                                        <i class="cmlike_primary_m"></i>
                                        <span class="sr_off"><span class="blind">관심상품 취소</span></span>
                                        <span class="sr_on"><span class="blind">관심상품 등록</span></span>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="mnsditem_detail">	
                        <div class="mnsditem_maininfo">
                            <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000052597055&amp;siteNo=6004&amp;salestrNo=6005&amp;tlidSrchWd=소고기&amp;srchPgNo=1&amp;src_area=slist" class="mnsditem_maininfo_link">
                                <div class="mnsditem_tit">
                                    <span class="cm_mall_text">
                                        <i class="sm">{Item.salesSite}</i>
                                    </span>
                                    <span class="mnsditem_goods_brand">{Item.brand}</span>
                                    <span class="mnsditem_goods_tit">{Item.title}</span>
                                </div>
                                <div class="mnsditem_pricewrap">
                                    <div class="mnsditem_price_row mnsditem_ty_newpr">
                                        <div class="new_price">
                                            <span class="blind">판매가격</span>
                                            <em class="ssg_price">{Item.minPrice}</em>
                                            <span class="ssg_tx">원<span class="cm_tx_opt">~</span></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mnsditem_sideinfo">
                            <div class="mnsditem_review">
                                <div class="mnsditem_review_score">
                                    <i class="icon ty_xs icon_star_fill" aria-hidden="true"></i>
                                    <span class="blind">상품평점 5점 만점에</span>
                                    4.5
                                </div>
                                <div class="mnsditem_review_num">
                                    <span class="blind">상품평 개수</span>
                                    2,436건
                                </div>
                            </div>
                            <div class="mnsditem_taglist">
                                <span class="mnsditem_tag">해피라운지</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </li>
    );
}

export default AllSearchItem;
