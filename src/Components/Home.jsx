import React from "react";
// import "../css/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const startLearningClick = () => {
    navigate("/categories");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={startLearningClick}>Start Learning</button>
    </div>
  );
}

export default Home;
