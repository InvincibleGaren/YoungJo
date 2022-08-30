import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Server from "../../../datas/Server.js";

import "../../../css/components/LikeButton.css";

function LikeButton(props) {
    
    const [LikeState, setLikeState] = useState();

    useEffect(()=>{
        if(props.Item.boardLike)
        {
            setLikeState("cmlike_btn _js_cmlike_btn clickable on");
        }
        else{
            setLikeState("cmlike_btn _js_cmlike_btn clickable");
        }
    },[props.Item.boardLike])

    const LikeClick = (e) => {
        const url = `${Server.baseUrl}api/pdtBoard/pressLike/${props.Item.boardId}`
        const token = sessionStorage.getItem("login");
        const config = {timeout:1000, headers:{authentication: token}};
        if(token){
            axios.get(url, config)
            .then(LoginResult => { 
               console.log(LoginResult);
               if(LoginResult.data.data){
                    props.setLikeCheckState(!props.LikeCheckState);
               }else{
                    alert("관심 상품 등록 실패");
               }
            })
            .catch(error => {
                 console.log(error);
               switch(error.code){
                  case "ECONNABORTED":
                  case "ERR_NETWORK":
                       console.log(error);
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
        }else{
            window.location.href = "/login"
        }

    }

    return ( 
        <button id="LikeButton" className={LikeState} onClick={LikeClick} data-position="clip" data-react-tarea-dtl-cd="t00003">
            <span className="cmlike_ico">
                <i className="cmlike_primary_m"></i>
                <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                <span className="sr_on"><span className="blind">관심상품 등록</span></span>
            </span>
        </button>
     );
}

export default LikeButton;


