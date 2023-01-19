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



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/todos" element={<HomePage/>}></Route>
        <Route exact path="/" element={<PostPage/>}></Route>
        <Route exact path="/add-address" element={<AddAddressFormPage/>}></Route>
        <Route exact path="/address" element={<Addresses/>}></Route>
        <Route exact path="/scroll" element={<ScrollingCard/>}></Route>
        <Route exact path="/reducer" element={<Reducerhook/>}></Route>
        <Route exact path="/use-state" element={<UseState/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
