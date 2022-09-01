import React from 'react';
import Footer_img from "../../img/footer.png";
import { Link } from 'react-router-dom';
import "../../css/layout/Footer.css"

import { LoginState } from '../globalState/LoginState';
import { useContext } from 'react';
import {SetLoginState} from '../globalState/SetLoginState'

function Footer() {
    const Login = useContext(LoginState);
    const setLogin = useContext(SetLoginState);

    const Logout = (event) => {
        event.preventDefault();
        setLogin("false");
        sessionStorage.removeItem("login");
        alert("로그아웃 되었습니다.");
    }
    console.log("Login :");
    console.log(Login);
    
    return ( 
        <footer>
            <div className='footer_customer'>
                <div className='f_customer_left'>
                    <p><img src={Footer_img} alt="고객센터 이미지"/></p>
                    <p>
                        SSG.COM 고객센터 / 전자금융거래 분쟁처리<br />
                        1577-3419 / ssg@ssg.com
                    </p>
                </div>
                <div className='f_button_container'>
                    <button className='f_button'>전화걸기</button>
                    <button className='f_button'>1:1 고객센터</button>
                </div>
            </div>

            <div className='footer_nav'>
                <ul>
                    { Login === "true" ? 
                        <li><Link to="#" onClick={Logout}>로그아웃</Link></li>
                        :
                        <li><Link to="/login">로그인</Link></li>
                    }
                    
                    <li><Link to="/join/simplejoin">회원가입</Link></li>
                    <li>앱다운로드</li>
                    <li>PC버전</li>
                </ul>
            </div>
            
            <div className='footer_info'>
                <div className='f_info_element'>
                    <p className='f_info_title'>(주)에스에스지닷컴</p>
                    <p className='f_info_content'>대표자: 강희석 | 사업자등록번호 : 870-88-01143<br/>
                    통신판매업 신고번호: 제2022-서울강남 - 03751호 <a>사업자 정보확인</a><br/>
                    개인정보보호 책임자: 김우진 | 주소: 서울특별시 강남구 테헤란로 231<br/>
                    호스팅서비스 사업자: (주)에스에스지닷컴</p>
                </div>
                <div className='f_info_element'>
                    <p className = 'f_info_title'>우리은행 채무지급보증 안내 <a>서비스가입사실 확인</a></p>
                    <p className = 'f_info_content'>당사는 고객님이 현금 결제한 금액에 대해 우리은행과<br/>
                        채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
                </div>
                <div className='f_info_element'>
                    <ul>
                        <li>회사소개</li>
                        <li>이용약관</li>
                        <li>전자금융거래이용약관</li>
                        <li className='f_info_red'>개인정보처리방침</li>
                        <li>청소년보호방침</li>
                        <li>소비자분쟁해결기준</li>
                        <li>입점상담</li>
                    </ul>
                </div>
                <div className='f_info_element'>
                    <div className ='f_info_content'>
                        (주)에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, 
                        UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 
                        저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.<br/>
                        <p className='f_copyright'>Copyright &copy; SSG.COM Corp. All right reserved.</p>
                    </div>
                </div>
            </div>
            
        </footer>
     );
}

export default Footer;