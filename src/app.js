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
import SimpleJoin from "./jsx/pages/SimpleJoin";
import JoinForm from "./jsx/pages/JoinForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/join/simplejoin" element={<SimpleJoin />} />
        <Route path="/join/joinform" element={<JoinForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
