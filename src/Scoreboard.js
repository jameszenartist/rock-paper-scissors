function Scoreboard() {
  let score = 0;
  let player = `PLAYER: ${score}`;
  let computer = `COMPUTER: ${score}`;

  return (
    <div className="scoreboard">
      <h2>SCOREBOARD</h2>
      <h3>{player}</h3>
      <h3>{computer}</h3>
    </div>
  );
}

export default Scoreboard;
