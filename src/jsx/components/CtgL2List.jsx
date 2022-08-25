import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

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
                cateData.ctgL2List.map(data =>(
                    <div className="ctgl2List">
                        {data.name}
                    </div>    
                ))
                : ""
            } 
        </div>
    );
}

export default CtgL2List;