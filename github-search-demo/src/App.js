import React, { useState } from "react";
import logo from "./github-logo.jpg";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import DisplayTable from "./components/DisplayTable";

export const ThemeContext = createContext(null);

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
