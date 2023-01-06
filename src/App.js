import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Routes, Route, Redirect      } from 'react-router-dom';
import Layout from "./componets/Post";


import HomePage from "./pages/Home";
import PostPage from "./pages/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/todos" element={<HomePage/>}></Route>
        <Route exact path="/" element={<PostPage/>}></Route>
        {/* <Route exact path="/" element={<Post/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
