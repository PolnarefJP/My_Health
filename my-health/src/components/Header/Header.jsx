/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="font"></div>
      <Navbar />
    </header>
  );
};

export default Header;
