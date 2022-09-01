import React, {useState} from "react";
import {LoginState} from './jsx/globalState/LoginState';
import {SetLoginState} from './jsx/globalState/SetLoginState';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//css
import './css/mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";
import UnderNewService from "./jsx/components/UnderNewService";
import LogIn from "./jsx/pages/LogIn";
import HotBrand from "./jsx/components/ui/HotBrand";
import DepartmentStoreBestItem from "./jsx/components/DepartmentStoreBestItem";
import CtgL from "./jsx/components/CtgL";
import CategoryMenu from "./jsx/components/ui/CategoryMenu";
import SimpleJoin from "./jsx/pages/SimpleJoin";
import JoinForm from "./jsx/pages/JoinForm";
import ScrollToTop from "./jsx/function/ScrollTop";
import AllSearch from "./jsx/pages/AllSearch";
import Cart from "./jsx/components/ui/Cart";
import MainCate from "./jsx/pages/MainCate";
import ProductListView from "./jsx/pages/ProductListView";
import CartLogIn from "./jsx/components/ui/Cart/CartLogIn";
import CartNotLogIn from "./jsx/components/ui/Cart/CartNotLogIn";
import Order from "./jsx/pages/Order";

function App() {
  const [login, setLogin] = useState(sessionStorage.getItem("login") ? "true": "false");

  return (
    <SetLoginState.Provider value={setLogin} >
      <LoginState.Provider value={login}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} >
              <Route path=":productId" element={<Product/>} />
            </Route>
            <Route path="/productList" element={<ProductListView />} />
            <Route path="/join/simplejoin" element={<SimpleJoin />} />
            <Route path="/join/joinform" element={<JoinForm />} />
            <Route path="/allsearch" element={<AllSearch />} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/UNS" element={<UnderNewService/>} />
            <Route path="/HotBrand" element={<HotBrand/>} />
            <Route path="/DepartmentStoreBestItem" element={<DepartmentStoreBestItem/>}/>
            <Route path="/cate" element={<MainCate/>}/>
            <Route path="/ctgl" element={<CtgL/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/cartlogin" element={<CartLogIn />} />
            <Route path="/cartnotlogin" element={<CartNotLogIn />} />
            <Route path="/order" element={<Order/>} >
              <Route path=":productId" element={<Order/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginState.Provider>
    </SetLoginState.Provider>
  );
}

export default App;