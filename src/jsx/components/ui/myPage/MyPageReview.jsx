import React from 'react'

function MyPageReview() {
  return (
    <div>
        <div className="myssg_sec">
		<div className="myssg_sec_conts">
			<a href="https://m.ssg.com/myssg/activityMng/pdtEvalList.ssg?_mpop=new&amp;quick=pdtEvalList&amp;tabDiv=item" className="myssg_sec_title">리뷰 작성</a>
			<p className="myssg_desc_text"> 남겨주신 리뷰는 다른 고객들에게 큰 도움이 됩니다.<br /> 리뷰 작성 시, 쓱 쉐프 리뷰 <strong>1,000</strong>원, 한달 사용 리뷰는 <strong>300</strong>원, 쓱찬스/일반 리뷰는 <strong>50</strong>원의 <strong>SSG MONEY</strong>가 지급됩니다. </p>
			<div className="myssg_premium_reivew">
                <a href="https://m.ssg.com/event/eventDetail.ssg?promId=1100915002" className="myssg_review_promotion" data-react-tarea="MYSSG|M_MY_SSG_배너_내상품평">
                    <span className="myssg_reivew_text">9월 프리미엄 리뷰<span className="myssg_primary_text"> </span> 리뷰쓰고 SSG머니 받자</span>
                </a>
            </div>
			<div className="myssg_writable_review">
				<a href="https://m.ssg.com/myssg/activityMng/pdtEvalList.ssg?tabDiv=item&amp;_mpop=new" className="myssg_writable_review_content">
					<strong className="myssg_writable_review_title">지금 작성 가능한 리뷰</strong>
					<ul className="myssg_writable_review_list">
						<li className="myssg_review_item ty_zero">
							<span className="myssg_review_item_name">일반</span>
							<span className="myssg_review_item_count">0</span>
						</li>
						<li className="myssg_review_item ty_zero">
							<span className="myssg_review_item_name">스페셜</span>
							<span className="myssg_review_item_count">0</span>
						</li>
					</ul>
				</a>
			</div>
			<p className="myssg_review_desc"> 당신의 소중한 리뷰를 기다립니다. </p>
        </div>
	</div>
    </div>
  )
}

export default MyPageReview