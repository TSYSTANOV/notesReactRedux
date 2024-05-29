import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { NavBar } from "./Components/Navbar";
import { AlertNotification } from "./Components/Alert";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container pt-4">
        <AlertNotification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
