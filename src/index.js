import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./Scoreboard";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Button from "./Button";
import "./index.css";

function App() {
  const [num, setNum] = useState(null);
  const [text, setText] = useState("CHOOSE WISELY");
  const [count, setCount] = useState(0);
  const [compCount, setCompCount] = useState(0);

  function changeScore() {
    if (text === "YOU WIN!") {
      setCount(count + 1);
    }
    if (text === "YOU LOSE!") {
      setCompCount(compCount + 1);
    }
  }

  useEffect(() => {
    changeScore();
  }, [text]);

  const handleClick = (num) => {
    setNum(null);
    // setText("");
    setNum(num);
  };

  return (
    <div className="container">
      <Scoreboard count={count} compCount={compCount} />
      {/* <h1>CHOOSE WISELY</h1> */}
      <h1 className="status">{text}</h1>
      {/* <h1>{count}</h1> */}
      <div className="elements">
        <Rock handleClick={handleClick} />
        <Paper handleClick={handleClick} />
        <Scissors handleClick={handleClick} />
      </div>
      <Button num={num} text={text} setText={setText} setNum={setNum} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
