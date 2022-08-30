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

    // const [url, setUrl] = useState()

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/pdtBoard/list/ctgL${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setProductList(Response.data.data.boardList)
        })
    },[])


    return (
        <>
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