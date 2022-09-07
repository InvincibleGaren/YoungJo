import React from 'react';
import { useState, useEffect } from 'react';
import MemberHeader from '../components/ui/MemberHeader';
import RedButton from '../components/ui/RedButton';
import Join from '../function/Join';
import Footer from '../layouts/Footer';
import Server from "../../datas/Server.js";
import axios from "axios";
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from "react-router-dom";

import "../../css/pages/JoinForm.css"

// function inputCheck(){
//     let InputEls = document.querySelectorAll("input");
//     InputEls.forEach((Element) =>{
//         Element.addEventListener("input", (Event)=>{
//             console.log(Event.data);
//         })
//     })
// }

function JoinForm() {
    const navigate = useNavigate();
    // const [apiAddress, setApiAddress] = useState({
    //     city: "",
    //     street: "",
    //     detail: "",
    //     postalCode: ''

    // })

    // const [inputData, setInputData] = useState({
    //     loginId : "",
    //     password : "",
    //     passwordConfirm: "",
    //     email: "",
    //     name: "",
    //     phoneNum : "",
    //     address: apiAddress
    // })
    const [address, setAddress] = useState({
        city: "",
        street: "",
        detail: "",
        postalCode: ""
    });

    const [inputData, setInputData] = useState({
        loginId : "",
        password : "",
        email: "",
        name: "",
        phoneNum : "",
    })

    const [errorList, setErrorList] = useState({
        
    })

    const [idOverlapCheckState, setIdOverlapCheckState] = useState(false);


    const [modalCheck, setmodalCheck] = useState("modalClose");
    const [AddressDetail, setAddressDetail] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [sendData, setSendData] = useState()

    useEffect(()=>{
        sessionStorage.setItem("OverlapCheck","false");
    }, []
    )
    

    



    //회원가입하기 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = Server.baseUrl+"api/signUp";
        const config = {timeout:1000};


        const IdReg = new RegExp("^[a-zA-Z0-9]{6,20}$");
        const passwordReg = new RegExp("^[a-zA-Z0-9]{8,20}$");
        const nameReg = new RegExp("^[가-힣]{2,4}$");
        const phoneReg = new RegExp("^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$");
        const emailReg = new RegExp("^([A-Za-z0-9]+)@([A-Za-z.]+)$");

        if( !IdReg.test(inputData.loginId) ) {
            console.log(inputData);
            alert("아이디는 6글자 이상 20글자 이하의 영문과 숫자 조합이어야 합니다.");
            return;
        }

        if( !passwordReg.test(inputData.password) ) {
            alert("비밀번호는 8글자 이상 20글자 이하의 영문과 숫자 조합이어야 합니다.");
            return;
        }

        if( inputData.password !== passwordConfirm) {
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

        if(sessionStorage.getItem("OverlapCheck")==="false") {
            alert("ID 중복 여부를 체크해주세요.");
            return;
        }
 
        axios.post(url, {
            loginId : inputData.loginId,
            password : inputData.password,
            email: inputData.email,
            name: inputData.name,
            phoneNum : inputData.phoneNum,
            address : address
        }, config)
            .then(LoginResult => { 
                console.log(LoginResult);
                alert("회원가입 되었습니다. 로그인해주세요");
                navigate("/login");
            })
            .catch(error => {
                console.log(error);
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
    //입력칸에 텍스트를 입력한 경우
    const inputChange = (e) => {
        if(e.target.name === "detail")
        {
            setAddress({
                ...address, [e.target.name]:e.target.value
            })
            console.log(address);
            //inputData.address = { ...inputData.address, [e.target.name]:e.target.value}
            //setInputData({...inputData});
            // console.log(inputData);
        }
        else if(e.target.name === "passwordConfirm")
        {
            setPasswordConfirm(e.target.value)
        }
        else{
            setInputData({
                ...inputData, [e.target.name]:e.target.value
            })
        }
    }
    const IDInputBlur = (e) => {
        idOverlapCheck(e);
    }

    //ID 중복체크 함수
    const idOverlapCheck = (e) =>{
        e.preventDefault();
        const IdReg = new RegExp("^[a-zA-Z0-9]{6,20}$");
        const url = Server.baseUrl+"api/duplCheck/loginId";
        const config = {timeout:1000};

        if( !IdReg.test(inputData.loginId) ) {
            alert("아이디는 6글자 이상 20글자 이하의 영문과 숫자 조합이어야 합니다.");
            return;
        }
        axios.post(url, {loginId : inputData.loginId}, config)
            .then(Result => { 
                console.log(Result);
                if(Result.data.data){
                    sessionStorage.setItem("OverlapCheck","false");
                    setIdOverlapCheckState(false)
                    e.target.focus()
                }else{
                    sessionStorage.setItem("OverlapCheck","true");
                    setIdOverlapCheckState(true)
                }

            })
            .catch(error => {
                console.log(error);
                switch(error.code){
                    case "ECONNABORTED":
                    case "ERR_NETWORK":
                    default:
                        alert("서버와 연결을 하지 못함\n원인 : "+error.message);
                        return;
                }
            });
    }
    // 주소 API 모달창을 뛰우는 함수
    const openAddressAPI = () =>{
        setmodalCheck("modalOpen");
        console.log(inputData)
        document?.body.classList.toggle("modalOpen");
    }

    // 주소 API 모달창에서 주소를 선택했을 때 호출되는 함수
    const selectAddressAPI = (data) => {
        // console.log(data);
        let city = data.sido;
        let street = data.roadAddress;
        let detail = "";
        let postalCode = data.zonecode;

        
        setAddress({...address, city, street, detail, postalCode})
        setmodalCheck("modalClose");
        setAddressDetail(true);
        document?.body.classList.toggle("modalOpen");
        
        // setInputData({...inputData});
        
        
    }

    return ( 
        <div className="JoinForm ">
            <MemberHeader title={"신세계포인트 통합회원 가입"} />
            <form id="joinForm" onSubmit={handleSubmit}>
                <input type="hidden" name="selfCertTokenId" defaultValue="b081173a1d2c11ed88e58030e02dff00"></input>
                <div id="m_content" className="cmem_ct_join">
                    <div className="cmem_card_tit">
                        <h3>회원 정보</h3>
                    </div>
                    <div className="cmem_cont">
                        <div className="cmem_row">
                            <dl className="cmem_ip">
                                <dt>
                                    <span className="cmem_require">
                                        <span className="star" aria-hidden="true">*</span>
                                        <label htmlFor="mbrLoginId"><span className="blind">필수입력</span>아이디</label>
                                    </span>
                                </dt>
                                <dd>
                                <div className="cmem_inpbtn_set" id="idIpt">
                                    <span className="cmem_inp_txt">
                                        <input 
                                            type="text" 
                                            title="아이디 입력" 
                                            id="mbrLoginId" 
                                            placeholder="영어 또는 숫자로 6~20자리" 
                                            name="loginId" 
                                            defaultValue={inputData.loginId}
                                            onChange={inputChange}
                                            onBlur={IDInputBlur}
                                        />
                                    </span>
                                    {
                                        
                                    }
                                    <button className='cmem_btn cmem_btn_gray' onClick={idOverlapCheck}>
                                        {
                                            !idOverlapCheckState ? 
                                            "사용불가"
                                            : "사용가능"
                                        }
                                    </button>
                                    {/* <input type="hidden" id="isDuplicateMbrLoginId" defaultValue=""></input> */}
                                </div>
                                <span className="cmem_noti"><em className="usable_value"><p id="id_msg"></p></em>
                                </span>
                                </dd>
                            </dl>
                        </div>
                        <div className="cmem_row">
                            <dl className="cmem_ip">
                                <dt>
                                    <span className="cmem_require">
                                        <span className="star" aria-hidden="true">*</span>
                                        <label htmlFor="pwd"><span className="blind">필수입력</span>비밀번호</label>
                                    </span>
                                </dt>
                                <dd>
                                    <div className="cmem_inp_txt">
                                        <input 
                                            type="password" 
                                            id="pwd" 
                                            title="비밀번호 입력" 
                                            placeholder="영문, 숫자 조합 8~20자리" 
                                            name="password" 
                                            maxLength="30"
                                            defaultValue={inputData.password}
                                            onChange={inputChange}
                                        />
                                    </div>
                                    <div className="cmem_inp_txt">
                                        <input 
                                            type="password" 
                                            id="pwd2" 
                                            title="비밀번호 재확인" 
                                            placeholder="비밀번호 재확인" 
                                            name="passwordConfirm"
                                            maxLength="30"
                                            defaultValue={passwordConfirm}
                                            onChange={inputChange}
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="cmem_row">
                            <dl className="cmem_ip">
                                <dt>
                                    <span className="cmem_require">
                                        <span className="star" aria-hidden="true">*</span>
                                        <label htmlFor="mem_name"><span className="blind">필수입력</span>이름</label>
                                    </span>
                                </dt>
                                <dd>
                                    <div className="cmem_inp_txt">
                                        <input 
                                            type="text" 
                                            id="mem_name" 
                                            title="이름 입력" 
                                            placeholder="한글로 2~4자리" 
                                            name="name" 
                                            maxLength="4" 
                                            defaultValue={inputData.name}
                                            onChange={inputChange}
                                            />
                                    </div>
                                </dd>
                            </dl>
                        </div>     
                        <div className="cmem_row">
                            <div className="cmem_user_addr">
                                <dl className="cmem_ip">
                                    <dt>
                                        <span className="cmem_require">
                                            <span className="star" aria-hidden="true">*</span>
                                            <label htmlFor="zipcd"><span className="blind">필수입력</span>주소</label>
                                        </span>
                                    </dt>
                                    <dd>
                                        <div className="cmem_inpbtn_set">
                                            <span className="cmem_inp_txt">
                                                <input 
                                                    type="text" 
                                                    id="zipcd" 
                                                    name="street"
                                                    readOnly
                                                    defaultValue={address.street}
                                                    />
                                            </span>
                                            <button 
                                                type="button" 
                                                className="cmem_btn cmem_btn_gray" 
                                                id="btnPostNum" 
                                                onClick={openAddressAPI}>
                                                우편번호<span className="blind">찾기</span>
                                            </button>
                                        </div>
                                        <div className="addr_info v2" id="addr_info">
                                            {AddressDetail &&
                                                <span className="cmem_inp_txt">
                                                    <input 
                                                        type="text" 
                                                        name="detail"
                                                        defaultValue={address.detail}
                                                        onChange={inputChange}
                                                    />
                                                </span>
                                            }             
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        
                        <input type="hidden" name="mbrCnts[0].cntsTypeCd" defaultValue="20"></input>
                        <div className="cmem_row">
                            <div className="cmem_user_phone">
                                <dl className="cmem_ip">
                                    <dt>
                                        <span className="cmem_require">
                                            <span className="star" aria-hidden="true">*</span>
                                            <label htmlFor="mem_hpno"><span className="blind">필수입력</span>휴대폰번호</label>
                                        </span>
                                    </dt>
                                    <dd>
                                        <div className="cmem_inp_txt">
                                            <input 
                                                type="tel" 
                                                id="mem_hpno" 
                                                title="휴대폰번호 입력"
                                                placeholder="하이픈 포함해서 입력해주세요" 
                                                name="phoneNum" 
                                                maxLength="20" 
                                                defaultValue={inputData.phoneNum}
                                                onChange={inputChange}
                                                />
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="cmem_row">
                            <dl className="cmem_ip">
                                <dt>
                                    <span className="cmem_require">
                                        <span className="star" aria-hidden="true">*</span>
                                        <label htmlFor="email"><span className="blind">필수입력</span>이메일주소</label>
                                    </span>
                                </dt>
                                <dd>
                                    <span className="cmem_inp_txt">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="이메일주소" 
                                            maxLength="50" 
                                            defaultValue={inputData.email}
                                            onChange={inputChange}
                                            />

                                            
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="cmem_card_tit">
                        <h3>광고 정보 수신 동의</h3>
                    </div>
                    <div className="cmem_cont">
                        <div className="cmem_row">
                            <div className="cmem_terms">
                                
                                
                                    <div className="cmem_term_tit">
                                        <h4>신세계포인트</h4>
                                    </div>
                                    <div className="cmem_term_box">
                                    <span className="cmem_inp_chk">
                                        <input type="checkbox" id="policy" data-type="agree10" defaultValue="10" name="mbrSvcAgreeTypeCd"></input> <label htmlFor="policy"><strong>(선택)</strong> 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의</label>
                                    </span> <a href="" className="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                    </div>
                                    <div className="cmem_term_box">
                                    <span className="cmem_inp_chk">
                                        <input type="checkbox" id="policy2" data-type="agree10" defaultValue="20" name="mbrSvcAgreeTypeCd"></input> <label htmlFor="policy2"><strong>(선택)</strong> 선택 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용 동의</label>
                                    </span>
                                        <a href="" className="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                            
                                        <ul className="cmem_termlst ty_inner" id="agree10">
                                            <li className="ty_full">
                                            <span className="cmem_inp_chk">
                                                <input type="checkbox" title="이메일 모두 선택" data-type="infoRcvAgreeEmail" id="infoRcvAgreeEmail" disabled=""></input> <label htmlFor="infoRcvAgreeEmail">이메일</label>
                                            </span>
                                                <span className="tx_bracket">(</span>
                                                <ul className="cmem_inp_lst">
                                                    <li><span className="cmem_inp_chk"><input type="checkbox" id="chkPoint" title="신세계포인트 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" defaultValue="40017" disabled=""></input> <label htmlFor="chkPoint">신세계포인트</label></span></li>
                                                    <li><span className="cmem_inp_chk"><input type="checkbox" id="chkEmart" title="이마트 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" defaultValue="40021" disabled=""></input> <label htmlFor="chkEmart">이마트</label></span></li>
                                                    <li><span className="cmem_inp_chk"><input type="checkbox" id="chkDepart" title="신세계백화점 선택" data-type="infoRcvAgreeEmail" name="emailAgreeSiteCd" defaultValue="40009" disabled=""></input> <label htmlFor="chkDepart">신세계백화점</label></span></li>
                                                </ul> <span className="tx_bracket">)</span>
                                            </li>
                                            <li><span className="cmem_inp_chk"><input type="checkbox" id="chkAgreeSMS" title="문자 선택" name="infoRcvMediaCd" defaultValue="20" disabled=""></input> <label htmlFor="chkAgreeSMS">문자</label></span></li>
                                            <li><span className="cmem_inp_chk"><input type="checkbox" id="chkAgreeDM" title="우편물 선택" name="infoRcvMediaCd" defaultValue="30" disabled=""></input> <label htmlFor="chkAgreeDM">우편물</label></span></li>
                                            <li><span className="cmem_inp_chk"><input type="checkbox" id="chkAgreeTM" title="텔레마케팅 선택" name="infoRcvMediaCd" defaultValue="40" disabled=""></input> <label htmlFor="chkAgreeTM">텔레마케팅</label></span></li>
                                        </ul>
                                        <p className="cmem_noti">
                                            <em>광고 정보 수신동의를 하시면 신세계포인트 서비스 및 이벤트 정보를 받으실 수 있습니다.</em>
                                        </p>
                                    </div>
                                
                                <div className="cmem_term_tit">
                                    <h4>SSG.COM</h4>
                                </div>
                                <div className="cmem_term_box">
                                    <span className="cmem_inp_chk">
                                        <input type="checkbox" id="policySsg" data-type="agree40019" name="ssgInfoRcvAgreeDto.mbrSvcAgreeTypeCd" defaultValue="10"></input><label htmlFor="policySsg"><strong>(선택)</strong> 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의</label>
                                    </span>
                                    <a href="" className="cmem_btn cmem_btn_gray3" title="새창 열림">내용보기</a>
                                    <ul className="cmem_termlst" id="agree40019">
                                        <li><span className="cmem_inp_chk"> <input type="checkbox" id="emailRcvYn" name="ssgInfoRcvAgreeDto.emailRcvYn" defaultValue="Y" disabled=""></input> <label htmlFor="emailRcvYn">이메일</label></span></li>
                                        <li><span className="cmem_inp_chk"> <input type="checkbox" id="smsRcvYn" name="ssgInfoRcvAgreeDto.smsRcvYn" defaultValue="Y" disabled=""></input> <label htmlFor="smsRcvYn">문자</label></span></li>
                                    </ul>
                                    <p className="cmem_noti">
                                        <em>광고 정보 수신동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다.</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmem_row">
                            <p className="cmem_noti">
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
            <div className={'DaumPostcodeBackground '+modalCheck}>
                <div className={"AddressAPI "+modalCheck}> 
                    <button 
                        className='closeButton'
                        onClick={() => {setmodalCheck("modalClose"); document?.body.classList.toggle("modalOpen");}}>
                        X
                    </button>
                    <DaumPostcode
                        onComplete={selectAddressAPI} 
                        autoClose={false}
                    />
                </div>

            </div>
        </div>
    );
}


export default JoinForm;