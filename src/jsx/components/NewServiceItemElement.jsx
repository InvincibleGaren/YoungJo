import React from 'react';
import { Link } from 'react-router-dom';

function NewServiceItemElement() {
    return ( 
        <li className="swiper-slide swiper-slide-active" style={{width: "328.158px", marginRight: "5px"}}>
            <div className="cmhero_bn" >
                <Link className="cmhero_bnlnk clickable" to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg">
                    <img src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png" alt="명절" />
                </Link>
            </div>
            <div className="cmhero_tit">
                <Link className="cmhero_titlnk" to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg">
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

export default NewServiceItemElement;