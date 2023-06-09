const StartGame = ({ onClick, disabled }) => {
  return (
    <div className="start-game">
      <button className="start-game-btn" onClick={onClick} disabled={disabled}>
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
