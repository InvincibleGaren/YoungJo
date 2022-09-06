import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Server from '../../datas/Server.js';
import Footer from '../layouts/Footer.jsx';


function ShippingAddressManagement() {

    const [shppingAddressDatas, setShippingAdressDatas] = useState()
    const access_token = sessionStorage.getItem("login");
	const Navigate = useNavigate();



    useEffect(()=>{
        axios.get(`${Server.baseUrl}api/my/deliveryAddr/list`, {
            headers: {
                'Authentication': access_token
            }
        })
        .then(Response=> {
            console.log("배송지 정보:", Response.data.data)

            setShippingAdressDatas(Response.data.data)

        })
    },[])

  return (
    <div>
        {/* 헤더 */}
        <div className="mcom_tit_renew  react-area">
			<h2 className="mcom_tit_txt clickable"><Link to="#">배송지 관리</Link></h2>
				<div className="mcom_tit_lft">
                    <Link to="#" className="btn_back clickable" onClick={()=>{Navigate(-1)}}><span className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></Link>
                </div>
            <div className="mcom_tit_rgt">
            </div>
        </div>

        {/* 선택된 배송지 타이틀 */}
        <div className="myodr_tit">
			<i className="myodr_tit_ico"></i>
			<h3 className="myodr_tit_tx">[MY배송지] 집</h3>
		</div>

        {/* 내용 */}
        <div className="myodr_tab">		
			<ul className="myodr_tab_list" role="tablist">
				<li role="presentation" className="on"><Link to="/m/comm/shpplocList.ssg" role="tab" aria-selected="true"><span className="myodr_tab_tx">MY배송지</span></Link></li>				
				<li role="presentation"><Link to="/m/comm/shareShpplocList.ssg" role="tab" aria-selected="false"><span className="myodr_tab_tx">함께장보기 배송지</span></Link></li>				
			</ul>
		
			<div className="myodr_tab_cont">
				<div className="myodr_tab_panel" role="tabpanel">					
					<ul className="myodr_tabrdo_lst">						
						<li className="myodr_tabrdo">
							<div className="myodr_rdo on">
								<input type="radio" id="ui_test_rdotab0" name="delivery" value="1" defaultChecked="checked"/>
								<label htmlFor="ui_test_rdotab0" className="myodr_rdo_cont">
                                    {shppingAddressDatas && 
                                    shppingAddressDatas.map(deliveryitem =>(
                                        <span className="myodr_rdo_inner" key = {deliveryitem.listIndex}>
                                            <strong className="tx_deliv_name">
                                                <span className="blind">배송지명</span> {deliveryitem.alias}
                                                <em>기본배송지</em>											
                                            </strong>
                                            <span className="tx_deliv_address">주소: {deliveryitem.deliveryAddress} </span>
                                        </span>
                                    ))
                                    }
									
								</label>
								<span className="myodr_btn_rt">
									<button type="button" className="myodr_btn_tx" ><span>수정</span></button>									
								</span>
							</div>
						</li>						
					</ul>					
					<div className="myodr_btn_newaddr">
						<button type="button" ><span><span aria-hidden="true">+</span> 새 배송지 추가</span></button>
					</div>
					<div className="myodr_btnarea">
						<ul>
							<li><button type="button" className="myodr_btn myodr_btn_gray" ><span>이번만배송지 설정</span></button></li>
							<li><button type="button" className="myodr_btn myodr_btn_orange" ><span>기본 배송지 설정</span></button></li>
						</ul>
					</div>
					<div className="myodr_infolst">
						<ul>
							<li>이마트, 트레이더스 상품은 선택한 배송지에 따라 주문하실 상품의 재고가 달라집니다.</li>
						</ul>
					</div>	
				</div>				
				<div className="myodr_banner">
					<Link to="http://m.ssg.com/service/eosPickup.ssg?salestrNo=2498"><img src="//sui.ssgcdn.com/ui/m_ssg/img/cs/bn_pickup.jpg" alt="청계천점 PIXEL OPEN 온라인 주문하고 원하는 시간에 픽업을 쓱"/></Link>
				</div>				
			</div>
		</div>

        <Footer/>
    </div>
  )
}

export default ShippingAddressManagement