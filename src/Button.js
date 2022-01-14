import React, { useState } from "react";

const Button = (props) => {
  const [text, setText] = useState("START");
  const handleClick = () => {
    text === "START" ? setText("PLAY AGAIN?") : setText("START");
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
