import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../../../img/cart.png';
import { LoginState } from '../../globalState/LoginState'
import "../../../css/components/Cart.css"

function Cart() {

    const Login = useContext(LoginState);

    return ( 
        <div>
            { 
                Login === "true" ? 
                <Link to="/cartlogin" className='Cart'><img src={CartImg} alt="카트"/></Link>
                :
                <Link to="/cartnotlogin" className='Cart'><img src={CartImg} alt="카트"/></Link>
            }
        </div>
     );
}

export default Cart;