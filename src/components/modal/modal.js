import { EASY_MODE, HARD_MODE, MEDIUM_MODE } from "@/utils/modeActions";

const ModalsChild = ({ onMode }) => {
  return (
    <>
      <h1>Slecet Mode :</h1>
      <div className="modal-mode">
        <button value={EASY_MODE} onClick={onMode} className="btn">
          Easy
        </button>
        <button value={MEDIUM_MODE} onClick={onMode} className="btn">
          Mid
        </button>
        <button value={HARD_MODE} onClick={onMode} className="btn">
          Hard
        </button>
      </div>
    </>
  );
};

export default ModalsChild;
