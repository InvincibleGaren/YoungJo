import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/RedButton.css"

function RedButton({title, url="#", clickCallback=null}) {
    return ( 
        <div className="cmem_btn_area">
            <Link to={url} className="cmem_btn cmem_btn_orange3" onClick={clickCallback}>{title}</Link>
        </div>
    );
}

export default RedButton;