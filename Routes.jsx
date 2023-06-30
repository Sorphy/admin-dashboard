import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./src/Components/Products";
import Activity from "./src/Components/Body Section/Activity Section/Activity";
import Layout from "./src/Components/Layout";

import React from 'react';

const BaseRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Activity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default BaseRoute;
