import React from 'react';

function Product() {
    return ( 
        <>
        <h1>고정된 상품정보</h1>
         {/* <div className="mndtl_header" data-react-tarea-cd="00006_000000027">
            <div className="mndtl_lft">
               <a href="javascript:history.back();" className="mndtl_btn_back clickable" target="_parent">
                  <span className="blind">이전 페이지</span>
               </a>
            </div>
            <div className="mndtl_cntr">
               <div className="mndtl_unit_tit" aria-hidden="true">
                  <strong className="mndtl_unit_brd">자연맛남</strong>
                  <span className="mndtl_unit_name">[자연맛남] 22년 첫수확 해남 첫사랑 꿀 밤고구마 3kg (중상/60-100g)</span>
               </div>
               <div className="mndtl_prdtab" aria-hidden="false">
                  <ul className="mndtl_prdtab_list">
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;상세정보탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailinfo" target="">상세</a>
                     </li>
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;고객리뷰탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailreview" target="">리뷰<span className="mndtl_prdtab_num">543</span></a>
                     </li>
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;QnA탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailqna" target="">Q&amp;A<span className="mndtl_prdtab_num">17</span></a>
                     </li>
                     <!--  몰탭 광고 상품 비노출 처리 -->
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;추천상품탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailgoods" target="">추천</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="mndtl_rgt">
               <div className="mndtl_unit_thmb">
                  <a href="javascript:window.scrollTo(0,0)" target="_parent">
                     <div className="mndtl_unit_img" style="background-image:url('https://sitem.ssgcdn.com/07/70/59/item/1000040597007_i1_30.jpg')"></div>
                  </a>
               </div>
            </div>
         </div> */}

         <h1>이미지 슬라이드</h1>
         <img width="100%" src="https://sitem.ssgcdn.com/07/70/59/item/1000040597007_i1_750.jpg" alt="대표이미지" />

         <div className="mndtl_sec mndtl_prd_wrap" data-react-tarea-cd="00006_000000005">
            {/* <!-- 상단 배너 --> */}
            <div className="mndtl_mall">
               <div className="mndtl_mall_badge">
                  <span className="cm_mall_text">
                     <i className="sm">신세계몰</i>
                  </span>
                  {/* <!-- [D] 해피라운지 : ty_happyvirus, 오반장 : ty_obanjang, 점포행사 : ty_store, 딜 : ty_deal 클래스 추가 -->
                  <!--  몰탭 광고 상품 비노출 처리 --> */}
               </div>
               <div className="mndtl_mall_info">
               </div>
               <button type="button" className="mndtl_btn_share modal-layer-open" data-layer-target=".cdtl_modal_share" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;:&quot;상품_공유하기&quot;}]">
                  <i className="mndtl_ic mndtl_ic_share clickable" data-react-tarea-dtl-cd="t00060"></i>
                  <span className="blind">공유</span>
               </button>
            </div>
            
            {/* <!-- 상품가격 정보노출 --> */}
            <div className="mndtl_prd_info">
               <h2 className="mndtl_prd_title" data-react-unit-type="brand" data-react-unit-id="3000026360">
                  {/* <!--  몰탭 광고 상품 비노출 처리 --> */}
                  <a href="/mall/disp/brandMain.ssg?brandId=3000026360&amp;ctgId=6000139021&amp;_mpop=new" className="mndtl_prdtit_brand clickable" data-react-tarea-dtl-cd="t00053" target="_parent">자연맛남</a>
                  <span className="mndtl_prdtit_name">[자연맛남] 22년 첫수확 해남 첫사랑 꿀 밤고구마 3kg (중상/60-100g)</span>
               </h2>
               <span className="mndtl_prd_origin">원산지 : 상세설명참조</span>
               <div className="mndtl_prd_price">
                  <div className="mndtl_prd_oldpr">
                     <div className="old_price">
                        <del><span className="blind">정상가격</span><em className="ssg_price">15,900</em><span className="ssg_tx">원</span></del>
                     </div>
                     <div className="mndtl_tx_sale mndtl_coupon">쿠폰포함</div>
                  </div>
                  <div className="mndtl_prd_newpr" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;할인내역&quot;}]">
                  <div className="mndtl_prd_per"><span className="blind">할인율</span><span>25%</span></div>
                  <div className="new_price">
                     <span className="blind">판매가격</span>
                     <em className="ssg_price">11,900</em><span className="ssg_tx">원<span className="cm_tx_opt"></span></span>
                  </div>
                  <a href="#" className="mndtl_ic mndtl_ic_qmark_new24 modal-layer-open clickable" data-react-tarea-dtl-cd="t00020" data-layer-target=".cdtl_modal_sale" target=""><span className="blind">가격 자세히보기</span></a>
               </div>
               <p className="mndtl_prd_unitpr">
                  100g당 가격
                  <em className="ssg_price">397</em><span className="ssg_tx">원</span>
               </p>
            </div>

            {/* <!-- 멤버십 적립 혜택 안내 -->
            <!-- 스마일클럽 배너 --> */}
            <div className="mndtl_smile_lst" data-react-tarea-cd="00006_000000242">
               <div className="mndtl_smile_type" data-react-unit-type="banr">
                  <a href="https://member.ssg.com/m/membership/gate.ssg" className="clickable" data-react-tarea="상품상세|멤버십_영역|배너클릭" data-react-tarea-dtl-cd="t00001" data-react-comm-type="item" data-react-comm-id="1000040597007" target="_parent">
                     <img className="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" alt="스마일 클럽 무료 체험" data-ll-status="loaded" srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" />
                  </a>
                  <p className="blind">스마일 클럽 무료 체험</p>
               </div>
               </div>
            </div>
            {/* <!-- //상품가격 정보노출 -->

            <!-- 할인 행사 알림 -->
            <!-- 상품할인쿠폰 -->
            <!-- // 상품할인쿠폰 -->

            <!-- 라이브 --> */}
            <div id="itemLiveList" className="mndtl_live_v2" data-observable-unit="true" data-react-tarea-cd="00006_000000001">
               <div className="mndtl_live_wrap">
                  <ul className="mndtl_live_list">
                     <li>
                        <div className="mndtl_live_msg">
                           <p className="mndtl_live_tx">직접 써보신 분들이 많아요! 543명의 &nbsp;고객 리뷰가 있습니다</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>

            {/* <!-- 리뷰/쓱톡 --> */}
            <div className="mndtl_refer">
               <div className="mndtl_grade">
                     <span className="mndtl_star12">
                        <span className="mndtl_star12_per"></span>
                        <span className="blind">별점 5점 중 <em>4.3</em>점</span>
                     </span>
                     <a href="#" className="mndtl_grade_total modal-iframe-open clickable" data-react-tarea-dtl-cd="t00060" data-title="고객리뷰" data-tab-name="_detailreview_tab" data-layer-target="/mitem/reviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="">543건 리뷰<span className="blind">더보기</span></a>
                     {/* <!-- 포토&동영상 전체보기 --> */}
                     <a href="#" className="mndtl_mediall_more modal-iframe-open" data-title="포토&amp;동영상 전체(58)" data-tab-name="_detailimgreview_tab" data-layer-target="/mitem/imgReviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005" target="">
                        <div className="mndtl_mediall_summary_list">
                           <div className="mndtl_figure_thmb">
                              <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220801111229_1177967825_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=4cc3c257036796b93ed6bc283842c17bd5e01df5" />
                           </div>
                           <div className="mndtl_figure_thmb">
                              <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220729132326_1177703594_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=0bb4f441bb15d05ffa82306a7372fff1af9821d1" />
                           </div>
                           <div className="mndtl_figure_thmb">
                              <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220723114235_1177285261_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=1b09a1b8e6f1bbec6d8be304b52cebf4f708bd31" />
                           </div>
                        </div>
                     </a>
               </div>
            </div>
            {/* <!-- //리뷰/쓱톡 --> */}
         </div>

         <div className="mndtl_info_item">
				
				{/* <!-- 카드혜택 --> */}
         <div className="mndtl_info_card">
            <dl className="mndtl_info_dl mndtl_toggle">
               <dt>카드혜택가</dt>
               <dd>
                  <button type="button" className="mndtl_card_btnmore mndtl_toggle_btn">
                     <span className="mndtl_info_price">
                        <em className="ssg_price">10,948</em><span className="ssg_tx">원~</span>
                     </span>
                     <i className="mndtl_ic mndtl_ic_toggle">
                        <span className="blind">
                           <span className="sr_off">카드혜택가 펼치기</span>
                           <span className="sr_on">카드혜택가 접기</span>
                        </span>
                     </i>
                  </button>
                  <div className="mndtl_card_cont mndtl_toggle_cont">
                     <dl className="mndtl_info_dl mndtl_toggle">
                        <dt>
                           <span className="mndtl_card_name">SSG.COM EDITION2카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_1" target="">더보기</a>
                        </dt>
                        <dd>
                        <span className="mndtl_info_desc">
                           SSG PAY 7만원 이상 
                           결제 시 10,948원</span>
                        <a href="//event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005" className="mndtl_info_btn" target="_parent">
                           <span className="mndtl_info_tx">스마일클럽 가입비 지원 + ~12% 적립</span>
                           <i className="mndtl_ic_arr"></i>
                        </a>
                        </dd>
                     </dl>
                     <dl className="mndtl_info_dl mndtl_toggle">
                        <dt>
                           <span className="mndtl_card_name">SSG.COM 삼성카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_2" target="">더보기</a>
                        </dt>
                        <dd>
                           <span className="mndtl_info_desc">
                              결제 시 11,067원</span>
                           <a href="//m.ssg.com/event/eventDetail.ssg?promId=1100575267" className="mndtl_info_btn" target="_parent">
                              <span className="mndtl_info_tx">SSG MONEY 1% 적립 + 4% 추가 적립</span>
                              <i className="mndtl_ic_arr"></i>
                           </a>
                        </dd>
                     </dl>
                     <dl className="mndtl_info_dl mndtl_toggle">
                        <dt>
                           <span className="mndtl_card_name">신한, 신세계신한, 이마트신한카드</span>, 행사 <a href="#" className="mndtl_txt_btn modal-layer-open" data-layer-target="#id_cdtl_modal_cardbenefit_3" target="">더보기</a>
                        </dt>
                        <dd>
                           <span className="mndtl_info_desc">
                              SSG PAY 7만원 이상 
                              결제 시 11,067원
                           </span>
                        </dd>
                     </dl>
                  </div>
               </dd>
            </dl>
         </div>

         {/* <!-- 무이자할부 --> */}
         <div className="mndtl_info_installment">
            <dl className="mndtl_info_dl">
               <dt>무이자 할부</dt>
               <dd><a href="/mitem/mItemCardBenefit.ssg?itemId=1000040597007&amp;siteNo=6004&amp;_mpop=new" className="mndtl_txt_btn" target="_parent">카드사별 무이자 혜택</a></dd>
            </dl>
         </div>
         {/* <!-- 구매혜택 -->
         <!-- 배송정보 --> */}
         <div className="mndtl_info_delivery">
            {/* <!-- 배송유형 배너 -->
            <!-- //배송유형 배너 --> */}

            <dl className="mndtl_info_dl">
               <dt>배송정보</dt>
               <dd>
                  <em className="mndtl_info_tit">
                     택배배송</em>
                  <span className="mndtl_info_desc">
                     8/18(목)도착 예정<a href="javascript:;" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivery" target="_parent"><span className="blind">배송기간 안내 팝업</span></a>
                     <br/>
                        배송비 무료<br/>제주
                  <em className="ssg_price">3,000</em><span className="ssg_tx">원</span>,&nbsp;도서산간
                  <em className="ssg_price">4,000</em><span className="ssg_tx">원</span> 추가<a href="#" className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open" data-layer-target=".cdtl_modal_delivfee" target=""><span className="blind">제주/도서산간 배송비 안내 팝업</span></a></span>
                  
                  {/* <!--  몰탭 광고 상품 비노출 처리 --> */}
               </dd>
            {/* <!-- 프리미엄 배송 --> */}
            </dl>
         </div>
         {/* <!-- 구매유의사항 --> */}
         <div className="mndtl_info_note"></div>
         {/* <!--  몰탭 광고 상품 비노출 처리 -->
         <!-- 혜택상품정보 --> */}
         </div>

         <div className="mndtl_sec_caution_text mndtl_tx_point">
            <h3 className="mndtl_caution_tit">직거래 유도 주의 안내</h3>
            <div className="mndtl_caution_desc"> 
               판매자가 쓱톡/문자 등을 이용하여 <br/> 
               현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고<br/> 
               SSG.COM 고객센터로 신고 해 주시기 바랍니다. 
            </div>
         </div>

         <div className="mndtl_sec_subject">
            <h3 className="mndtl_sec_tit">상세정보</h3>
         </div>

         <div className="mndtl_detail_info">
            <ul className="mndtl_detail_infolist">
               <li>상품번호 : 1000040597007</li>
               <li>모델 : 33_017</li>
            </ul>
            <div className="mndtl_detail_err" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;:&quot;신고하기&quot;}]">
               <i className="mndtl_ic mndtl_ic_warning"></i>
               <p className="mndtl_err_txt">상품정보에<br/>문제가 있나요?</p>
               <a href="/comm/reportError.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005" className="mndtl_btn_err clickable" data-react-tarea-dtl-cd="t00060" target="_parent"><span>신고하기</span></a>
            </div>
		   </div>

         <div>
            <h1>상세정보 페이지 ^^~~</h1>
            <h1>상세정보 페이지 ^^~~</h1>
            <h1>상세정보 페이지 ^^~~</h1>
            <h1>상세정보 페이지 ^^~~</h1>
            <h1>상세정보 페이지 ^^~~</h1>
            <h1>상세정보 펼쳐보기 ^^~~</h1>
         </div>

         <div className="mndtl_sec_bx">
            {/* <!-- 상품기타정보 --> */}
            <div className="mndtl_etc">
               <div className="mndtl_etc_cont">
                  <ul className="mndtl_etc_lst">
                     <li>
                        <a href="/item/appItemInfoPopup.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=12" target="_parent">
                           <span><em>상품고시정보</em></span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="/item/appItemInfoPopup.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;secondShppMthdCd=&amp;infoType=11" target="_parent">
                           <span>교환, 반품, A/S 안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="/item/appItemInfoPopup.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=6" target="_parent">
                           <span>위탁판매자정보</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="/item/appItemInfoPopup.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=3&amp;retShppcst=6000&amp;exchShppcst=0&amp;shppcst=0&amp;shppFreeStdYn=N&amp;secondShppMthdCd=&amp;prmRetShppcst=&amp;prmExchShppcst=&amp;prmShppcst=" target="_parent">
                           <span>교환/반품/환불 안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="/item/appItemInfoPopup.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;secondShppMthdCd=&amp;infoType=2" target="_parent">
                           <span>배송안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            {/* <!-- //상품기타정보 --> */}
         </div>
      </>
   );
}

export default Product;