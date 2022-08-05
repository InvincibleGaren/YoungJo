import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";
import './css/mystyle.css'
import UnderNewService from "./jsx/components/UnderNewService";
import LogIn from "./jsx/pages/LogIn";
import HotBrand from "./jsx/components/HotBrand";
// import LogIn from "./jsx/pages/LogIn_T";
// import Review from "./jsx/pages/Review_T";
// import MyState from "./jsx/pages/MyState_T";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Route path 값 ""를 react 브라우저 주소 뒤에 붙여줘야 해당 페이지로 들어가짐 */}
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/UNS" element={<UnderNewService/>} />
        <Route path="/HotBrand" element={<HotBrand/>} />
        {/* <Route path="/review" element={<Review_T/>} />
        <Route path="/my" element={<MyState/>} /> */}
      </Routes>
      {/* 브라우저 라우터 안에 넣기! */}
      {/*<UnderNewService/> path를 따로 설정안하면 기본값마냥 어디에든 뜸*/}
    </BrowserRouter>
    
  );
}

export default App;