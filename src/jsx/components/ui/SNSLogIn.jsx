import React, { useEffect, useState } from 'react';
import SNSLogInDatas from '../../../datas/SNSLogInDatas';

function SNSLogIn() {

    const [snsData, setSnsData] = useState([]);
    useEffect(()=>{
        setSnsData(SNSLogInDatas);
    },[])

    return (  
        <div>
            <ul className="cmem_sns_login">
                {
                    snsData && snsData.map(sns=>(
                        <li key={sns.id}>
                            <a href="#">
                                <img className="sns_logo" src={sns.src} alt="sns logo" />
                                <span className="cmem_sns_name">{sns.txt}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SNSLogIn;