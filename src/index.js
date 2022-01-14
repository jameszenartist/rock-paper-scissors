import React from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./Scoreboard";
import Elements from "./Elements";
import Button from "./Button";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Scoreboard />
      <Elements />
      <Button />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
