import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";
import Home from "./screens/home";
import SearchCrypto from "./screens/searchCrypto";
import CryptoPresentation1 from "./screens/cryptoPresentation1";
import CryptoPresentation2 from "./screens/cryptoPresentation2";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchCrypto />} />
        <Route path="/presentation1" element={<CryptoPresentation1 />} />
        <Route path="/presentation2" element={<CryptoPresentation2 />} />
      </Routes>
    </div>
  );
};

export default App;
