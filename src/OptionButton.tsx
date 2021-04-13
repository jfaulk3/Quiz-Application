import React from "react";
interface Props {
  name: string;
  type: string;
  choices: string[];
  value: number;
  changeOption: (key: string, value: number) => void;
}

const OptionButton: React.FC<Props> = ({
  name,
  type,
  choices,
  value,
  changeOption,
}) => {
  return (
    <div className="row bg-secondary text-white text-left">
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOption(type, value - 1);
        }}
      >
        <i className="icon-chevron-sign-left"></i>
      </button>
      <h5 className="col-6 pt-2">
        {name}: {value}
      </h5>
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOption(type, value + 1);
        }}
      >
        <i className="icon-chevron-sign-right"></i>
      </button>
    </div>
  );
};

export default OptionButton;
