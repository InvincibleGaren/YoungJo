import axios from 'axios';
import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Server from '../../../../datas/Server.js';
import LikeButton from '../LikeButton';
import { Link } from 'react-router-dom';
import { LoginState } from '../../../globalState/LoginState';

function ProductBottomButton({option1List, optionName1, optionName2, boardId, productData, LikeCheckState, setLikeCheckState}) {

  const login = useContext(LoginState);
  console.log(option1List);

  const [isView, setIsView] = useState(true);
  const [option2List, setOption2List] = useState();
  const [isOpt2Select, setIsOpt2Select] = useState(false);
  const [selectProductDatas, setSelectProductDatas] = useState({ "opt1":"", "opt2":"", "opt2pdtId":"", "opt2price":"", "opt2stock":"" });
  const [productQty, setProductQty] = useState(1);

  const access_token = sessionStorage.getItem("login");
  console.log(access_token);

  const handleSelectFirstOption = (e) => {
    console.log("1 들어옴");
    console.log(e.target.value);
    setSelectProductDatas({ ...selectProductDatas, "opt1": e.target.value });

    axios.get(`${Server.baseUrl}api/pdtBoard/detail/opt2/${boardId}/${e.target.value}`)
      .then(Response => {
        setOption2List(Response.data.data);
        console.log(Response.data);
      }).catch(Error => {
        console.log(Error);
      })
  }

  console.log(option2List);
  option2List && console.log(option2List[0].pdtId)
  
  const handleSelectSecondOption = (e) => {
    console.log("2 들어옴");
    console.log(e.target.value);

    for(let i in option2List) {
      if(e.target.value == option2List[i].pdtId) {
        
        setSelectProductDatas({ ...selectProductDatas, 
          "opt2": option2List[i].opt2Value,
          "opt2pdtId": e.target.value,
          "opt2price": option2List[i].price,
          "opt2stock": option2List[i].stock
        });
      }
    }
    setIsOpt2Select(!isOpt2Select);
  }
 
  const handleView = () => {
    setIsView(!isView);
  }

  const inCreQty = () =>{
    if(productQty === selectProductDatas.opt2stock){
      return alert(`해당 상품의 재고가 ${selectProductDatas.opt2stock}개 남았습니다.`);
    }
    setProductQty(productQty + 1);
  }
  const deCreQty = () =>{
    if(productQty === 1){
        return alert("상품의 개수는 1 이하가 될 수 없습니다.");
    }
    setProductQty(productQty - 1);
  }

  console.log(selectProductDatas.opt2pdtId);
  console.log(productQty);
  
  const handleCart = () => {
    axios.post(`${Server.baseUrl}api/cart/addPdt`,
        [
          {
            "pdtId": selectProductDatas.opt2pdtId,
            "pdtQty": productQty
          }
        ], {
        headers: {
          'Authentication': access_token
        }
        })
        .then(Response => {
          console.log(Response);
          alert("장바구니에 상품이 담겼습니다.")
        })
        .catch(error => (
          console.log(error)
        ))
  }

  return (
      <div className="ProductBottomButton mndtl_opt_btm _js_mndtl_opt_btm">
        <div className="opt_btm_bgn">
          <div className={ isView ? "btm_bgn_in dps1" : "isNonView"}>
            <ul className="btm_bgn_bx type_other1">
              <li className="ty_like" data-react-unit-type="item">
                <span className="cmlike _js_cmlike interestIt clickable">
                  <LikeButton Item={productData} LikeCheckState={LikeCheckState} setLikeCheckState={setLikeCheckState} />
                </span>
              </li>
              <li onClick={handleView}>
                <p className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable" target="_parent">
                  <span className="btn_tx">구매하기</span>
                </p>
              </li>
            </ul>
          </div>

          <div className={ isView ? "isNonView" : "" }>
            <div id="_cdtl_opt_bar" className="mndtl_opt_bar _js_mndtl_opt_bar react-area on">
              <div className='mndtl_opt_wrap _js_opt_wrap'>
                <div id="cdtl_scr1" className="mndtl_scr_area">
                  <div className="mndtl_scroll">
                    <div className="mndtl_opt_group">
                      <div className="mndtl_opt_comp" id="selectItemArea">
                        <button className='arrow_button' onClick={handleView}>&or;</button>
                        <div className="mndtl_opt_bx" id="optBarDynamicArea">
                          <div id="qty_area_1000449529305_00002" className="mndtl_opt_ani add">	
                            <form>
                              <div className='select_box'>
                                <Form.Select id="option1" onChange={handleSelectFirstOption}>
                                  <option>선택하세요. &#40;{optionName1}&#41;</option>
                                  {
                                    option1List.map(opt1 => (
                                      <option key={opt1.id} value={opt1.optValue}>{opt1.optValue}</option>
                                    ))
                                  }
                                </Form.Select>
                              </div>
                              <div className='select_box'>
                                <Form.Select id="option2" onChange={handleSelectSecondOption}>
                                  {/* {console.log("setSelectProductDatas.opt1 : "+selectProductDatas.opt1)}
                                  {console.log("option2List : ") && console.log(option2List)} */}
                                  <option>선택하세요. &#40;{optionName2}&#41;</option>
                                  {
                                    option2List && option2List.map(opt2 => (
                                      <option key={opt2.pdtId} value={opt2.pdtId}>
                                        {opt2.opt2Value} - {(opt2.price).toLocaleString()}원 &#40;남은 수량 : {opt2.stock}개&#41;
                                      </option>
                                      ))
                                  }
                                </Form.Select>
                              </div>
                            </form>
                            <div className={ isOpt2Select ? "mndtl_opt_selected active select_box" : "isNonView" } >
                              <dl>
                                <dt>{productData.title} - {selectProductDatas.opt1} / {selectProductDatas.opt2}</dt>
                                <dd className="mndtl_art_l">
                                  <div className="mndtl_amount">
                                    <button className="mndtl_b_minus clickable" onClick={deCreQty}></button>
                                    <span className="mndtl_opa_area">
                                      <span className="opa_tx">{productQty}</span>
                                    </span>
                                    <button className="mndtl_b_plus clickable" onClick={inCreQty}></button>
                                  </div>
                                </dd>
                                <dd className="mndtl_art_r">			
                                  <span className="price"><em className="ssg_price">{(selectProductDatas.opt2price * productQty).toLocaleString()}</em><span className="ssg_tx">원</span></span>			
                                </dd>
                              </dl>
                              <p className="mndtl_item_del"><span className="mndtl_delete">삭제</span></p>	
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            
            <div className='btm_bgn_in dps2'>
              <ul className="btm_bgn_bx" id="dps2_buy">
                <li>
                  {  
                    login === "true" ? 
                    <p className="mndtl_btn type02 clickable" target="_parent" onClick={handleCart}>
                        <span className="btn_tx">장바구니</span>
                    </p>
                    :
                    <Link to={`/login`} className="mndtl_btn type02 clickable" target="_parent">
                        <span className="btn_tx">장바구니</span>
                    </Link>                            
                  }
                </li>
                <li>
                  {  
                    login === "true" ? 
                    <Link to={`/order/${boardId}`} className="mndtl_btn type01 clickable" target="_parent">
                        <span className="btn_tx ssgpay"><i className="ico_txt_ssgpay_btm"></i>바로구매</span>
                    </Link>
                    :
                    <Link to={`/login`} className="mndtl_btn type01 clickable" target="_parent">
                        <span className="btn_tx ssgpay"><i className="ico_txt_ssgpay_btm"></i>바로구매</span>
                    </Link>
                  }
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
  );
}

export default ProductBottomButton;