import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CtgL2List({cateData, id}) {

    console.log(cateData)
    console.log(id)

    const [isView, setIsView] = useState(false)

    useEffect(()=>{
        if(id === cateData.ctgL1.id){
            setIsView(true)
        }else{
            setIsView(false)
        }
    },[id])

    return ( 

        <div>
            {
                isView ? 
                    <div className="ctgl2List">
                        <Link to={`/productList?categoryLevel=1&ctglId=${cateData.ctgL1.id}`}>상품전체보기</Link>
                    </div>   
                : ""
            }
            {
                isView ? 
                cateData.ctgL2List.map(data =>(
                    <div className="ctgl2List" key={data.id}>
                        <Link to={`/productList?categoryLevel=2&ctglId=${data.id}`}>{data.name}</Link>
                    </div>    
                ))
                : ""   
            } 
        </div>
    );
}

export default CtgL2List;