import React from 'react';

import { Link } from 'react-router-dom';

function Logo() {
    return ( 
        <div className="gnb_mall">
            <h1>
                <span className="gnb_mall_logo v3">
                    <Link to="/" className="gnb_logo_ssg clickable">
                        <span className="blind">SSG</span>
                    </Link>
                    <Link to="/" className="gnb_logo_now clickable">
                        <span className="gnb_logo">
                            <span className="blind">신세계몰</span>
                        </span>
                    </Link>
                </span>
            </h1>
            <button className="gnb_mall_gate clickable" type="button" aria-expanded="false" onclick="javascript:ssg_react.directCall({tarea: '웹공통_N|GNB|몰이동'});">
                <span className="btn_label ty_off"><span className="blind">몰 목록 펼치기</span></span>
                <span className="btn_label ty_on"><span className="blind">몰 목록 접기</span></span>
            </button>
        </div>
     );
}

export default Logo;