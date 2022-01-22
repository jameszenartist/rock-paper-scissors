import React from "react";

const Rock = ({ handleClick }) => {
  let choice = 0;
  return (
    <button className="rock" onClick={() => handleClick(choice)}>
      <h2>ROCK</h2>
      <img
        className="rock-icon"
        alt="rock"
        src="https://img.icons8.com/ios/150/f00e2e/clenched-fist.png"
      />
    </button>
  );
};

export default Rock;
