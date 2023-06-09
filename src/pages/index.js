import GeuessList from "@/components/guesses/guessList";
import GuessWord from "@/components/guesses/guessWord";
import ModalsChild from "@/components/modal/modal";
import Modals from "@/components/modal/modalChild";
import StartGame from "@/components/startButton";
import {
  EASY_MODE,
  HARD_MODE,
  MEDIUM_MODE,
  ModeData,
} from "@/utils/modeActions";
import { selectRandomData } from "@/utils/randomDataSelect";
import { getRandomValue } from "@/utils/randomValue";
import { useState } from "react";
import { toast } from "react-toastify";
const HomePage = () => {
  // states
  const [modal, setModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [guessValue, setGuessValue] = useState("");
  const [choose, setChoose] = useState([]);
  const [randValue, setRandValue] = useState({
    value: "",
    index: "",
    mode: "",
  });

  //functional handle
  /// start and close game funcction
  const startGameHandleClick = () => {
    setModal(true);
    const randomValue = selectRandomData();
    setSelectValue(randomValue);
    setChoose([]);
  };
  const closeGameHandler = () => {
    resetState();
  };
  /// modal function
  const closeModalHandler = () => {
    resetState();
  };
  const modalClickHandler = ({ target }) => {
    const { index, value, mode } = getRandomValue(selectValue, target.value);
    setRandValue({ value, index, mode });
    setModal(false);
  };
  /// guesses functional
  const guessChangeHandler = ({ target }) => {
    setGuessValue(target.value.toUpperCase());
  };
  const guessClickHandler = () => {
    const { mode, value, index } = randValue;
    setGuessValue("");
    console.log(value);
    if (guessValue === value) {
      toast.success("you won !");
      resetState();
    }
    switch (mode) {
      case EASY_MODE: {
        robotSelectData(index, 15, value, guessValue);
        break;
      }
      case MEDIUM_MODE: {
        robotSelectData(index, 7, value, guessValue);
        break;
      }
      case HARD_MODE: {
        robotSelectData(index, 2, value, guessValue);
        break;
      }
    }
  };
  //global function
  const robotSelectData = (index, sum, value, guessValue) => {
    const randomData = ModeData(index, sum);
    setChoose([...choose, { user: guessValue, robot: randomData }]);
    if (randomData === value) {
      toast.error("You Loose !");
      resetState();
      return;
    }
  };

  function resetState() {
    setModal(false);
    setSelectValue("");
    setGuessValue("");
    setRandValue({ value: "", index: "", mode: "" });
    setChoose([]);
  }

  return (
    <main className="mian">
      {/* Modal */}
      {modal && (
        <Modals onClose={closeModalHandler}>
          <ModalsChild onMode={modalClickHandler} />
        </Modals>
      )}
      {/* Start Game Button */}
      <StartGame
        disabled={modal || randValue.value.length}
        onClick={startGameHandleClick}
      />
      {randValue.value.length !== 0 && (
        <>
          <GuessWord
            value={guessValue}
            onGuess={guessClickHandler}
            onChange={guessChangeHandler}
            onCloseGame={closeGameHandler}
          />
          <GeuessList choose={choose} value={randValue.value} />
        </>
      )}
    </main>
  );
};

export default HomePage;
