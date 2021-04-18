interface Props {
  readyForNext: boolean;
  nextQuestion: () => void;
}
const Next: React.FC<Props> = ({ readyForNext, nextQuestion }) => {
  if (!readyForNext) return null;
  return (
    <div className="col text-center m-2 p-2">
      <button className="btn" type="button" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default Next;
