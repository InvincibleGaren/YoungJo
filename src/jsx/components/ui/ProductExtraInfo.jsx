import React from 'react'

function ProductExtraInfo() {
    return (
        <div className="mndtl_sec_bx">
            <div className="mndtl_etc">
               <div className="mndtl_etc_cont">
                  <ul className="mndtl_etc_lst">
                     <li>
                        <a href="#" target="_parent">
                           <span><em>상품고시정보</em></span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="/#" target="_parent">
                           <span>교환, 반품, A/S 안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_parent">
                           <span>위탁판매자정보</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_parent">
                           <span>교환/반품/환불 안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_parent">
                           <span>배송안내</span>
                           <i className="mndtl_ic_arr"><span className="blind">보러가기</span></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
        </div>
    );
}

export default ProductExtraInfo;