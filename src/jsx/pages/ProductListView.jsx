import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import Server from '../../datas/Server.js';
import AllSearchItem from '../components/ui/AllSearchItem';
import "../../css/components/AllSearchItem.css";
import "../../css/pages/AllSearch.css";
import CategoryMenu from '../components/ui/CategoryMenu';
import FooterNav from '../components/ui/FooterNav.jsx';
import Header from '../layouts/Header.jsx';



function ProductListView() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId :",searchParams.get('ctglId'))
    console.log("categoryLevel :",searchParams.get('categoryLevel'))

    const [productList, setProductList] = useState();
	const [cateNav, setCateNav] = useState();
    const [cateNavId, setCateNavId] = useState(searchParams.get('catenavid'));
	// ctgl1 id
    const [cateLevel2Name, setCateLevel2Name] = useState();
    const [cateLevel3Name, setCateLevel3Name] = useState();

	const [cateSubNavId, setCateSubNavId] = useState(searchParams.get('ctglId'));

	const Navigate = useNavigate();




    // const [url, setUrl] = useState()

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/pdtBoard/list/ctgL${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setProductList(Response.data.data.boardList)
        })
    },[searchParams,Server])

	useEffect(()=> {
        axios.get(`${Server.baseUrl}api/ctg/nav${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setCateNav(Response.data.data.category)
			// ctgL1 카테고리 데이터
			setCateSubNavId(Response.data.data.subCategoryList)
			//id가 고유값이라서 인덱스로 처리 못하는거지?
        })
    },[searchParams,Server])

    return (
        <>
		<Header/>
        <div className="mcom_tit_renew  react-area">
			<div id="mcom_path_cate" className="mcom_category">
						<div className="cate_path">
							<span className="depth previous">
								<Link to="https://m.ssg.com/page/ssgfashion/_v19.ssg" >
									<span className="ctg_mn"><span className="ctg_txt">{cateNav && cateNav.name}여기가 어딘가</span></span>
								</Link>
							</span>
							<span className="depth current">
								
									<strong className="ctg_txt"></strong>
									
							</span>
						</div>
					</div>
				<div className="mcom_tit_lft">
								<Link to="#;" className="btn_back clickable"><span className="sp_ctg_icon ctg_icon_back" onClick={()=>{Navigate(-1)}}><span className="blind">이전 페이지</span></span></Link>
							</div>
						<div className="mcom_tit_rgt">
						<div className="btn_cate btn_clip">
							<span className="cmlike _js_cmlike interestIt">
										<input type="hidden" name="attnDivCd" value="20" />
										<input type="hidden" name="attnDivDtlCd" value="" />
										<input type="hidden" name="siteNo" value="6005" />
										<input type="hidden" name="attnTgtIdnfNo1" value="6000201496" />
										<input type="hidden" name="attnTgtIdnfNo2" value="" />
										<input type="hidden" name="checked" value="N" />
										<button className="cmlike_btn _js_cmlike_btn   ">
											<span className="cmlike_ico">
												<i className="cmlike_primary_m"></i>
												<span className="sr_off"><span className="blind">관심상품 취소</span></span>
												<span className="sr_on"><span className="blind">관심상품 등록</span></span>
											</span>
										</button>
									</span>
								</div>
						<div className="btn_cate btn_share">
								<button type="button" className="cm_bt_share clickable" data-morph-target=".mcom_ly_share">
									<span className="blind">공유하기</span>
									<i className="icon ty_md icon_share_sns" aria-hidden="true"></i>
								</button>
							</div>
						</div>
					</div>
                    
        <CategoryMenu />
        <div className='AllSearch'>
            <ul id="AllSearchItemList" className="cmitem_grid_lst mnsditem_ty_thmb">
                {
                    productList && productList.map(item=>(
                        <AllSearchItem key={item.listIndex} Item={item}/>
                    ))
                }
            </ul>
        </div>
		<FooterNav/>
        </>
    )
}

export default ProductListView