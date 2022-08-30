import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jwt-decode';
import Server from "../../datas/Server.js";
//postman
//postman123

function Join(event) {
    
    event.preventDefault();

    let loginId = document.getElementById("mbrLoginId").value;
    let password = document.getElementById("pwd").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("mem_name").value;

    const url = Server.baseUrl+"api/signUp";
    const data = {loginId, password ,email, name};
    const config = {timeout:1000};

    axios.post(url, data, config)
        .then(LoginResult => { 
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

export default Join;