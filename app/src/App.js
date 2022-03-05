import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListCheck from "./pages/ListCheck";
import List from "./pages/Listhome";
import Listhome from "./pages/Listhome";


function App() {
    return (
      <>
        <div className="App">
         
          
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Checklist" element={<ListCheck />}></Route> 
              <Route path="/List" element={<Listhome />}></Route>
              
            </Routes>
          </Router>
        
        </div>
      </>
    );
  }
  
  export default App;
  