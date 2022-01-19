import React from "react";

const Scissors = ({ SayHello }) => {
  SayHello();
  return (
    <div className="scissors">
      <h2>SCISSORS</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        accusamus obcaecati? In quaerat cupiditate, temporibus, quae nisi
        blanditiis ea, neque nesciunt cum corporis repellat. Ea voluptatum
        voluptatem perferendis ipsam explicabo.
      </p>
    </div>
  );
};

export default Scissors;
