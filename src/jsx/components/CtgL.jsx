import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CtgL1 from './CtgL1';
import CtgL2List from './CtgL2List';

function CtgL() {

    const [ctgLData, setCtgL] = useState()

    useEffect(()=>{
        axios.get('http://10.10.10.78:9000/api/ctg/main')
        .then(Response => {
            console.log(Response.data)
            setCtgL(Response.data)

        })
    },[])

    const [isView, setIsView] = useState()

   

    const handleView = (id) => {
        setIsView(ctgLData[id -1]);
    }

    return ( 
        <div className= "clickable" >
            <div className="ctgl">
                {
                    ctgLData && ctgLData.map(ctgl1 =>(
                        <div key ={ctgl1.ctgL1.id}>
                            <div className="ctgltext" onClick={() => handleView(ctgl1.ctgL1.id)}><CtgL1 ctgLL1 = {ctgl1.ctgL1} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    isView && <CtgL2List ctgLL2 = {isView.ctgL2List} />
                }
            </div>
        </div>
     );
}

export default CtgL;