import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../../../img/cart.png';
import { LoginState } from '../../globalState/LoginState'
import { useNavigate } from "react-router-dom";

import '../../../css/components/BackButton.css'

function BackButton() {

    const Navigate = useNavigate();

    return ( 
        <div class="BackButton mndtl_lft">
            <Link to="#" onClick={()=>{Navigate(-1);}} class="mndtl_btn_back clickable"></Link>
        </div>
     );
}

export default BackButton;




