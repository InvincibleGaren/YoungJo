import React from 'react'

function CategoryListItem({ctgLL1, id, handleView}) {
    
    return ( 
        <li className = "clnb_renew_item selected" onClick={()=>handleView(id)}>
            <div className="clickable">
                <span className="thmb ssg_lazy" 
                    style={
                        {backgroundImage:`url(${ctgLL1.imgUrl})`}
                    }>
                </span>
                <em>{ctgLL1.name}</em>
            </div>
        </li>
     );
}

export default CategoryListItem;