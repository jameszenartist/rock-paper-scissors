import React from "react";
import CalculateWinner from "./CalculateWinner";

const Button = ({ num, setNum, text, setText }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        if (num === null) {
          setText("CHOOSE WISELY");
          console.log("the num is:", num);
          return alert("Please choose!");
        }
        setText(CalculateWinner(num));
        setNum(null);
      }}
    >
      START
    </button>
  );
};

export default Button;
