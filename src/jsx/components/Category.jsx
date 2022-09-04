import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CtgL2List from './CtgL2List';
import CategoryListItem from './CategoryListItem';

import Server from "../../datas/Server.js"
function CategoryList() {

    const [ctgLData, setCtgL] = useState()
    const [cateData, setCateData] = useState()
    const [subViewId, setSubViewId] = useState(0)

    useEffect(()=>{

        const url = `${Server.baseUrl}api/ctg/main`;
        axios.get(url)
            .then(Response => {
            console.log(Response.data)
            setCtgL(Response.data.data)

        })
    },[])

    const handleView = (id) => {
        setCateData(ctgLData[id-1]);
        console.log(ctgLData[id-1])
        setSubViewId(id)
    }

    return ( 
        <div className="mcom_category_renew react-area">
		    <div className="clnb_wrap ">
                <div className="clnb_sub_cate" id="mcom_clnb_cate">
                    <ul>
                    {
                        ctgLData && ctgLData.map(ctgl1 =>(
                            <CategoryListItem 
                                key ={ctgl1.listIndex}
                                ctgLL1 = {ctgl1.category}  
                                handleView = {handleView} 
                                id = {ctgl1.category.id}
                            />
                        )).slice(0,4)
                    }
                    </ul>
                </div>
            </div>
            {/* <div>
                {
                   cateData && subViewId < 5 ? <CtgL2List cateData = {cateData} id = {subViewId}/> :  ""
                }
            </div>
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.listIndex}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.category.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.category} />
                            </div>
                        </div>
                    )).slice(4,8)
                }
            </div>
            <div>
                {
                   cateData && subViewId > 4 && subViewId < 9  ? <CtgL2List cateData = {cateData} id = {subViewId}/> : ""
                }
            </div>
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.listIndex}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.category.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.category} />
                            </div>
                        </div>
                    )).slice(8,12)
                }
            </div>
            <div>
                {
                   cateData && subViewId > 8 && subViewId < 13  ? <CtgL2List cateData = {cateData} id = {subViewId}/> : ""
                }
            </div>
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.listIndex}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.category.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.category} />
                            </div>
                        </div>
                    )).slice(12)
                }
            </div> */}
            <div>
                {
                   cateData && subViewId > 12 && subViewId < 17  ? <CtgL2List cateData = {cateData} id = {subViewId}/> : ""
                }
            </div>
            
        </div>
     );
}

export default CategoryList;