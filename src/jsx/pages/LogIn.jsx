import MemberHeader from '../components/ui/MemberHeader';
import RedButton from '../components/ui/RedButton';
import SNSLogIn from '../components/ui/SNSLogIn';
import Footer from '../layouts/Footer';
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jwt-decode';
import Server from "../../datas/Server.js";
import {SetLoginState} from "../globalState/SetLoginState"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";









function LogIn() {
    const setLogin = useContext(SetLoginState);
    const Navigate = useNavigate();
    const LoginSubmit = (event) => {
        event.preventDefault();
        let loginId = document.getElementById("inp_id").value;
        let password = document.getElementById("inp_pw").value;
        const url = Server.baseUrl+"api/login";
        const data = {loginId, password};
        const config = {timeout:1000};
    
        axios.post(url, data, config)
            .then(LoginResult => { 
                let jwtdecode = jwt(LoginResult.headers.authentication)
                alert(jwtdecode.name+"님 환영합니다.");
                setLogin("true");
                Navigate("/");
                sessionStorage.setItem("login", LoginResult.headers.authentication)
            })
            .catch(error => {
                console.log(error);
                switch(error.code){
                    case "ECONNABORTED":
                    case "ERR_NETWORK":
                        alert("서버와 연결을 하지 못함\n원인 : "+error.message);
                        return;
                }
                
                switch(error.response.data.errorCode){
                    case 4:
                        alert("아이디 또는 패스워드가 틀렸습니다.");
                        break;
                    default:
                        alert("알 수 없는 응답. 에러 코드 : "+error.response.data.errorCode);
                        break;
                }
            });
    }
    
    return (  
        <div className="LogIn">
            <MemberHeader title={"로그인"} />

            <form onSubmit={LoginSubmit}>
                <div className='login_container'>
                    <span className="cmem_inp_txt2">
                        {/* 적은 거 삭제 버튼 inp_clear */}
                        {/* <label for="inp_id"><span className="blind">아이디</span></label> */}
                        <input type="text" id="inp_id" name="mbrLoginId" placeholder="아이디" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="50" />
                        <button type="button" className="inp_clear"><span className="sp_cmem_login cmem_ico_clear"></span></button>
                    </span>
                    <span className="cmem_inp_txt2">
                        {/* <label for="inp_pw"><span className="blind">비밀번호</span></label> */}
                        <input type="password" id="inp_pw" name="password" placeholder="비밀번호" />
                        <button type="button" className="inp_clear"><span className="sp_cmem_login cmem_ico_clear"></span></button>
                    </span>

                    <div className="cmem_login_chk">
                        <span className="cmem_inp_chk type3">
                            {/* 체크박스 고쳐야함 */}
                            <input type="checkbox" id="keep_id" name="chk_log" value="Y" defaultChecked={false}/>
                            <label htmlFor="keep_id">아이디 저장</label>
                        </span>
                    </div>

                    <RedButton title={"로그인"} clickCallback={LoginSubmit}/>

                    <div className="cmem_login_support">
                        <a href="#">아이디 찾기</a>
                        <a href="#">비밀번호 찾기</a>
                        <a href="#">회원가입</a>
                    </div>

                    <SNSLogIn />
                </div>
            </form>


            <div className="cmem_nomemarea">
                <a href="#" className="cmem_nomem_btn"><span>비회원 조회하기</span></a>
            </div>
            
            {/* <form id="snsJoin" method="post" action="/m/member/join/simpleJoinGuide.ssg">
                <input type="hidden" name="mbrId" />
                <input type="hidden" name="email" />
                <input type="hidden" name="snsTypeCd" />
                <input type="hidden" name="accessToken" />
            </form> */}
            <Footer />
        </div>
    );
}

export default LogIn;