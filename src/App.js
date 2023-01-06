import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Routes, Route, Redirect      } from 'react-router-dom';


import HomePage from "./pages/Home";
import PostPage from "./pages/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/posts" element={<PostPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
