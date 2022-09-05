import React from 'react';

function MainBlank({height, width}) {
    return ( 
        <div className="cmgrid_full_box">
            <div 
                className="cmitem_blank" 
                style={{height: height, width: width}}
            ></div>
        </div>
     );
}

export default MainBlank;