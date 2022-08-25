import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CtgL1 from './CtgL1';
import CtgL2List from './CtgL2List';

function CtgL() {

    const [ctgLData, setCtgL] = useState()
    const [cateData, setCateData] = useState()
    const [subViewId, setSubViewId] = useState(0)

    useEffect(()=>{
        axios.get('http://10.10.10.78:9000/api/ctg/main')
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
        <div className= "clickable" >
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.ctgL1.id}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.ctgL1.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.ctgL1} />
                            </div>
                        </div>
                    )).slice(0,4)
                }
            </div>
            <div>
                {
                   cateData && subViewId < 5 ? <CtgL2List cateData = {cateData} id = {subViewId}/> :  ""
                }
            </div>
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.ctgL1.id}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.ctgL1.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.ctgL1} />
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
                        <div key ={ctgl1.ctgL1.id}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.ctgL1.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.ctgL1} />
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
                        <div key ={ctgl1.ctgL1.id}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.ctgL1.id)}>
                                <CtgL1 ctgLL1 = {ctgl1.ctgL1} />
                            </div>
                        </div>
                    )).slice(12)
                }
            </div>
            <div>
                {
                   cateData && subViewId > 12 && subViewId < 17  ? <CtgL2List cateData = {cateData} id = {subViewId}/> : ""
                }
            </div>
            
        </div>
     );
}

export default CtgL;