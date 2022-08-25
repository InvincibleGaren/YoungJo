import React from 'react'
import { useState, useEffect } from 'react';

function ProductBottomButton() {

    const[isView, setIsView] = useState(false);

    useEffect(()=>{
        setIsView(!isView)
    }, [])

    const handleView = () => {
        setIsView();
    }

    return (
        <div className="mndtl_opt_btm _js_mndtl_opt_btm  react-area">
            <div className="opt_btm_bgn">
                <div>
                    <div>
                        <select className="select" name="" >
                            <option>선택하세요. &#40;모델명&#41;</option>
                            {/* optionValue1 */}
                            <option value="01 586666-02">01&#41;586666-02</option>
                            <option value="01 586666-02">01&#41;586666-02</option>
                            <option value="01 586666-02">01&#41;586666-02</option>
                            <option value="01 586666-02">01&#41;586666-02</option>
                        </select>
                    </div>
                    <div>
                        <select className="select" name="" >
                            <option>선택하세요. &#40;사이즈&#41;</option>
                            {/* optionValue2 */}
                            <option value="M_95">M_95</option>
                            <option value="M_100">M_100</option>
                        </select>
                    </div>
                </div>

                <div className="btm_bgn_in dps1">
                    <ul className="btm_bgn_bx type_other1">
                        {/* 하트 - 로그인정보 */}
                        <li className="ty_like" data-react-unit-type="item">
                            <span className="cmlike _js_cmlike interestIt clickable">
                                <button className="cmlike_btn _js_cmlike_btn enp_mobon_wish">
                                    <span className="cmlike_ico">
                                        <i className="cmlike_primary_l"></i>
                                        <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                                        <span className="sr_on"><span className="blind">관심상품 등록</span></span>
                                    </span>
                                </button>
                            </span>
                        </li>

                        {/* 구매하기 - 장바구니, 바로구매 */}
                        <li>
                            <a href="#" className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable" target="_parent">
                                <span className="btn_tx">구매하기</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductBottomButton