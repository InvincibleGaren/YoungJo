import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jwt-decode';
import Server from "../../datas/Server.json";
//postman
//postman123

function LoginSubmit(event) {
    
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
            window.location.href = "/"
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

export default LoginSubmit;