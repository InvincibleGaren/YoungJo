import React from 'react';

function CtgL2List({ctgLL2}) {


    return ( 
        <div>
                {/* 전체 데이터에서 index가 id-1인 보라 {ctgL1,ctgL2List} 한 덩이 에서 list부분만 왔음
                근데 리스트 부분안에 ctgL2List:[{},{}] 여러 객체가 있으니 다시 map함수 */}
                {
                    ctgLL2.map(ctgll2 =>(
                        
                        <div className="ctgl2List">
                            {ctgll2.name}
                        </div>    
                    ))
                }
        </div>
    );
}

export default CtgL2List;