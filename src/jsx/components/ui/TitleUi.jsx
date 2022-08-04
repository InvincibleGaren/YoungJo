import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/TitleUi.css"

function TitleUi({title, spanTxt, url}) {
    return ( 
        <div className='TitleUi'>
            <h3>{title}</h3>
            <div className='SubTitleUi'>
                <span>{spanTxt}</span>
                <Link to={url}>전체보기&gt;</Link>
            </div>
        </div>
     );
}

export default TitleUi;