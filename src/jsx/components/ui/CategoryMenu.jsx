import React, { useEffect, useState } from 'react';
import categoryMenuDatas from '../../../datas/CategoryMenuDatas.json';
import Server from "../../../datas/Server.js";



function CategoryMenu() {

    const [cateMenu, setCateMenu] = useState([]);
    const url = `${Server.baseUrl}api/ctg/detail/menu/ctgL레벨/아이디`
    useEffect(()=>{
        setCateMenu(categoryMenuDatas);
    },[])

    return (  
        <div id="m_top_catelist" className="m_catelst_wrap_v2">
            <div className="cmgrid_full_box">
                <div className="cmctg_nav">
                    {/* 펼쳐보기 버튼
                    <div className="cmctg_top">
                        <h3>전체메뉴</h3>
                        <span className="cmctg_toggle">
                            <button type="button" aria-expanded="false">
                                <span className="btn_label ty_off"><span className="blind">메뉴 펼치기</span></span>
                                <span className="btn_label ty_on"><span className="blind">메뉴 접기</span></span>
                            </button>
                        </span>
                    </div> */}
                    <div className="cmctg_scroll">
                        <ul className="cmctg_menu">
                            {
                                cateMenu && cateMenu.map(cate => (
                                    <li className="cmctg_item" key={cate.ctgL1.id}>
                                        <a href="#" className="clickable cmctg_lnk">
                                        {/* <a href="#" className="clickable cmctg_lnk on"> */}
                                            <span className="cmctg_txt">{cate.ctgL1.name}</span>
                                        </a>
                                    </li> 
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* <CategoryMenuUnder /> */}
            <div className="m_catelst">    
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>여성 아우터</span></a>
                    </li>
                    <li>
                        <a href="#"><span>여성 상의</span></a>
                    </li>
                    <li>
                        <a href="#"><span>여성 팬츠</span></a>
                    </li>
                </ul>
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>스커트/원피스</span></a>
                    </li>
                    <li>
                        <a href="#"><span>남성 아우터</span></a>
                    </li>
                    <li>
                        <a href="#"><span>남성 상의</span> </a>
                    </li>
                </ul>
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>남성 팬츠</span></a>
                    </li>
                    <li>
                        <a href="#"><span>유아동 의류</span></a>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;