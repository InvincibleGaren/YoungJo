import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jwt-decode';

//postman
//postman123

function LoginSubmit(event) {
    
    event.preventDefault();

    
    let loginId = document.getElementById("inp_id").value;
    let password = document.getElementById("inp_pw").value;
    const url = "http://10.10.10.127:9000/api/login"
    const data = {loginId, password}
    console.log(data);
    axios.post(url, data)
        .then(LoginResult => { 
            let jwtdecode = jwt(LoginResult.headers.authentication)
            alert(jwtdecode.name+"님 환영합니다.");
            window.history.back();
            //sessionStorage
        })
        .catch(error => {
            switch(error.response.status){
                case 401:
                    alert(error.response.data.data)
                    break;
                default:
                    alert("알 수 없는 응답 : "+error.response.status);
                    break;
            }
        });
}

export default LoginSubmit;