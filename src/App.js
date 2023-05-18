import React from "react";
import "./index.css"
import About from "./Routes/About";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Project" element={<Project />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/About" element={<About />}/>

     </Routes>
    </>
  );
}

export default App;
