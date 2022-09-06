import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginState } from '../../globalState/LoginState'
import axios from 'axios';
import Server from "../../../datas/Server";

import "../../../css/components/Cart.css";

function Cart() {

    const [cartCnt, setCartCnt] = useState();

    const Login = useContext(LoginState);
    const access_token = sessionStorage.getItem("login");
    console.log(access_token);

    useEffect(()=>{
        axios.get (`${Server.baseUrl}api/cart`, {
                headers: {
                  'Authentication': access_token
                }
            })
            .then(Response=>{
                console.log(Response.data);
                console.log(Response.data.data);
                console.log(Response.data.data.length);
                setCartCnt(Response.data.data.length)
            })
            .catch(error=>{
                console.log(error);
            })
    }, [])
    console.log(cartCnt);

    return ( 
        <>
            { 
                Login === "true" ? 
                (
                    <Link to="/cartlogin" className='gnb_util_mn ty_cart clickable'>
                        <i className="icon icon_cart">
                            <span id="mHeaderCartNm" className="blind">장바구니</span>
                        </i>
                        {/* {
                            cartCnt === 0 ?
                            <span className="blind" id="cartCntSpan">담은 상품 수</span>
                            :
                            <span className="cmnoti_push" id="cartCnt_header"><span className="blind" id="cartCntSpan">담은 상품 수</span>{cartCnt}</span>
                        } */}
                        <span className="cmnoti_push" id="cartCnt_header"><span className="blind" id="cartCntSpan">담은 상품 수</span>{cartCnt}</span>
                    </Link> 
                )
                :
                (
                    <Link to="/cartnotlogin" className='gnb_util_mn ty_cart clickable'>
                        <i className="icon icon_cart">
                            <span id="mHeaderCartNm" className="blind">장바구니</span>
                        </i>
                    </Link> 
                )
           }
        </>
     );
}

export default Cart;