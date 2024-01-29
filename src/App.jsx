import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Layout from "./pages/Layout";


function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
