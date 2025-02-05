import React from "react";
import Quiz from "./Quiz";
import "./styles.css";
import logoIcon from "./assets/png/logo.png";

function App() {
  return (
    <div>
      <h1>Quiz Mini App</h1>
      <div className="logo-container">
      <img src={logoIcon} alt="Logo" className="logo" />
      </div>
      <Quiz />
    </div>
  );
}

export default App;
