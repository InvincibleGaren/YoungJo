import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom'

import Server from '../../datas/Server.json';
import AllSearchItem from '../components/ui/AllSearchItem';

function ProductListView() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("categoryId",searchParams.get('ctglId'))
    console.log("categoryLevel",searchParams.get('categoryLevel'))

    const [productList, setProductList] = useState();

    const [url, setUrl] = useState()

    useEffect(()=> {
        axios.get(`${Server.baseUrl}api/pdtBoard/list/ctgL${searchParams.get('categoryLevel')}/${searchParams.get('ctglId')}`)
        .then(Response => {
            console.log(Response.data.data)
            setProductList(Response.data.data.boardList)
        })
    },[])


    return (
        <>
        <div className='AllSearch'>
            {
                productList && productList.map(item=>(
                    <AllSearchItem Item={item}/>
                ))
            }
        </div>
        </>
    )
}

export default ProductListView