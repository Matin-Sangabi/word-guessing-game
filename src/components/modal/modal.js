const ModalsChild = ({ onMode }) => {
  return (
    <>
      <h1>Slecet Mode :</h1>
      <div className="modal-mode">
        <button value={"easy"} onClick={onMode} className="btn">
          Easy
        </button>
        <button value={"mid"} onClick={onMode} className="btn">
          Mid
        </button>
        <button value={"hard"} onClick={onMode} className="btn">
          Hard
        </button>
      </div>
    </>
  );
};

export default ModalsChild;
