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
  const [count, setCount] = useState(0);

  const handleClick = (num) => {
    setNum(null);
    setText("");
    setNum(num);
  };

  return (
    <div className="container">
      <Scoreboard count={count} />
      <h1>{text}</h1>
      <h1>{count}</h1>
      <div className="elements">
        <Rock handleClick={handleClick} />
        <Paper handleClick={handleClick} />
        <Scissors handleClick={handleClick} />
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
