import GeuessList from "@/components/guesses/guessList";
import GuessWord from "@/components/guesses/guessWord";
import ModalsChild from "@/components/modal/modal";
import Modals from "@/components/modal/modalChild";
import StartGame from "@/components/startButton";
import { selectRandomData } from "@/utils/randomDataSelect";
import { getRandomValue } from "@/utils/randomValue";
import { useState } from "react";

const HomePage = () => {
  // states
  const [modal, setModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [guessValue, setGuessValue] = useState("");
  const [randValue, setRandValue] = useState({
    value: "",
    index: "",
    mode: "",
  });
  const [choose, setChoose] = useState([]);
  //functional handle

  /// start and close game funcction
  const startGameHandleClick = () => {
    setModal(true);
    const randomValue = selectRandomData();
    setSelectValue(randomValue);
  };
  const closeGameHandler = () => {
    setModal(false);
    setGuessValue("");
    setRandValue({ value: "", index: "", mode: "" });
  };
  /// modal function
  const closeModalHandler = () => {
    setModal(false);
    setRandValue({ value: "", index: " ", mode: "" });
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
    if (guessValue === value) {
      setRandValue({ value: "", index: "", mode: "" });
      setChoose([]);
    }
  };

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
