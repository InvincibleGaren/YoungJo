import React from "react";

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
import DepartmentStoreBestItem from "./jsx/components/DepartmentStoreBestItem";
// import Test from "./jsx/Test";
import MainCate from "./jsx/pages/MainCate";

function App() {
  

  return (

    <BrowserRouter>
        {/* <Test/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/UNS" element={<UnderNewService/>} />
        <Route path="/HotBrand" element={<HotBrand/>} />
        <Route path="/DepartmentStoreBestItem" element={<DepartmentStoreBestItem/>}/>
        <Route path="/maincate" element={<MainCate/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;