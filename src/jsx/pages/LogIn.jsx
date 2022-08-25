import MemberHeader from '../components/ui/MemberHeader';
import RedButton from '../components/ui/RedButton';
import SNSLogIn from '../components/ui/SNSLogIn';
import Footer from '../layouts/Footer';

import LoginSubmit from "../function/LoginSubmit";

function LogIn() {
    return (  
        <div className="LogIn">
            <MemberHeader title={"로그인"} />

            <form onSubmit={LoginSubmit}>
                <div className='login_container'>
                    <span className="cmem_inp_txt2">
                        {/* 적은 거 삭제 버튼 inp_clear */}
                        {/* <label for="inp_id"><span className="blind">아이디</span></label> */}
                        <input type="text" id="inp_id" name="mbrLoginId" placeholder="아이디" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="50" />
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
                            <input type="checkbox" id="keep_id" name="chk_log" value="Y" checked="false" />
                            <label for="keep_id">아이디 저장</label>
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