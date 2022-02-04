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
  const [text, setText] = useState("CHOOSE WISELY");
  const [count, setCount] = useState(0);
  const [compCount, setCompCount] = useState(0);

  const handleClick = (num) => {
    setText("CHOOSE WISELY");
    setNum(null);
    setNum(num);
  };

  return (
    <div className="container">
      <Scoreboard text={text} count={count} compCount={compCount} />
      <div className="status">
        <h1>{text}</h1>
        <h1 className="pulse">
          {text !== "CHOOSE WISELY" ? "PLAY AGAIN?" : ""}
        </h1>
      </div>
      <div className="elements">
        <Rock handleClick={handleClick} />
        <Paper handleClick={handleClick} />
        <Scissors handleClick={handleClick} />
      </div>
      <Button
        num={num}
        setText={setText}
        setNum={setNum}
        count={count}
        compCount={compCount}
        setCount={setCount}
        setCompCount={setCompCount}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
