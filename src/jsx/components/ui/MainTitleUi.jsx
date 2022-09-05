import React from 'react';
import { Link } from 'react-router-dom';

function MainTitleUi({title, subTitle, url}) {
    return ( 
        <div className="cmgrid_full_box js-set-header" data-page-set-id="112">
            <div className="cmtit_heading v2">
                <div className="cmtit_txtbx">
                    <h3 className="cmtit_maintxt">{title}</h3>
                    <p className="cmtit_subtxt">{subTitle}</p>
                </div>
                <div className="cmtit_txtbtn">
                    { url ? <Link to={url} className="cmtit_txtbtn_link">전체보기</Link> : "" }
                </div>
            </div>
        </div>
     );
}

export default MainTitleUi;