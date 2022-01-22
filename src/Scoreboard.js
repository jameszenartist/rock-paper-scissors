function Scoreboard({ count, compCount }) {
  return (
    <div className="scoreboard">
      <h2>SCOREBOARD</h2>
      <h3>PLAYER: {count}</h3>
      <h3>COMPUTER: {compCount}</h3>
    </div>
  );
}

export default Scoreboard;
