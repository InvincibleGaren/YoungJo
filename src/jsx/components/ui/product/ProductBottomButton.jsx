import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ProductBottomButton({option1List, optionName1, optionName2, boardId}) {

    console.log(option1List);

    const [option2List, setOption2List] = useState();

    const handleSelectFirstOption = (e) => {
        console.log(e.target.value);

        axios.get(`http://121.145.206.143:9000/api/pdtBoard/detail/option2/${boardId}/${e.target.value}`).then(Response => {
        // axios.get(`http://localhost:9000/api/pdtBoard/detail/option2/${boardId}/${e.target.value}`).then(Response => {
            setOption2List(Response.data.data);
            console.log(Response.data);
        }).catch(Error => {
            console.log(Error);
        })
    }

    const handleSelectSecondOption = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="mndtl_opt_btm _js_mndtl_opt_btm">
            <div className="opt_btm_bgn">
                <div>
                    <div>
                        <Form.Select  aria-label="Default select example" onChange={handleSelectFirstOption}>
                            <option>선택하세요. &#40;{optionName1}&#41;</option>
                            {
                                option1List.map((item) => (
                                    <option key={item.id} value={item.optValue}>{item.optValue}</option>
                                ))
                            }
                        </Form.Select>
                    </div>
                    {
                        option2List && 
                        <div>
                            <Form.Select  aria-label="Default select example" onChange={handleSelectSecondOption}>
                                <option>선택하세요. &#40;{optionName2}&#41;</option>
                                {
                                    option2List.map((item) => (
                                        <option key={item.id} value={item.opt2Value}>{item.opt2Value}-{item.price}</option>
                                    ))
                                }n
                            </Form.Select>
                        </div>
                    }
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
    );
}

export default ProductBottomButton;