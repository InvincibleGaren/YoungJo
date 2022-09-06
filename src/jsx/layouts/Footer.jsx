import React from 'react';
import { Link } from 'react-router-dom';
import { LoginState } from '../globalState/LoginState';
import { useContext } from 'react';
import { SetLoginState } from '../globalState/SetLoginState'

function Footer() {
    const login = useContext(LoginState);
    const setLogin = useContext(SetLoginState);

    const handleLogout = (event) => {
        event.preventDefault();
        setLogin(false);
        sessionStorage.removeItem("login");
        alert("로그아웃 되었습니다.");
    }
    
    return ( 
        <footer id="m_footer" className="mcom_footer react-area">
            <div className="footer_notiwrap">
                <div className="footer_noti">
                    <p className="noti_tit">공지</p>
                    <ul className="noti_dsc">
                        <li>
                            <Link to="http://m.ssg.com/customer/noticeList.ssg?siteNo=6004&amp;bbsId=1&amp;postngId=1178857141&amp;postTeryIdnfNo=6004">SSG.COM 개인정보처리방침 개정 안내 [개정일 : ...</Link>
                        </li>
                        <li>
                            <Link to="http://m.ssg.com/customer/noticeList.ssg?siteNo=6009&amp;bbsId=1&amp;postngId=1178857141&amp;postTeryIdnfNo=6009">SSG.COM 개인정보처리방침 개정 안내 [개정일 : ...</Link>
                        </li>
                        <li>
                            <Link to="http://m.ssg.com/customer/noticeList.ssg?siteNo=6004&amp;bbsId=1&amp;postngId=1177655171&amp;postTeryIdnfNo=6004">SSG.COM 이용약관 및 전자금융거래이용약관 개정 안...</Link>
                        </li>
                    </ul>
                </div>
                <span className="sp_head noti_arrow">&nbsp;</span>
            </div>
            <div className="mcom_service_wrap">
                <div className="mcom_service_area">
                    <p className="mcom_service_info">
                        <span className="mcom_info_mall">SSG.COM 고객센터 / 전자금융거래 분쟁처리</span><br/>
                        <span className="mcom_tel_tx">1577-3419 /</span> <span className="mcom_email_tx">ssg@ssg.com</span>
                    </p>
                    <div className="mcom_service_btnarea">
                        <Link to="tel:1577-3419" className="mcom_service_btn clickable" data-react-tarea="푸터|전화연결"><em>전화걸기</em></Link>
                        <Link to="http://talk.ssg.com/webchat?gateType=cs" className="mcom_service_btn clickable" data-react-tarea="푸터|고객상담톡"><em>1:1 고객센터</em></Link>
                    </div>
                </div>
            </div>
            <div className="mcom_btnbx_warp">
                <ul className="mcom_btnbx_list">
                    {
                        login ? 
                        <li id="footer_logoutBtn">
                            <Link to="/" onClick={handleLogout} className="clickable" data-react-tarea="푸터|로그아웃">로그아웃</Link>
                        </li>
                        :
                        <li id="footer_loginBtn">
                            <Link to="/login" className="clickable" data-react-tarea="푸터|로그인">로그인</Link>
                        </li>
                    }
                    <li id="footer_joinMemberBtn"><Link to="/join/simplejoin" className="clickable" data-react-tarea="푸터|회원가입">회원가입</Link></li>
                    <li><Link to="https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2" className="clickable" data-react-tarea="푸터|앱다운로드">앱다운로드</Link></li>
                    <li><Link to="#" className="clickable" data-react-tarea="푸터|PC버전" >PC버전</Link></li>
                </ul>
            </div>
            <div className="mcom_mall_wrap v2">
                <div className="mcom_mall_box">
                    <span className="mcom_mall_name">(주)에스에스지닷컴</span>
                    <address>
                        대표자: 강희석
                        <span className="bar">|</span>사업자등록번호: 870-88-01143<br/>통신판매업 신고번호: 제2022-서울강남-03751호<Link to="#" className="txt_link">사업자 정보확인</Link><br/>개인정보보호 책임자: 김우진<span className="bar">|</span>주소: 서울특별시 강남구 테헤란로 231<br/>호스팅서비스 사업자 : (주)에스에스지닷컴
                    </address>
                </div>
                <div className="mcom_noti_wrap">
                    <p className="mcom_noti_tip">우리은행 채무지급보증 안내 <Link to="#" className="txt_link">서비스가입사실 확인</Link></p>
                    <p className="mcom_noti_txt">당사는 고객님이 현금 결제한 금액에 대해 우리은행과<b/>채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
                </div>
                <div className="mcom_cont_info">
                    <h3 className="blind">SSG.COM 정책 및 약관</h3>
                    <ul className="mcom_cont_lst">
                        <li><Link to="#" title="새창열림"><span>회사소개</span></Link></li>
                        <li><Link to="#" title="새창열림">이용약관</Link></li>
                        <li><Link to="#" title="새창열림">전자금융거래이용약관</Link></li>
                        <li><Link to="#" title="새창열림"><strong>개인정보처리방침</strong></Link></li>
                        <li><Link to="#" title="새창열림">청소년보호방침</Link></li>
                        <li><Link to="#" title="새창열림">소비자분쟁해결기준</Link></li>
                        <li><Link to="#" title="새창열림"><span>입점상담</span></Link></li>
                    </ul>
                </div>
                <div className="mcom_noti_wrap ty2">
                    <p className="mcom_noti_txt">㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.</p>
                </div>
                <p className="mcom_copyright">Copyright ⓒ SSG.COM Corp. All rights reserved.</p>
            </div>
        </footer>
     );
}

export default Footer;