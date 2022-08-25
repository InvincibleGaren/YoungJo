import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";
import './css/mystyle.css'
import LogIn from "./jsx/pages/LogIn";
import CategoryMenu from "./jsx/components/ui/CategoryMenu";
import CartEmpty from "./jsx/components/ui/CartEmpty";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} >
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/categorymenu" element={<CategoryMenu />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cartempty" element={<CartEmpty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
