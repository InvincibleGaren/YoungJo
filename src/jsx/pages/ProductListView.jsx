import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom'

import Server from '../../datas/Server.js';
import AllSearchItem from '../components/ui/AllSearchItem';
import "../../css/components/AllSearchItem.css";
import "../../css/pages/AllSearch.css";
import CategoryMenu from '../components/ui/CategoryMenu';



function ProductListView() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId",searchParams.get('ctglId'))
    console.log("categoryLevel",searchParams.get('categoryLevel'))

    const [productList, setProductList] = useState();
    const [cateLevel1Name, setCateLevel1Name] = useState(searchParams.get('name'));
    const [cateLevel2Name, setCateLevel2Name] = useState();
    const [cateLevel3Name, setCateLevel3Name] = useState();


    // const [url, setUrl] = useState()

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/pdtBoard/list/ctgL${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setProductList(Response.data.data.boardList)
        })
    },[searchParams,Server])


    return (
        <>
        <div className="mcom_tit_renew  react-area">
			<div id="mcom_path_cate" className="mcom_category">
						<div className="cate_path">
							<span className="depth previous">
								<a href="https://m.ssg.com/page/ssgfashion/_v19.ssg">
									<span className="ctg_mn"><span className="ctg_txt">{cateLevel1Name}</span></span>
								</a>
							</span>
							<span className="depth current">
								
									<strong className="ctg_txt">명품/수입의류</strong>
									
							</span>
						</div>
					</div>
				<div className="mcom_tit_lft">
								<a href="javascript:history.back();" className="btn_back clickable"><span className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></a>
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
        </>
    )
}

export default ProductListView