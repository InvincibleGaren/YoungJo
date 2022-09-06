import React from 'react'

function OrderShippingTracking() {
  return (
    <div>
        <div className="myssg_sec">
        <div className="myssg_sec_conts" id="divMyOrderSecConts">
            <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new" className="myssg_sec_title ty_order clickable">주문/배송 조회</a>
            <div className="myssg_order_process">
                <ul className="myssg_process_list">
                    <li>
                        <span id="ordRcp" className="myssg_process_count ty_zero">0</span>
                        <span id="ordRcpTxt" className="myssg_process_title">주문접수</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C15" className="myssg_process_link"><span className="blind">주문접수 자세히보기</span></a>
                    </li>
                    <li>
                        <span id="paymtCmpt" className="myssg_process_count ty_zero">0</span>
                        <span id="paymtCmptTxt" className="myssg_process_title">결제완료</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C11" className="myssg_process_link"><span className="blind">결제완료 자세히보기</span></a>
                    </li>
                    <li>
                        <span id="itemReady" className="myssg_process_count ty_zero">0</span>
                        <span id="itemReadyTxt" className="myssg_process_title">상품준비중</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C12" className="myssg_process_link"><span className="blind">상품준비중 자세히보기</span></a>
                    </li>
                    <li>
                        <span id="shpp" className="myssg_process_count ty_zero">0</span>
                        <span id="shppTxt" className="myssg_process_title">배송중</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C13" className="myssg_process_link"><span className="blind">배송중 자세히보기</span></a>
                    </li>
                    <li>
                        <span id="shppCmpt" className="myssg_process_count ty_zero">0</span>
                        <span id="shppCmptTxt" className="myssg_process_title">배송완료 <button className="myssg_question_btn myssg_modal_btn"><span className="blind">베송완료란</span></button></span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C14" className="myssg_process_link"><span className="blind">배송완료 자세히보기</span></a>
                    </li>
                </ul>
            </div>
            <div className="myssg_order_claim">
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">취소</span>
                    <span className="myssg_claim_count ty_zero" id="cancelClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C16" className="myssg_claim_link"><span className="blind">취소 자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">교환</span>
                    <span className="myssg_claim_count ty_zero" id="exchangeClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C18" className="myssg_claim_link"><span className="blind">교환 자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">반품</span>
                    <span className="myssg_claim_count ty_zero" id="returnClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C17" className="myssg_claim_link"><span className="blind">반품 자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">구매확정<button className="myssg_question_btn myssg_modal_btn"><span className="blind">구매확정이란</span></button></span>
                    <span className="myssg_claim_count ty_zero" id="ordPurchDcsnCnt">0</span>
                    <a href="#" className="myssg_claim_link"><span className="blind">구매확정 자세히보기</span></a>
                </div>
            </div>
		
	        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new" className="myssg_gray_btn"><span className="myssg_btn_text">주문/배송조회 보러가기</span></a>
			<div className="myssg_order_trip">
				<a href="https://m-triip.ssg.com/m/trip/myssg/tripRsvtInfo.ssg?_mpop=new">
					<span className="myssg_trip_title">항공권 예약</span>
					<span className="myssg_trip_count ty_zero">0</span>
				</a>
				<a href="https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new">
					<span className="myssg_trip_title">호텔 예약</span>
					<span className="myssg_trip_count ty_zero">0</span>
				</a>
			</div>
		</div>
	</div>
    </div>
  )
}

export default OrderShippingTracking