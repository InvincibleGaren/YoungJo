import React from 'react';
import { Link } from 'react-router-dom';

function NewServiceItemElementNavi() {
    return ( 
        <li>
            <div className="cmhero_bn">
                <Link className="cmhero_bnlnk" to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg" data-react-tarea="홈|신규서비스_배너|배너_클릭|명절">
                    <img className="ssg_lazy" src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif" data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png" alt="명절" data-ll-status="observed" />
                </Link>
            </div>
            <div className="cmhero_tit">
                <Link className="cmhero_titlnk" to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg" data-react-tarea="홈|신규서비스_배너|배너_클릭|명절">
                    <h3 className="cmhero_titmain">
                        <span className="cmhero_titmain_tx">2022 추석 명절</span>
                    </h3>
                    <div className="cmhero_titsub">
                        <span className="ccmhero_titsub_tx">미리 준비하는 올 추석 명절 선물</span>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default NewServiceItemElementNavi;