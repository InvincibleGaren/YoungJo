import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/SubTitleUi.css"

function SubTitleUi({title}) {
    return ( 
        <div className='SubTitleUi'>
            <span>{title}</span>
        </div>
     );
}

export default SubTitleUi;