import React from "react";

const Paper = ({ setNum }) => {
  let choice = 1;
  return (
    <button className="paper" onClick={() => setNum(choice)}>
      <h2>PAPER</h2>
    </button>
  );
};

export default Paper;
