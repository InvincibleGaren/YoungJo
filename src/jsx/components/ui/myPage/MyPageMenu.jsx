import React from 'react'

function MyPageMenu() {
  return (
    <div>
        <div className="myssg_sec">
		<div className="myssg_sec_conts">
			<h3 className="myssg_sec_title">자주찾는 메뉴</h3>
			<ul className="myssg_quick_list">
				<li><a href="https://m.ssg.com/myssg/productMng/frequentlyOrderItem.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_자주구매"><i className="ty_often"></i><span className="myssg_quick_text">자주구매</span></a></li>
				<li><a href="https://m.ssg.com/myssg/activityMng/itemNotiList.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_입고알림"><i className="ty_noti"></i><span className="myssg_quick_text">입고알림</span></a></li>
				<li><a href="https://member.ssg.com/m/myssg/ssgmoneyMng/giftSwapMain.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_상품권전환"><i className="ty_exchange"></i><span className="myssg_quick_text">상품권전환</span></a></li>
				<li><a href="https://m.ssg.com/myssg/gift/recvList.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_선물함"><i className="ty_gift"></i><span className="myssg_quick_text">선물함</span></a></li>
				<li><a href="https://pay.ssg.com/m/myssg/orderInfoCoolerBagInfo.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_알비백관리"><i className="ty_bag"></i><span className="myssg_quick_text">알비백관리</span></a></li>
				<li><a href="https://m.ssg.com/myssg/activityMng/eventEntryStatusList.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_이벤트현황"><i className="ty_event"></i><span className="myssg_quick_text">이벤트현황</span></a></li>
				<li><a href="https://m.ssg.com/myssg/activityMng/postngQna.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_상품Q&amp;A"><i className="ty_qna"></i><span className="myssg_quick_text">상품Q&amp;A</span></a></li>
				<li><a href="https://m.ssg.com/customer/main.ssg?_mpop=new" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_고객센터"><i className="ty_cs"></i><span className="myssg_quick_text">고객센터</span></a></li>
				<li><a href="http://talk.ssg.com/webchat?gateType=cs&amp;siteNo=6005" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_고객센터톡"><i className="ty_cs_talk"></i><span className="myssg_quick_text">1:1고객센터톡</span></a></li>
				{/* <li><a href="javascript:moveCsbot('http://talk.ssg.com/webchat?gateType=cs&amp;siteNo=6005');" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_고객센터톡"><i className="ty_cs_talk"></i><span className="myssg_quick_text">1:1고객센터톡</span></a></li> */}
					<li><a href="https://m.ssg.com/myssg/activityMng/counselForm.ssg?_mpop=new&amp;myssg=counselForm" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_이메일상담"><i className="ty_email"></i><span className="myssg_quick_text">e-mail상담</span></a></li>
				<li><a href="https://m.ssg.com/myssg/activityMng/counselList.ssg?_mpop=new&amp;myssg=counselList" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_이메일답변"><i className="ty_email_reply"></i><span className="myssg_quick_text">e-mail답변</span></a></li>
				<li><a href="https://member.ssg.com/m/member/infoRcvAgree.ssg?_mpop=new&amp;myssg=infoRcvAgree" className="myssg_quick_link clickable" data-react-tarea="MYSSG|메인|자주찾는메뉴_수신동의"><i className="ty_email_agree"></i><span className="myssg_quick_text">e-mail/문자<br/>수신동의</span></a></li>
			</ul>
		</div>
	</div>
    </div>
  )
}

export default MyPageMenu