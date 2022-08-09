import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/MainTitleUi.css"

function MainTitleUi({title}) {
    return ( 
        <div className='TitleUi'>
            <h3>{title}</h3>
        </div>
     );
}

export default MainTitleUi;