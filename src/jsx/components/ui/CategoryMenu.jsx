import React, { useEffect, useState } from 'react';
// import categoryMenuDatas from '../../../datas/CategoryMenuDatas.json';
import Server from "../../../datas/Server.js";
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'




function CategoryMenu() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId",searchParams.get('ctglId'))
    console.log("categoryLevel",searchParams.get('categoryLevel'))

    const cateLevel = searchParams.get('categoryLevel');
    console.log(cateLevel)
    const [cateMenu, setCateMenu] = useState();
    const url = `${Server.baseUrl}api/ctg/menu${cateLevel}/${searchParams.get('ctglId')}`
    const [cateSubMenu, setCateSubMenu] = useState();


    const handleView = (id)=> {
        console.log(id)
        setCateSubMenu(cateMenu[id].subCategoryList)
        // if(cateLevel === '2') {
        //     setCateSubMenu(cateMenu[id].ctgL3List)
        // } else if (cateLevel === '3') {
        //     setCateSubMenu(cateMenu[id].ctgL4List)
        // }
    }
    

    useEffect(()=>{
        console.log(url)
        axios.get(url)
        .then(Response => {
            console.log("Response data :",Response.data.data)
            setCateMenu(Response.data.data)
            setCateSubMenu(Response.data.data[Number(searchParams.get('ctglId'))].subCategporyList)
            // if(cateLevel==='2'){
            //     console.log(2)
            //     console.log(Response.data.data[searchParams.get('ctglId')].ctgL3List)
            //     // setCateSubMenu(Response.data.data[searchParams.get('ctglId')].ctgL3List)
            // }else if(cateLevel==='3'){
            //     console.log(3)
            //     console.log(Response.data.data[searchParams.get('ctglId')].ctgL4List)
            //     setCateSubMenu(Response.data.data[searchParams.get('ctglId')].ctgL4List)
            // }

            // setCheckedMenuId(Number(searchParams.get('ctglId')))
        })
    },[url, searchParams])

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
                                            onClick={() => handleView(cate.listIndex)}>
                                            <span className="cmctg_txt">
                                                <Link to={`/productList?categoryLevel=${cateLevel}&ctglId=${cate.category.id}`}>
                                                    {cate.category.name}
                                                </Link>
                                               {/* {
                                                cateLevel === '2' ? 
                                                <Link to={`/productList?categoryLevel=${cateLevel}&ctglId=${cate.ctgL2.id}`}>
                                                    {cate.ctgL2.name}
                                                </Link> 
                                                :
                                                cateLevel === '3' ?
                                                <Link to={`/productList?categoryLevel=${cateLevel}&ctglId=${cate.ctgL3.id}`}>
                                                    {cate.ctgL3.name}
                                                </Link>
                                                : ""
                                               } */}
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
                        cateSubMenu && cateSubMenu.map(cate=>(
                            <li key={cate.id}>
                                <Link to = {`/productList?categoryLevel=${Number(cateLevel)+1}&ctglId=${cate.id}`}><span>{cate.name}</span></Link>
                                {/* <Link to = {`/productList?categoryLevel=${Number(cateLevel)+1}&ctglId=${cate.id}`}><span>{cate.name}</span></Link> */}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;