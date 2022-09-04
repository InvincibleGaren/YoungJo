import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../../../img/cart.png';
import { LoginState } from '../../globalState/LoginState'
import "../../../css/components/Cart.css"

function Cart() {

    const Login = useContext(LoginState);

    return ( 
        <>
            { 
                Login === "true" ? 
                (
                    <Link to="/cartlogin" className='gnb_util_mn ty_cart clickable'>
                    <i class="icon icon_cart">
                        <span id="mHeaderCartNm" class="blind">장바구니</span>
                    </i>
                    <span className="cmnoti_push" id="cartCnt_header"><span class="blind" id="cartCntSpan">담은 상품 수</span>3</span>
                    </Link> 
                )
                :
                (
                    <Link to="/cartnotlogin" className='gnb_util_mn ty_cart clickable'>
                    <i class="icon icon_cart">
                        <span id="mHeaderCartNm" class="blind">장바구니</span>
                    </i>
                    </Link> 
                )
           }
        </>
     );
}

export default Cart;