import React, { useState } from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./Scoreboard";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Button from "./Button";
import "./index.css";

function App() {
  const [num, setNum] = useState(null);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <Scoreboard />
      <h1>{text}</h1>
      <div className="elements">
        <Rock setNum={setNum} />
        <Paper setNum={setNum} />
        <Scissors setNum={setNum} />
      </div>
      <Button num={num} text={text} setText={setText} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
