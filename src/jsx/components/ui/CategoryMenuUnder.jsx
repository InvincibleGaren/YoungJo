import React from 'react'

function CategoryMenuUnder() {
    return (  
        <>
            <div className="m_catelst">
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>여성 아우터</span></a>
                    </li>
                    <li>
                        <a href="#"><span>여성 상의</span></a>
                    </li>
                    <li>
                        <a href="#"><span>여성 팬츠</span></a>
                    </li>
                </ul>
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>스커트/원피스</span></a>
                    </li>
                    <li>
                        <a href="#"><span>남성 아우터</span></a>
                    </li>
                    <li>
                        <a href="#"><span>남성 상의</span> </a>
                    </li>
                </ul>
                <ul className="lst_cate">
                    <li>
                        <a href="#"><span>남성 팬츠</span></a>
                    </li>
                    <li>
                        <a href="#"><span>유아동 의류</span></a>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default CategoryMenuUnder;