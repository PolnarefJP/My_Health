import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Content from "./components/Content";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
