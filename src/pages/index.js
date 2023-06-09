import StartGame from "@/components/startButton";
import { useState } from "react";

const HomePage = () => {
  // states
  const [modal, setModal] = useState(false);
  const [randValue, setRandValue] = useState({
    value: "",
    index: "",
    mode: "",
  });

  //functional handle
  const startGameHandleClick = () => {
    setModal(true);
  };

  return (
    <main className="mian">
      {/* Start Game Button */}
      <StartGame
        disabled={modal || randValue.value.length}
        onClick={startGameHandleClick}
      />
    </main>
  );
};

export default HomePage;
