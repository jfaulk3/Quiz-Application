import React from "react";
import { Options } from "./customInterfaces";
import OptionButton from "./OptionButton";

export interface Props {
  mode: string;
  setMode: (mode: string) => void;
  options: Options;
  setOptions: (options: Options) => void;
}

const ShowOptions: React.FC<Props> = ({
  mode,
  setMode,
  options,
  setOptions,
}) => {
  if (mode !== "options") return null;
  return (
    <React.Fragment>
      <div className="row">
        <button type="button" className="btn btn-block btn-success">
          <h4>Start Game</h4>
        </button>
      </div>
      <OptionButton name={"Difficulty"} value={options.difficulty} />
      <OptionButton name={"Number of Questions"} value={options.numQuestions} />
      <OptionButton name={"Question Category"} value={options.category} />
      <OptionButton name={"Question Type"} value={options.type} />
    </React.Fragment>
  );
};

export default ShowOptions;
