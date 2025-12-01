import React from "react";
import "../css/buttons.css";
import "../css/App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const startLearningClick = () => {
    navigate("/categories");
  };
  return (
    <div className="home-container">
      <h1>Master the art of learning Portuguese</h1>
      <div className="home-arch">
        <h1 className="home-arch-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
        <h2 className="home-arch-text"> More content here...</h2>
        <p className="home-arch-text">More content here...</p>
      </div>
      <div className="button-container">
        <button className="regular-button" onClick={startLearningClick}>
          Start Learning
        </button>
      </div>
    </div>
  );
}

export default Home;
