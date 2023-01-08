import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Routes, Route, Redirect      } from 'react-router-dom';
import Layout from "./componets/AddressList";


import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import AddAddressFormPage from './form/AddAddress'
import Addresses from "./pages/Addresses";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/todos" element={<HomePage/>}></Route>
        <Route exact path="/" element={<PostPage/>}></Route>
        <Route exact path="/add-address" element={<AddAddressFormPage/>}></Route>
        <Route exact path="/address" element={<Addresses/>}></Route>
        {/* <Route exact path="/" element={<Post/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
