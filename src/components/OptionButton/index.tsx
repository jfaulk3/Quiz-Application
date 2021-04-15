interface Props {
  isGameStart: boolean;
  name: string;
  type: string;
  options: any;
  value: number;
  changeOptionVal: (key: string, value: number) => void;
  minValueAllowed: number;
  maxValueAllowed: number;
}

const OptionButton: React.FC<Props> = ({
  isGameStart,
  name,
  type,
  options,
  value,
  changeOptionVal,
  minValueAllowed,
  maxValueAllowed,
}) => {
  if (isGameStart) return null;
  const optVal = type === "numQuestions" ? value : options[value];
  const changeValue = (value: number) => {
    return Math.max(Math.min(value, maxValueAllowed), minValueAllowed);
  };
  return (
    <div className="row bg-secondary text-white text-left">
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOptionVal(type, changeValue(value - 1));
        }}
      >
        <i className="icon-chevron-sign-left"></i>
      </button>
      <h5 className="col-6 pt-2">
        {name}: {optVal || "Any"}
      </h5>
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOptionVal(type, changeValue(value + 1));
        }}
      >
        <i className="icon-chevron-sign-right"></i>
      </button>
    </div>
  );
};

export default OptionButton;
