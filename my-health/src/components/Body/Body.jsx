import React from "react";
import Leftbar from "./Leftbar/Leftbar";
import Content from "./Content/Content";
import "./Body.css";

const Body = () => {
  return (
    <body className="body">
      <Leftbar />
      <Content />
    </body>
  );
};

export default Body;
