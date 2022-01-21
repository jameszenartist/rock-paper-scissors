import React from "react";

const Scissors = ({ handleClick }) => {
  let choice = 2;
  return (
    <button className="scissors" onClick={() => handleClick(choice)}>
      <h2>SCISSORS</h2>
    </button>
  );
};

export default Scissors;
