import React from 'react'
import { Link } from 'react-router-dom';

function CtgL1({ctgLL1, id, handleView}) {
    
    return ( 
        <li className = "clnb_renew_item selected">
            <div className="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|패션의류">
                <span className="thmb ssg_lazy" 
                data-bg={
                    `url('${ctgLL1.imgUrl}&amp;w=150&amp;h=150&amp;edit=c&amp;t=1563dd18551f16231432da715468c33acc03630e')`
                } 
                data-ll-status="loading" 
                style={
                    {backgroundImage:`url(${ctgLL1.imgUrl})`}}></span>
                <em>{ctgLL1.name}</em>
            </div>
        </li>
     );
}

export default CtgL1;