import ModalsChild from "@/components/modal/modal";
import Modals from "@/components/modal/modalChild";
import StartGame from "@/components/startButton";
import { selectRandomData } from "@/utils/randomDataSelect";
import { useState } from "react";

const HomePage = () => {
  // states
  const [modal, setModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [randValue, setRandValue] = useState({
    value: "",
    index: "",
    mode: "",
  });

  //functional handle
  const startGameHandleClick = () => {
    setModal(true);
    const randomValue = selectRandomData();
    setSelectValue(randomValue);
  };
  const closeModalHandler = () => {
    setModal(false);
    setRandValue({ value: "", index: " ", mode: "" });
  };
  const modalClickHandler = () => {};
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
    </main>
  );
};

export default HomePage;
