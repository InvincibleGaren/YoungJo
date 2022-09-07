import React, { useEffect, useState } from 'react';
import Server from "../../../datas/Server.js";
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'




function CategoryMenu() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId",searchParams.get('ctglId'))
    console.log("categoryLevel",searchParams.get('categoryLevel'))

    const [cateNavName, setCateNavName] = useState(searchParams.get('name'));

    const cateLevel = Number(searchParams.get('categoryLevel'));
    const cateId = Number(searchParams.get('ctglId'));
    console.log("두번째 께 카테 아이디",cateLevel,cateId)
    const [cateMenu, setCateMenu] = useState();
    const url = `${Server.baseUrl}api/ctg/menu${cateLevel}/${cateId}`
    const [cateSubMenu, setCateSubMenu] = useState();


    useEffect(()=>{
        console.log(url)
        axios.get(url)
        .then(Response => {
            console.log("Response data :",Response.data.data)
            setCateMenu(Response.data.data)
            setCateSubMenu(Response.data.data[cateId-1].subCategoryList)
            console.log("Response.data.data[cateId-1].subCategoryList",Response.data.data[cateId-1].subCategoryList)
            cateMenu && console.log("cateMenu[cateId-1].category.name",cateMenu[cateId-1].category.name)
        })
    },[url, searchParams])

    // console.log("cateMenu[cateId-1].category.name",cateMenu[cateId-1].category.name)

    return (  
        <div id="m_top_catelist" className="m_catelst_wrap_v2">
            <div className="cmgrid_full_box">
                <div className="cmctg_nav">
                    <div className="cmctg_scroll">
                        <ul className="cmctg_menu">
                            {
                                cateMenu && cateMenu.map(cate => (
                                    <li className="cmctg_item" key = {cate.listIndex} >
                                        <div className={ cate.listIndex+1 === Number(searchParams.get('ctglId')) ?
                                            "clickable cmctg_lnk on" : "clickable cmctg_lnk"} 
                                        >
                                            <span className="cmctg_txt">
                                                <Link to={`/productList?name=${cateNavName}&categoryLevel=${cateLevel}&ctglId=${cate.category.id}`}>
                                                    {cate.category.name}
                                                </Link>
                                            </span>
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
                        cateMenu && cateSubMenu && cateSubMenu.map(cate=>(
                            <li key={cate.id}>
                                <Link to = {`/productList?name=${cateMenu[cateId-1].category.name}&categoryLevel=${cateLevel+1}&ctglId=${cate.id}`}><span>{cate.name}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;