import React, { useEffect, useState } from 'react';
import categoryMenuDatas from '../../../datas/CategoryMenuDatas.json';
import Server from "../../../datas/Server.js";
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'




function CategoryMenu() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId",searchParams.get('ctglId'))
    console.log("categoryLevel",searchParams.get('categoryLevel'))

    const [cateMenu, setCateMenu] = useState();
    // const url = `${Server.baseUrl}api/ctg/menu${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`
    const [cateSubMenu, setCateSubMenu] = useState()

    const handleView = (id)=> {
        console.log(id)
        console.log(cateMenu[id].ctgL3List)
        setCateSubMenu(cateMenu[id].ctgL3List)
    }

    useEffect(()=>{
        axios.get(`${Server.baseUrl}api/ctg/menu${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setCateMenu(Response.data.data)
            setCateSubMenu(Response.data.data[searchParams.get('ctglId')].ctgL3List)
        })
    },[])

    return (  
        <div id="m_top_catelist" className="m_catelst_wrap_v2">
            <div className="cmgrid_full_box">
                <div className="cmctg_nav">
                    <div className="cmctg_scroll">
                        <ul className="cmctg_menu">
                            {
                                cateMenu && cateMenu.map(cate => (
                                    <li className="cmctg_item" >
                                        <div className={ cate.listIndex+1 === Number(searchParams.get('ctglId')) ? "clickable cmctg_lnk on" : "clickable cmctg_lnk"} onClick={() => handleView(cate.listIndex)}>
                                            <span className="cmctg_txt">{cate.ctgL2.name}</span>
                                        </div>
                                    </li> 
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

           <div className="m_catelst">    
                <ul className="lst_cate">
                    {
                        cateSubMenu && cateSubMenu.map(item=>(
                            <li>
                                <Link to ="/"><span>{item.name}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;