import React from "react";
import logo from "./github-logo.jpg";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  return (
    <div className="h-screen w-full bg-white dark:bg-slate-800">
      <Navbar />
      <header className="bg-white dark:bg-slate-800">
        {/* <img src={logo} className="object-fill h-48 w-96" alt="logo" /> */}
      </header>
      <Profile />
    </div>
  );
}

export default App;
