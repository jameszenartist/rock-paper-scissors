function Scoreboard({ count }) {
  return (
    <div className="scoreboard">
      <h2>SCOREBOARD</h2>
      <h3>PLAYER: {count}</h3>
      <h3>COMPUTER: {count}</h3>
    </div>
  );
}

export default Scoreboard;
