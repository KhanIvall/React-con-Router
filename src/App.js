import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jom from './pages/home';
import Products from "./pages/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jom/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
