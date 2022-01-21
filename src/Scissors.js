import React from "react";

const Scissors = ({ setNum }) => {
  let choice = 2;
  return (
    <button className="scissors" onClick={() => setNum(choice)}>
      <h2>SCISSORS</h2>
    </button>
  );
};

export default Scissors;
