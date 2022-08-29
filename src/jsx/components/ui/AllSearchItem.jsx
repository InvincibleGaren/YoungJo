import React from 'react';
import { Link } from 'react-router-dom';
import "../../../css/components/AllSearchItem.css"

function AllSearchItem({Item}) {

    console.log(Item)

    return ( 
        <li id="AllSearchItem" classNameName="cmitem_grid_item" data-react-comm-type="srchwd" data-react-comm-id="소고기" data-react-srch-rsv-div-cd="10" data-react-tarea-cd="00001_000000010" data-observable-unit="false" data-react-salestr-no="" data-react-site-no="">
            <div className="mnsditem_unit" data-react-unit-type="item" data-observable-item="true" data-react-unit-id="1000052597055" data-react-unit-inx="0" data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id="" data-react-advert-tgt-id="" data-react-advert-bilng-type-cd="" data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd="" data-react-advert-advert-acct-grp-id="" data-react-unit-text="">
                <div className="mnsditem_helper">
                    <div className="mnsditem_helper_el mnsditem_bdg_holiday"><span>명절</span></div>
                </div>
                <div className="mnsditem_goods " data-unittype="item" data-advertacctid="" data-advertbidid="" data-adtgtid="1000052597055" data-adidx="1" data-advertbilngtypecd="" data-advertkindcd="" data-advertextensterydivcd="" data-prioradvertacctgrpid="">
                    <div className="mnsditem_thmb">
                        <Link to={`/product/${Item.boardId}`} className="mnsditem_thmb_link clickable">
                            <div className="mnsditem_thmb_imgbx">
                                <img src={Item.mainImgUrl} data-src="//sitem.ssgcdn.com/55/70/59/item/1000052597055_i1_500.jpg" alt="2022년 추석 LA갈비 외 인기 축산선물 세트 모음전" onerror="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=500&amp;h=500&amp;t=1ec79c3423d0d0bb5cfce1a84b8605496eddb340'" className="ssg_lazy mnsditem_thmb_img loaded" data-ll-status="loaded" />
                            </div>
                        </Link>
                        <div className="mnsditem_btn_like">
                            <span className="cmlike _js_cmlike interestIt">
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
                                <button className="cmlike_btn _js_cmlike_btn clickable" data-position="clip" data-react-tarea-dtl-cd="t00003">
                                    <span className="cmlike_ico">
                                        <i className="cmlike_primary_m"></i>
                                        <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                                        <span className="sr_on"><span className="blind">관심상품 등록</span></span>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="mnsditem_detail">	
                        <div className="mnsditem_maininfo">
                            <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000052597055&amp;siteNo=6004&amp;salestrNo=6005&amp;tlidSrchWd=소고기&amp;srchPgNo=1&amp;src_area=slist" className="mnsditem_maininfo_link">
                                <div className="mnsditem_tit">
                                    <span className="cm_mall_text">
                                        <i className="sm">{Item.salesSite}</i>
                                    </span>
                                    <span className="mnsditem_goods_brand">{Item.brand}</span>
                                    <span className="mnsditem_goods_tit">{Item.title}</span>
                                </div>
                                <div className="mnsditem_pricewrap">
                                    <div className="mnsditem_price_row mnsditem_ty_newpr">
                                        <div className="new_price">
                                            <span className="blind">판매가격</span>
                                            <em className="ssg_price">{Item.minPrice}</em>
                                            <span className="ssg_tx">원<span className="cm_tx_opt">~</span></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mnsditem_sideinfo">
                            <div className="mnsditem_review">
                                <div className="mnsditem_review_score">
                                    <i className="icon ty_xs icon_star_fill" aria-hidden="true"></i>
                                    <span className="blind">상품평점 5점 만점에</span>
                                    4.5
                                </div>
                                <div className="mnsditem_review_num">
                                    <span className="blind">상품평 개수</span>
                                    {Item.totalReviewQty}건
                                </div>
                            </div>
                            <div className="mnsditem_taglist">
                                <span className="mnsditem_tag">해피라운지</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </li>
    );
}

export default AllSearchItem;
