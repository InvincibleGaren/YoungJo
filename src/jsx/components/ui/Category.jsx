import React from 'react';

import { Link } from 'react-router-dom';

import Img1 from '../../../img/slider1.jfif'
import Img2 from '../../../img/slider2.jfif'
import Img3 from '../../../img/slider3.jfif'
import Img4 from '../../../img/slider4.jfif'

import "../../../css/components/Category.css"

function Category() {
    return ( 
        <div className='Category'>
            <Link to="/"><img src={Img1} /></Link>
            <Link to="/"><img src={Img2} /></Link>
            <Link to="/"><img src={Img3} /></Link>
            <Link to="/"><img src={Img4} /></Link>
        </div>
     );
}

export default Category;