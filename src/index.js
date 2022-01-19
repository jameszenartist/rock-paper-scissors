import React from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./Scoreboard";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Button from "./Button";
import SayHello from "./SayHello";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Scoreboard />
      <div className="elements">
        <Rock />
        <Paper />
        <Scissors SayHello={SayHello} />
      </div>
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
