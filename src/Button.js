import React from "react";
import CalculateWinner from "./CalculateWinner";

const Button = ({ num, setNum, text, setText }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        if (num === null) {
          console.log("the num is:", num);
          return alert("Please choose!");
        }
        setText(CalculateWinner(num));
        setNum(null);
      }}
    >
      {text === "IT'S A TIE!" || text === "YOU LOSE!" || text === "YOU WIN!"
        ? "PLAY AGAIN?"
        : "START"}
    </button>
  );
};

export default Button;
