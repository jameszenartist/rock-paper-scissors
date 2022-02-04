import React from "react";
import CalculateWinner from "./CalculateWinner";
import swal from "sweetalert";

const Button = ({
  num,
  setNum,
  setText,
  count,
  setCount,
  compCount,
  setCompCount,
}) => {
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
        let result = CalculateWinner(num);
        setText(result);

        if (result === "YOU WIN!") {
          setCount(count + 1);
        }
        if (result === "YOU LOSE!") {
          setCompCount(compCount + 1);
        }
        setNum(null);
      }}
    >
      START
    </button>
  );
};

export default Button;
