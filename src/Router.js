import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pro1 from "./Pro1";
import Pro2 from "./Pro2";
import Pro3 from "./Pro3";
import Pro4 from "./Pro4";
import Pro5 from "./Pro5";
import "./Router.css"; 

const Router = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <h2>PROJECTS</h2>
        <ul>
          <li><Link to="/">Project 1</Link></li>
          <li><Link to="/pro2">Project 2</Link></li>
          <li><Link to="/pro3">Project 3</Link></li>
          <li><Link to="/pro4">Project 4</Link></li>
          <li><Link to="/pro5">Project 5</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Pro1 />} />
          <Route path="/pro2" element={<Pro2 />} />
          <Route path="/pro3" element={<Pro3 />} />
          <Route path="/pro4" element={<Pro4 />} />
          <Route path="/pro5" element={<Pro5 />} />
        </Routes>
      </main>
    </div>
  );
}

export default Router;
