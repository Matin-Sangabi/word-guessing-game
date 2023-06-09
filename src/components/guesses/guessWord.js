const GuessWord = ({ onChange, value, onGuess , onCloseGame }) => {
  return (
    <div className="guess">
      <h1>Guess The Word : </h1>
      <div className="guess-form">
        <input
          onChange={onChange}
          type="text"
          maxLength={5}
          className="guess-input"
          value={value}
        />
        <button className="btn" onClick={onGuess}>
          Guess
        </button>
        <button className="cancel" onClick={onCloseGame}>close</button>
      </div>
    </div>
  );
};

export default GuessWord;
