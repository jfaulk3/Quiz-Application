interface Props {
  isGameStart: boolean;
  beginGame: () => void;
}

const StartButton: React.FC<Props> = ({ isGameStart, beginGame }) => {
  if (isGameStart) return null;
  return (
    <div className="row text-white text-left">
      <button
        type="button"
        className="col-12 btn btn-success"
        onClick={() => {
          beginGame();
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartButton;
