import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Server from '../../../../datas/Server.js';
import LikeButton from '../LikeButton';

import "../../../../css/components/ProductBottomButton.css"

function ProductBottomButton({option1List, optionName1, optionName2, boardId, productData, LikeCheckState, setLikeCheckState}) {
// function ProductBottomButton(props) {

    console.log(option1List);

    const[isView, setIsView] = useState(false);

    const [option2List, setOption2List] = useState();

    const handleSelectFirstOption = (e) => {
        console.log(e.target.value);

        axios.get(`${Server.baseUrl}api/pdtBoard/detail/opt2/${boardId}/${e.target.value}`).then(Response => {
        // axios.get(`http://localhost:9000/api/pdtBoard/detail/opt2/${boardId}/${e.target.value}`).then(Response => {
            setOption2List(Response.data.data);
            console.log(Response.data);
        }).catch(Error => {
            console.log(Error);
        })
    }

    const handleSelectSecondOption = (e) => {
        console.log(e.target.value)
    }

    console.log("props.productData");

    return (
        <div className="ProductBottomButton mndtl_opt_btm _js_mndtl_opt_btm">
            <div className="opt_btm_bgn">
                <form>
                    <div>
                        <Form.Select id="option1" onChange={handleSelectFirstOption}>
                            <option>선택하세요. &#40;{optionName1}&#41;</option>
                            {
                                option1List.map(item => (
                                    <option key={item.id} value={item.optValue}>{item.optValue}</option>
                                ))
                            }
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select id="option2" onChange={handleSelectSecondOption}>
                            <option>선택하세요. &#40;{optionName2}&#41;</option>
                            {
                                option2List && option2List.map((data) => (
                                    <option key={data.pdtId} value={data.opt2Value}>{data.opt2Value} &#40;남은 수량 : {data.stock}개, {(data.price).toLocaleString()}원&#41;</option>
                                ))
                            }
                        </Form.Select>
                    </div>
                </form>

                <div className="btm_bgn_in dps1">
                    <ul className="btm_bgn_bx type_other1">
                        {/* 하트 - 로그인정보 */}
                        <li className="ty_like" data-react-unit-type="item">
                            <span className="cmlike _js_cmlike interestIt clickable">
                                <LikeButton Item={productData} LikeCheckState={LikeCheckState} setLikeCheckState={setLikeCheckState} />
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