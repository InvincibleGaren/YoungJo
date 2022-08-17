import React from 'react'

function CtgL1({ctgLL1}) {
    return ( 
        <div className="ctgl1d">            
            {
                <li className = "ctgl1li">
                    <img src = {ctgLL1.imgUrl} alt = "img"/>
                    <p>{ctgLL1.name}</p>
                </li>
            }
        </div>
     );
}

export default CtgL1;