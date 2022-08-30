import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jwt-decode';
import Server from "../../datas/Server.js";
//postman
//postman123

function Logout(event) {
    
    event.preventDefault();
    sessionStorage.removeItem("login");
    alert("로그아웃 되었습니다.");
    window.location.href="/";
}

export default Logout;