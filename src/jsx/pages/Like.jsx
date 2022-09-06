import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Server from '../../datas/Server.js';
import AllSearchItem from '../components/ui/AllSearchItem.jsx';
import FooterNav from '../components/ui/FooterNav.jsx';
import Footer from '../layouts/Footer.jsx';


function Like() {

    const [likeProducts, setLikeProducts] = useState();
    const access_token = sessionStorage.getItem("login");


    useEffect(() =>{
        axios.get(`${Server.baseUrl}api/my/like`, {
            headers: {
                'Authentication': access_token
            }
        })
        .then(Response => {
            console.log("like 데이터:", Response.data.data)
            setLikeProducts(Response.data.data)
        })
    },[])

    
    return (
        <div>
            {/* 헤더 */}
            <div className="mcom_tit_renew  react-area">
                <h2 className="mcom_tit_txt clickable"><Link to="#">좋아요</Link></h2>
                    <div className="mcom_tit_lft">
                        <Link to="#" className="btn_back clickable"><span className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></Link>
                    </div>
                <div className="mcom_tit_rgt">
                </div>
            </div>

            {/* 폴더 네브 */}
            <div className="mylike_folder">
                <div className="mylike_folder_slider">
                    <ul className="mylike_folder_list" role="tablist">
                        <li className="mylike_folder_item" role="presentation">
                            <Link to="#" className="mylike_folder_btn ty_all clickable  on " role="tab" aria-selected="true" data-react-tarea="좋아요|상단_폴더리스트|전체보기_클릭">
                                <span className="mylike_folder_thmb"></span>
                                <em className="mylike_folder_name">전체보기</em>
                            </Link>
                        </li>
                        <li className="mylike_folder_item" role="presentation" id="mylike_folder_new">
                            <Link to="#" className="mylike_folder_btn ty_create clickable" data-mylikelayer-target="#mylikeNewFolder" role="tab" aria-selected="false" data-react-tarea="좋아요|상단_폴더리스트|새폴더_클릭">
                                <span className="mylike_folder_thmb"></span><em className="mylike_folder_name">새폴더</em>
                            </Link>
                        </li>
                        <li className="mylike_folder_item" role="presentation">
                            <Link to="#" className="mylike_folder_btn ty_manage clickable" data-mylikelayer-target="#mylikeNewFolderManage" role="tab" aria-selected="false" data-react-tarea="좋아요|상단_폴더리스트|폴더관리_클릭">
                                <span className="mylike_folder_thmb"></span><em className="mylike_folder_name">폴더관리</em>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 카테고리 네브 */}
            <div className="mylike_filter" role="radiogroup">
                <div className="mylike_filter_hscroll">
                    <Link to="#" className="mylike_filter_btn clickable  on " role="radio" aria-checked="true" data-react-tarea="좋아요|전체보기_유형탭|상품_클릭">
                            상품 ({likeProducts && likeProducts.totalBoardQty})
                    </Link>
                    <Link to="#" className="mylike_filter_btn clickable " role="radio" aria-checked="false" data-react-tarea="좋아요|전체보기_유형탭|브랜드&amp;스토어_클릭">
                            브랜드&amp;스토어 (0)
                    </Link>
                    <Link to="#" className="mylike_filter_btn clickable " role="radio" aria-checked="false" data-react-tarea="좋아요|전체보기_유형탭|카테고리_클릭">
                            카테고리 (0)
                    </Link>
                    <Link to="#" className="mylike_filter_btn clickable " role="radio" aria-checked="false" data-react-tarea="좋아요|전체보기_유형탭|콘텐츠_클릭">
                            콘텐츠 (0)
                    </Link>
                    <Link to="#" className="mylike_filter_btn clickable " role="radio" aria-checked="false" data-react-tarea="좋아요|전체보기_유형탭|포스트_클릭">
                        포스트 (0)
                    </Link>
                    <Link to="#" className="mylike_filter_btn clickable " role="radio" aria-checked="false" data-react-tarea="좋아요|전체보기_유형탭|트립_클릭">
                            여행 (0)
                    </Link>
                </div>
            </div>

            {/* 상품 나열 */}
            <div className='AllSearch'>
                <ul id="AllSearchItemList" className="cmitem_grid_lst mnsditem_ty_thmb">
                    {
                        likeProducts && likeProducts.boardList.map(item=>(
                            <AllSearchItem key={item.listIndex} Item={item}/>
                        ))
                    }
                </ul>
            </div>
            
            {/* 페이지 표시 */}
            <div class="m_paginate_wrap">
                <div class="m_paginate">
                    <a class="prev" title="이전"><span class="blind">[이전]</span></a>
                    <strong title="현재위치">1</strong>
                    <a class="next" title="다음"><span class="blind">[다음]</span></a>
                </div>
            </div>

            <Footer/>
            <FooterNav/>
        </div>
    )
}

export default Like