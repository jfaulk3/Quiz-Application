import React from "react";
import { Options } from "./customInterfaces";

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
    <div className="row justify-content-start">
      <button type="button" className="btn btn-success">
        <h4>Start Game</h4>
      </button>
      <button type="button" className="btn btn-secondary">
        <h5>Difficulty: {options.difficulty || "Any"} </h5>
      </button>
      <button type="button" className="btn btn-secondary">
        <h5>Number of Questions: {options.numQuestions}</h5>
      </button>
      <button type="button" className="btn btn-secondary">
        <h5>Question Category: {options.category || "Any"}</h5>
      </button>
      <button type="button" className="btn btn-secondary">
        <h5>Question Type: {options.type || "Any"}</h5>
      </button>
    </div>
  );
};

export default ShowOptions;
