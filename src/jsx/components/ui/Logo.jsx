import React from 'react';

import { Link } from 'react-router-dom';

import DownArrowImg from '../../../img/downArrow.png'
import SSGImg from '../../../img/SSG.png'
import SSGMallImg from '../../../img/SSGmall.png'

function Logo() {
    return ( 
        <div className='logo'>
            <h1>
                <Link to="/" className='logo-left'>
                    <img src={SSGImg} />
                </Link>
                <Link to="/" className='logo-right'>
                    <img src={SSGMallImg} />
                </Link>
            </h1>
            <Link to="/"><img src={DownArrowImg} width={16} height={16}/></Link>
        </div>
     );
}

export default Logo;