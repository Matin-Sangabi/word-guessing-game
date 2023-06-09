import StartGame from "@/components/startButton";

const HomePage = () => {
  // states
  const [modal, setModal] = useState(false);
  const [randValue, setRandValue] = useState({
    value: "",
    index: "",
    mode: "",
  });
  



  return (
    <div className="mian">
      {/* Start Game Button */}
      <StartGame
        disabled={modal || randValue.value.length}
        onClick={startGameHandleClick}
      />
    </div>
  );
};

export default HomePage;
