import React from 'react'
import { Link } from 'react-router-dom'

function MypageTop({mypagedata}) {

    console.log("top 데이터:", mypagedata)
  return (
    <div>
        <div className="myssg_user_sec">
            <div className="myssg_user_profile">
                <Link to="#" className="modal_btn_profile myssg_profile_photo clickable" data-morph-target=".myssg_modal_profile" data-react-tarea="MYSSG|M_MY_SSG_프로필이미지">
                    <img src="//sui.ssgcdn.com/ui/m_ssg/img/@100x100.png" alt="프로필사진" id="talkImgMain"/>
                    <span className="myssg_profile_setting"><span className="blind">프로필편집</span></span>
                </Link>
                <div className="myssg_profile_info" data-react-tarea-cd="00034_000000001">
                    <div className="myssg_user_name"><Link to="https://member.ssg.com/m/myssg/myinfoMng/main.ssg?_mpop=new" className="clickable" data-react-tarea="MYSSG|M_MY_SSG_회원명">{mypagedata.name} 님</Link></div>
                        <div className="myssg_user_grade" data-react-unit-type="text" data-react-unit-id="" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;: &quot;FRIENDS&quot;}]">
                            <Link to="https://m.ssg.com/event/couponInfo.ssg?myssg=couponInfo" className="clickable">
                                <p>
                                    <strong className="myssg_primary_text">{mypagedata.grade}</strong> 등급입니다.
                                </p>
                                </Link>
                        </div>

                    <div className="myssg_user_grade" data-react-unit-type="text" data-react-unit-id="" data-react-unit-text="[{&quot;type&quot;:&quot;tarea_addt_val&quot;,&quot;value&quot;: &quot;FRIENDS&quot;}]">
                    </div>
                </div>
            </div>

            <div className="myssg_membership_info" data-react-tarea-cd="00040_000000233">
                <Link to="https://member.ssg.com/m/membership/gate.ssg" data-react-tarea-dtl-cd="t00001" data-react-unit-type="banr" data-react-unit-id="" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;스마일클럽미가입자배너&quot;}]" className="clickable">
                    <div className="myssg_membership_header">
                        <div className="myssg_membership_header_title justify_center">
                            <i className="badge">
                                <span className="blind">스마일클럽</span>
                            </i>
                            <p>회원은, <strong>스타벅스 사이즈업</strong></p>
                        </div>
                    </div>
                    <div className="myssg_membership_content">
                        <div className="myssg_membership_btn_join">
                            <span className="myssg_membership_btn_content">
                                지금 가입하시면 1개월 무료<i className="icon ty_xs" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="myssg_user_manage">
                <Link to="https://m.ssg.com/myssg/myClip/main.ssg?_mpop=new" className="clickable" data-react-tarea="MYSSG|M_MY_SSG_MY클립"><span className="myssg_manage_text ty_like">좋아요</span>	</Link>
                <Link to="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new" className="clickable" data-react-tarea="MYSSG|M_MY_SSG_배송지관리"><span className="myssg_manage_text ty_devliery">배송지 관리</span></Link>
                <Link to="javascript:void(0);" onClick="javascript:clickPushMsgBtn();" className="clickable" data-react-tarea="MYSSG|M_MY_SSG_PUSH메세지함">
                    <span className="myssg_manage_text ty_alert"> 알림함<span className="myssg_alert_count" id="pushArea"><span id="pushCountArea" className="blind">알림함 수</span>0</span>
                    </span>
                </Link>
            </div>

            <div className="myssg_user_benefit">
                <div className="myssg_coupon_point myssg_layer_conts">
                    <div className="myssg_coupon">
                        <Link to="https://m.ssg.com/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new" className="myssg_link clickable" data-react-tarea="MYSSG|M_MY_SSG_쿠폰">
                            <dl>
                                <dt>쿠폰</dt>
                                <dd><span className="myssg_benefit_score">0</span>장</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="myssg_point">
                        <Link to="https://member.ssg.com/m/member/join/authMbrConversion.ssg?_mpop=new" className="myssg_link myssg_point_link">
                            <dl>
                                <dt>신세계포인트</dt>
                                <dd><span className="myssg_point_join">통합회원 전환하기</span></dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="myssg_layer myssg_point_layer">
                        <div className="myssg_point_layer_conts">
                            <div className="myssg_point_layer_tit">
                                <div className="myssg_point_close_wrap">
                                    <button type="button" className="myssg_layer_close myssg_close_btn"><span className="blind">닫기</span></button>
                                </div>
                            </div>
                            <p className="myssg_point_desc ty_space">
                                <span className="myssg_point_desctx">신세계백화점과 이마트의 적립혜택을<br/>한번에 누려보세요.</span>
                                <button type="button" className="myssg_point_btn">
                                    <span className="myssg_point_btn_tit" >신세계포인트 통합회원 전환</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="myssg_ssgmoney v2">
                    <div className="myssg_link myssg_ssgmoney_link">
                        <dl>
                            <dt>
                                <Link to="https://m.ssg.com/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList" className="myssg_link myssg_ssgmoney_link" data-react-tarea="MYSSG|M_MY_SSG_SSGMONEY">
                                SSG MONEY
                                </Link>
                            </dt>
                            <dd>
                                <Link to="https://m.ssg.com/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList"><span className="myssg_benefit_score">0</span>원</Link>
                            </dd>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MypageTop