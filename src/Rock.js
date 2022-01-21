import React from "react";

const Rock = ({ setNum }) => {
  let choice = 0;
  return (
    <button className="rock" onClick={() => setNum(choice)}>
      <h2>ROCK</h2>
    </button>
  );
};

export default Rock;
