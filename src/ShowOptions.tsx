import React from "react";
import OptionButton from "./OptionButton";
import "./requests/getCategories";

interface Props {
  mode: string;
  changeMode: (str: string) => void;
  options: object;
  changeOption: (key: string, value: number) => void;
}

const ShowOptions: React.FC<Props> = ({
  mode,
  changeMode,
  options,
  changeOption,
}) => {
  if (mode !== "options") return null;
  console.log("CURRENT TEST: ", options.numQuestions);
  return (
    <React.Fragment>
      <div className="row">
        <button type="button" className="btn btn-block btn-success">
          <h4>Start Game</h4>
        </button>
      </div>
      <OptionButton
        name={"Number of Questions"}
        type={"numQuestions"}
        choices={[]}
        value={options}
        changeOption={changeOption}
      />
      <OptionButton
        name={"Select Category: "}
        type={"numCategory"}
        choices={[]}
        value={options[category].key}
        changeOption={changeOption}
      />
      {/* <OptionButton
        name={"Difficulty"}
        type={"difficulty"}
        value={options.difficulty}
      />
      <OptionButton
        name={"Question Category"}
        type={"category"}
        value={options.category}
      />
      <OptionButton name={"Question Type"} type={"type"} value={options.type} /> */}
    </React.Fragment>
  );
};

export default ShowOptions;
