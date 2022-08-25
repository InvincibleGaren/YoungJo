import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/NoticeBar.css"

function NoticeBar() {
    return ( 
        <div className='NoticeBar'>
            <hr />
            <div className='footer_notice'>
                
                <p>
                    <span className='f_notice_box'>공지</span>
                    &nbsp;[SSG.COM '스타벅스 서머 캐리백' 구매 고객 대상 보상 및 환불 공지]
                </p>
                <p className='f_arrow'>&gt;</p>
            </div>
        </div>
    );
}

export default NoticeBar;