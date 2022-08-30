import React from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../../../img/cart.png';

import "../../../css/components/Cart.css"

function Cart() {
    return ( 
        <div>
            { 
                sessionStorage.getItem("login") ? 
                <Link to="/cartlogin" className='Cart'><img src={CartImg} alt="카트"/></Link>
                :
                <Link to="/cartnotlogin" className='Cart'><img src={CartImg} alt="카트"/></Link>
            }
        </div>
     );
}

export default Cart;