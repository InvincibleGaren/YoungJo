import React from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../../../img/cart.png';

import "../../../css/components/Cart.css"

function Cart() {
    return ( 
        
        <Link to="/cartempty" className='Cart'><img src={CartImg} alt="카트"/></Link>

        
     );
}

export default Cart;


