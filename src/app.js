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
import LogIn from "./jsx/pages/LogIn";
import SimpleJoin from "./jsx/pages/SimpleJoin";
import JoinForm from "./jsx/pages/JoinForm";
import ScrollToTop from "./jsx/function/ScrollTop";
import AllSearch from "./jsx/pages/AllSearch";
import Cart from "./jsx/components/ui/Cart";
import ProductListView from "./jsx/pages/ProductListView";
import CartLogIn from "./jsx/components/ui/Cart/CartLogIn";
import CartNotLogIn from "./jsx/components/ui/Cart/CartNotLogIn";
import Order from "./jsx/pages/Order";
import MainCategory from "./jsx/pages/MainCategory";
import MyPage from "./jsx/pages/MyPage";
import Like from "./jsx/pages/Like";
import ShippingAddressManagement from "./jsx/pages/ShippingAddressManagement";
import DepartmentStoreBestItem from "./jsx/components/ui/DepartmentStoreBestItem";

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
            <Route path="/category" element={<MainCategory/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/cartlogin" element={<CartLogIn />} />
            <Route path="/cartnotlogin" element={<CartNotLogIn />} />
            <Route path="/order" element={<Order/>} >
              <Route path=":productId" element={<Order/>} />
            </Route>            
            <Route path ="/mypage" element = {<MyPage/>} />
            <Route path ="/like" element = {<Like/>} />
            <Route path="/shipping" element ={<ShippingAddressManagement/>}/>
            {/* 백화점아이템 확인용 */}
            <Route path="/department" element ={<DepartmentStoreBestItem/>}/>
          </Routes>
        </BrowserRouter>
      </LoginState.Provider>
    </SetLoginState.Provider>
  );
}

export default App;