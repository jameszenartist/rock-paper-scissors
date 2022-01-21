import React from "react";
import CalculateWinner from "./CalculateWinner";

const Button = ({ num, text, setText }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        if (num === null) {
          console.log("the num is:", num);
          alert("Please Choose!");
        }

        setText(CalculateWinner(num));
      }}
    >
      {text === "IT'S A TIE!" || text === "YOU LOSE!" || text === "YOU WIN!"
        ? "PLAY AGAIN?"
        : "START"}
    </button>
  );
};

export default Button;
