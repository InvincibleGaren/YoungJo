import React from 'react';

import HartImg from '../../../img/heart.png'
import { Link } from 'react-router-dom';
import "../../../css/components/Hart.css"

function Hart() {
    return ( 
        <Link to="/" className="Hart">
            <img src={HartImg} />
        </Link>    
     );
}

export default Hart;


