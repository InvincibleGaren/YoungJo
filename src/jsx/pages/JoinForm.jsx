import React from 'react';
import { useState } from 'react';
import MemberHeader from '../components/ui/MemberHeader';
import RedButton from '../components/ui/RedButton';
import Join from '../function/Join';
import Footer from '../layouts/Footer';
import Server from "../../datas/Server.json";
import axios from "axios";

// function inputCheck(){
//     let InputEls = document.querySelectorAll("input");
//     InputEls.forEach((Element) =>{
//         Element.addEventListener("input", (Event)=>{
//             console.log(Event.data);
//         })
//     })
// }

function JoinForm() {

    const [inputData, setInputData] = useState({
        loginId : "",
        password : "",
        passwordConfirm: "",
        email: "",
        name: "",
        phoneNum: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = Server.baseUrl+"api/signUp";
        const config = {timeout:1000};

        const IdReg = new RegExp("^[a-zA-Z0-9]{6,20}$");
        const passwordReg = new RegExp("^[a-zA-Z0-9]{8,20}$");
        const nameReg = new RegExp("^[가-힣]{2,4}$");
        const phoneReg = new RegExp("^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$");
        const emailReg = new RegExp("^([A-Za-z]+)@([A-Za-z]+)$");

        if( !IdReg.test(inputData.loginId) ) {
            alert("아이디는 6글자 이상 20글자 이하의 영문과 숫자 조합이어야 합니다.");
            return;
        }

        if( !passwordReg.test(inputData.password) ) {
            alert("비밀번호는 8글자 이상 20글자 이하의 영문과 숫자 조합이어야 합니다.");
            return;
        }

        if( inputData.password !== inputData.passwordConfirm) {
            alert("비밀번호와 비밀번호 재확인은 동일해야 합니다.");
            return;
        }

        if( !nameReg.test(inputData.name) ) {
            alert("이름은 2글자 이상 4글자 이하의 올바른 한글이름이어야 합니다.");
            return;
        }

        if( !phoneReg.test(inputData.phoneNum) ) {
            alert("하이픈을 포함한 올바른 전화번호를 입력해주세요.");
            return;
        }

        if( !emailReg.test(inputData.email) ) {
            alert("@를 포함하여 올바른 이메일을 입력해주세요.");
            return;
        }

        axios.post(url, inputData, config)
            .then(LoginResult => { 
                console.log(LoginResult);
                alert("회원가입 되었습니다. 로그인해주세요");
                window.location.href = "/login";
            })
            .catch(error => {
                switch(error.code){
                    case "ECONNABORTED":
                    case "ERR_NETWORK":
                        alert("서버와 연결을 하지 못함\n원인 : "+error.message);
                        return;
                }
                
                switch(error.response.status){
                    case 400:
                        console.log(error);
                        alert("필수입력 항목들을 입력해주세요.");
                        break;
                    case 401:
                        console.log(error);
                        alert(error.response.data.data)
                        break;
                    case 500:
                        console.log(error);
                        alert(error.response.data.message)
                        break;
                    default:
                        alert("알 수 없는 응답. 에러 코드 : "+error.response.status);
                        break;
                }
            });
    }

    const inputChange = (e) => {
        setInputData({
            ...inputData, [e.target.name]:e.target.value
        })
    }

    return ( 
        <div className='JoinForm'>
            <MemberHeader title={"신세계포인트 통합회원 가입"} />
            <form id="joinForm" onSubmit={handleSubmit}>
                <input type="hidden" name="selfCertTokenId" value="b081173a1d2c11ed88e58030e02dff00"></input>
                <div id="m_content" class="cmem_ct_join">
                    <div class="cmem_card_tit">
                        <h3>회원 정보</h3>
                    </div>
                    <div class="cmem_cont">
                        <div class="cmem_row">
                            <dl class="cmem_ip">
                                <dt>
                                    <span class="cmem_require">
                                        <span class="star" aria-hidden="true">*</span>
                                        <label for="mbrLoginId"><span class="blind">필수입력</span>아이디</label>
                                    </span>
                                </dt>
                                <dd>
                                <div class="cmem_inpbtn_set" id="idIpt">
                                    <span class="cmem_inp_txt">
                                        <input 
                                            type="text" 
                                            title="아이디 입력" 
                                            id="mbrLoginId" 
                                            placeholder="영어 또는 숫자로 6~20자리" 
                                            name="loginId" 
                                            value={inputData.loginId}
                                            onChange={inputChange}
                                        />
                                    </span>
                                    <button class="cmem_btn cmem_btn_gray3" id="checkDuplicateLoginIdBtn">중복확인</button>
                                    {/* <input type="hidden" id="isDuplicateMbrLoginId" value=""></input> */}
                                </div>
                                <span class="cmem_noti"><em class="usable_value"><p id="id_msg"></p></em>
                                </span>
                                </dd>
                            </dl>
                        </div>
                        <div class="cmem_row">
                            <dl class="cmem_ip">
                                <dt>
                                    <span class="cmem_require">
                                        <span class="star" aria-hidden="true">*</span>
                                        <label for="pwd"><span class="blind">필수입력</span>비밀번호</label>
                                    </span>
                                </dt>
                                <dd>
                                    <div class="cmem_inp_txt">
                                        <input 
                                            type="password" 
                                            id="pwd" 
                                            title="비밀번호 입력" 
                                            placeholder="영문, 숫자 조합 8~20자리" 
                                            name="password" 
                                            maxlength="30"
                                            value={inputData.password}
                                            onChange={inputChange}
                                        />
                                    </div>
                                    <div class="cmem_inp_txt">
                                        <input 
                                            type="password" 
                                            id="pwd2" 
                                            title="비밀번호 재확인" 
                                            placeholder="비밀번호 재확인" 
                                            name="passwordConfirm"
                                            maxlength="30"
                                            value={inputData.passwordConfirm}
                                            onChange={inputChange}
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div class="cmem_row">
                            <dl class="cmem_ip">
                                <dt>
                                    <span class="cmem_require">
                                        <span class="star" aria-hidden="true">*</span>
                                        <label for="mem_name"><span class="blind">필수입력</span>이름</label>
                                    </span>
                                </dt>
                                <dd>
                                    <div class="cmem_inp_txt">
                                        <input 
                                            type="text" 
                                            id="mem_name" 
                                            title="이름 입력" 
                                            placeholder="한글로 2~4자리" 
                                            name="name" 
                                            maxlength="4" 
                                            value={inputData.name}
                                            onChange={inputChange}
                                            />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        
                        {/* <input type="hidden" name="mbrNshpploc[0].lotnoBascAddr"></input>
                        <input type="hidden" name="mbrNshpploc[0].lotnoDtlAddr"></input>
                        <input type="hidden" name="mbrNshpploc[0].roadNmBascAddr"></input>
                        <input type="hidden" name="mbrNshpploc[0].roadNmDtlAddr"></input>
                        <input type="hidden" name="mbrNshpploc[0].mbrIptAddrTypeCd"></input>
                        <input type="hidden" name="mbrNshpploc[0].mbrIptAddr"></input>
                        <input type="hidden" name="mbrNshpploc[0].addrExamRstCd"></input> */}

                        <div class="cmem_row">
                            <div class="cmem_user_addr">
                                <dl class="cmem_ip">
                                    <dt>
                                        <span class="cmem_require">
                                            <span class="star" aria-hidden="true">*</span>
                                            <label for="zipcd"><span class="blind">필수입력</span>주소</label>
                                        </span>
                                    </dt>
                                    <dd>
                                        <div class="cmem_inpbtn_set">
                                            <span class="cmem_inp_txt">
                                                <input type="text" id="zipcd" name="mbrNshpploc[0].zipcd" readonly="" onclick="searchZipcd();"></input>
                                            </span>
                                            <button type="button" class="cmem_btn cmem_btn_gray" id="btnPostNum" onclick="searchZipcd();">우편번호<span class="blind">찾기</span></button>
                                        </div>
                                        <div class="addr_info v2" id="addr_info"></div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        
                        <input type="hidden" name="mbrCnts[0].cntsTypeCd" value="20"></input>
                        <div class="cmem_row">
                            <div class="cmem_user_phone">
                                <dl class="cmem_ip">
                                    <dt>
                                        <span class="cmem_require">
                                            <span class="star" aria-hidden="true">*</span>
                                            <label for="mem_hpno"><span class="blind">필수입력</span>휴대폰번호</label>
                                        </span>
                                    </dt>
                                    <dd>
                                        <div class="cmem_inp_txt">
                                            <input 
                                                type="tel" 
                                                id="mem_hpno" 
                                                title="휴대폰번호 입력"
                                                placeholder="하이픈 포함해서 입력해주세요" 
                                                name="phoneNum" 
                                                maxlength="20" 
                                                value={inputData.phoneNum}
                                                onChange={inputChange}
                                                />
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="cmem_row">
                            <dl class="cmem_ip">
                                <dt>
                                    <span class="cmem_require">
                                        <span class="star" aria-hidden="true">*</span>
                                        <label for="email"><span class="blind">필수입력</span>이메일주소</label>
                                    </span>
                                </dt>
                                <dd>
                                    <span class="cmem_inp_txt">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="이메일주소" 
                                            maxlength="50" 
                                            value={inputData.email}
                                            onChange={inputChange}
                                            />

                                            
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="cmem_card_tit">
                        <h3>광고 정보 수신 동의</h3>
                    </div>
                    <div class="cmem_cont">
                        <div class="cmem_row">
                            <div class="cmem_terms">
                                
                                
                                    <div class="cmem_term_tit">
                                        <h4>신세계포인트</h4>
                                    </div>
                                    <div class="cmem_term_box">
                                    <span class="cmem_inp_chk">
                                        <input type="checkbox" id="policy" data-type="agree10" value="10" name="mbrSvcAgreeTypeCd"></input> <label for="policy"><strong>(선택)</strong> 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의</label>
                                    </span> <a href="" onclick="window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms03');return false;" class="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                    </div>
                                    <div class="cmem_term_box">
                                    <span class="cmem_inp_chk">
                                        <input type="checkbox" id="policy2" data-type="agree10" value="20" name="mbrSvcAgreeTypeCd"></input> <label for="policy2"><strong>(선택)</strong> 선택 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용 동의</label>
                                    </span>
                                        <a href="" onclick="window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms04');return false;" class="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                            
                                        <ul class="cmem_termlst ty_inner" id="agree10">
                                            <li class="ty_full">
                                            <span class="cmem_inp_chk">
                                                <input type="checkbox" title="이메일 모두 선택" data-type="infoRcvAgreeEmail" id="infoRcvAgreeEmail" disabled=""></input> <label for="infoRcvAgreeEmail">이메일</label>
                                            </span>
                                                <span class="tx_bracket">(</span>
                                                <ul class="cmem_inp_lst">
                                                    <li><span class="cmem_inp_chk"><input type="checkbox" id="chkPoint" title="신세계포인트 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" value="40017" disabled=""></input> <label for="chkPoint">신세계포인트</label></span></li>
                                                    <li><span class="cmem_inp_chk"><input type="checkbox" id="chkEmart" title="이마트 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" value="40021" disabled=""></input> <label for="chkEmart">이마트</label></span></li>
                                                    <li><span class="cmem_inp_chk"><input type="checkbox" id="chkDepart" title="신세계백화점 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" value="40009" disabled=""></input> <label for="chkDepart">신세계백화점</label></span></li>
                                                </ul> <span class="tx_bracket">)</span>
                                            </li>
                                            <li><span class="cmem_inp_chk"><input type="checkbox" id="chkAgreeSMS" title="문자 선택" name="infoRcvMediaCd" value="20" disabled=""></input> <label for="chkAgreeSMS">문자</label></span></li>
                                            <li><span class="cmem_inp_chk"><input type="checkbox" id="chkAgreeDM" title="우편물 선택" name="infoRcvMediaCd" value="30" disabled=""></input> <label for="chkAgreeDM">우편물</label></span></li>
                                            <li><span class="cmem_inp_chk"><input type="checkbox" id="chkAgreeTM" title="텔레마케팅 선택" name="infoRcvMediaCd" value="40" disabled=""></input> <label for="chkAgreeTM">텔레마케팅</label></span></li>
                                        </ul>
                                        <p class="cmem_noti">
                                            <em>광고 정보 수신동의를 하시면 신세계포인트 서비스 및 이벤트 정보를 받으실 수 있습니다.</em>
                                        </p>
                                    </div>
                                
                                <div class="cmem_term_tit">
                                    <h4>SSG.COM</h4>
                                </div>
                                <div class="cmem_term_box">
                                    <span class="cmem_inp_chk">
                                        <input type="checkbox" id="policySsg" data-type="agree40019" name="ssgInfoRcvAgreeDto.mbrSvcAgreeTypeCd" value="10"></input><label for="policySsg"><strong>(선택)</strong> 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의</label>
                                    </span>
                                    <a href="" onclick="window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02');return false;" class="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                    <ul class="cmem_termlst" id="agree40019">
                                        <li><span class="cmem_inp_chk"> <input type="checkbox" id="emailRcvYn" name="ssgInfoRcvAgreeDto.emailRcvYn" value="Y" disabled=""></input> <label for="emailRcvYn">이메일</label></span></li>
                                        <li><span class="cmem_inp_chk"> <input type="checkbox" id="smsRcvYn" name="ssgInfoRcvAgreeDto.smsRcvYn" value="Y" disabled=""></input> <label for="smsRcvYn">문자</label></span></li>
                                    </ul>
                                    <p class="cmem_noti">
                                        <em>광고 정보 수신동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다.</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cmem_row">
                            <p class="cmem_noti">
                                <strong>선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본 서비스를 이용하실 수 있습니다.</strong>
                            </p>
                        </div>
                        <div className="cmem_btn_area">
                            <button className="cmem_btn cmem_btn_orange3" type='submit'>회원가입</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}


export default JoinForm;