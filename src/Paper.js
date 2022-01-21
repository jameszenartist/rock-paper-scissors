import React from "react";

const Paper = ({ handleClick }) => {
  let choice = 1;
  return (
    <button className="paper" onClick={() => handleClick(choice)}>
      <h2>PAPER</h2>
    </button>
  );
};

export default Paper;
