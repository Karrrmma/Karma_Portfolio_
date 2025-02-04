import React from "react";
import "./PacmanLoader.css"; // Import CSS for animation

const PacmanLoader = () => {
  return (
    <div className="loading-container">
      <div className="pacman">
        <div className="mouth"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default PacmanLoader;
