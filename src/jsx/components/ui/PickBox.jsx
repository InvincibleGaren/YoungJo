import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/PickBox.css"

function PickBox({pickCount}) {
    return ( 
        <div className='PickBox'>
            <span>{pickCount}</span>개 구매중
        </div>
    );
}

export default PickBox;