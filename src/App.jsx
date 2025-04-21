import React from "react";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './App.css';

function App() {

  return (
    <div>
    
      <Outlet />

    </div>
  )
}

export default App
