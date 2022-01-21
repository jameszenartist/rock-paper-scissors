import React from "react";

const Rock = ({ handleClick }) => {
  let choice = 0;
  return (
    <button className="rock" onClick={() => handleClick(choice)}>
      <h2>ROCK</h2>
    </button>
  );
};

export default Rock;
