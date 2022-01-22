import React from "react";

const Paper = ({ handleClick }) => {
  let choice = 1;
  return (
    <button className="paper" onClick={() => handleClick(choice)}>
      <h2>PAPER</h2>
      <img
        className="paper-icon"
        alt="paper"
        src="https://img.icons8.com/ios/150/f00e2e/hand.png"
      />
    </button>
  );
};

export default Paper;
