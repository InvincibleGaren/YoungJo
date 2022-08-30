import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/MemberHeader.css"

function MemberHeader({title}) {
    return ( 
        <div className="MemberHeader mcom_tit_renew">
            <h2 className="mcom_tit_txt"><a href="#">{title}</a></h2>
            <div className="mcom_tit_lft">
                <Link to="#" onClick={()=>{window.history.back();}} className="btn_back"><span className="sp_ctg_icon ctg_icon_back"></span></Link>
            </div>
        </div>
    );
}

export default MemberHeader;