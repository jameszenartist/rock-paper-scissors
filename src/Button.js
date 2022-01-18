import React, { useState } from "react";

const Button = (props) => {
  const [text, setText] = useState(true);
  // const handleClick = () => {
  //   text === "START" ? setText("PLAY AGAIN?") : setText("START");
  // };

  return (
    <button className="start-btn" onClick={() => setText(!text)}>
      {text ? "START" : "PLAY AGAIN?"}
    </button>
  );
};

export default Button;
