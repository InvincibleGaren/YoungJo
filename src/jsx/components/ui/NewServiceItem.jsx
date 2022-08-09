import React from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/NewServiceItem.css"

function NewServiceItem({Item}) {
    return ( 
        <Link to="/">
            <img src={Item.url} alt={Item.name} />
        </Link>
     );
}

export default NewServiceItem;