function Scoreboard({ count, countRef, compCountRef, compCount, useRef }) {
  return (
    <div className="scoreboard">
      <h2>SCOREBOARD</h2>
      <h3>PLAYER: {countRef.current}</h3>
      <h3>COMPUTER: {compCountRef.current}</h3>
    </div>
  );
}

export default Scoreboard;
