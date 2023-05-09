import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Routes, Route, Redirect      } from 'react-router-dom';
import Layout from "./componets/AddressList";


import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import AddAddressFormPage from './form/AddAddress'
import Addresses from "./pages/Addresses";
import ScrollingCard from "./componets/ScrollingCard";
import Reducerhook from "./componets/Reducerhook";
import UseState from "./componets/UseState";
import CoreServiceState from "./context/CoreServiceState";
import CashFreeInt from "./componets/CashFreeInt";
import Payment from "./componets/NewCashFree";
import CashFreeJSV3 from "./componets/CashFreeJSV3";



function App() {
  console.log("Hello Samir")
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("renders: ", count);
  }, [count])
  return (
    <CoreServiceState>
      <Router>
        <Routes>
          <Route exact path="/todos" element={<HomePage/>}></Route>
          <Route exact path="/" element={<PostPage/>}></Route>
          <Route exact path="/cashfree" element={<CashFreeInt/>}></Route>
          <Route exact path="/cashfree-new" element={<CashFreeJSV3/>}></Route>
          <Route exact path="/add-address" element={<AddAddressFormPage/>}></Route>
          <Route exact path="/address" element={<Addresses/>}></Route>
          <Route exact path="/scroll" element={<ScrollingCard/>}></Route>
          <Route exact path="/reducer" element={<Reducerhook/>}></Route>
          <Route exact path="/use-state" element={<UseState/>}></Route>
        </Routes>
      </Router>
    </CoreServiceState>
  );
}

export default App;
