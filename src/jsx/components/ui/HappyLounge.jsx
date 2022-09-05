import React from 'react';
import { Link } from 'react-router-dom';
import HappyLoungeItem from './HappyLoungeItem';



function HappyLounge() {

    return ( 
        <>
            <div className="cmgrid_full_box js-set-header" data-page-set-id="112">
                <div className="cmtit_heading v2">
                    <div className="cmtit_txtbx">
                        <h3 className="cmtit_maintxt">Happy Lounge</h3>
                        <p className="cmtit_subtxt">당신의 쇼핑이 특별해지는, 매일 오전 9시</p>
                    </div>
                    <div className="cmtit_txtbtn">
                        <Link to="https://m-shinsegaemall.ssg.com/page/happybuy.ssg" className="cmtit_txtbtn_link">전체보기</Link>
                    </div>
                </div>
            </div>
            <HappyLoungeItem />
            <HappyLoungeItem />
            <HappyLoungeItem />
        </>
     );
}

export default HappyLounge;