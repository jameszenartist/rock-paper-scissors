import React from "react";
import CalculateWinner from "./CalculateWinner";
import swal from "sweetalert";

const Button = ({ num, setNum, setText }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        if (num === null) {
          setText("CHOOSE WISELY");
          return swal("Please choose!", {
            className: "alert",
          });
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
