import React from "react";

const Scissors = ({ handleClick }) => {
  let choice = 2;
  return (
    <button className="scissors" onClick={() => handleClick(choice)}>
      <h2>SCISSORS</h2>
      <img
        className="scissors-icon"
        src="https://img.icons8.com/ios/150/f00e2e/hand-peace--v2.png"
        alt="scissors"
      />
    </button>
  );
};

export default Scissors;
