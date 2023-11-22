import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const showTrainingMenu = (event) => {
    console.log(event);
  };

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="navbar">
      <div
        className={`navbar-child ${hovered === 0 ? "hovered" : ""}`}
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={handleMouseLeave}
        onClick={showTrainingMenu}
      >
        Тренировки
      </div>
      <div
        className={`navbar-child ${hovered === 1 ? "hovered" : ""}`}
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={handleMouseLeave}
      >
        Питание
      </div>
      <div
        className={`navbar-child ${hovered === 2 ? "hovered" : ""}`}
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={handleMouseLeave}
      >
        Анализы
      </div>
      <div
        className={`navbar-child ${hovered === 3 ? "hovered" : ""}`}
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={handleMouseLeave}
      >
        Тело
      </div>
    </div>
  );
};

export default Navbar;
