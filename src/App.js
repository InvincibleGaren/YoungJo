import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./jsx/layouts/footer";
import Header from "./jsx/layouts/header";
import Home from "./jsx/pages/home";
import Product from "./jsx/pages/product";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
