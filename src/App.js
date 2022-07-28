import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./jsx/layouts/Footer";
import Header from "./jsx/layouts/Header";
import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
