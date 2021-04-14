import React, { useState } from "react";
import Header from "./components/Header";
import OptionButton from "./components/OptionButton";
import { fetchCategories } from "./requests/util";

const initialState: Options = { numQuestions: 10, allCategories: {} };

interface Options {
  numQuestions: number;
  allCategories: object;
}

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [allOptions, setAllOptions]: [
    Options,
    (allOptions: Options) => void
  ] = useState(initialState);

  const changeAllOptions = (key: string, value: Object) => {
    setAllOptions({
      ...allOptions,
      [key]: value,
    });
  };

  const reset = () => {
    setGameStart(false);
    console.log("App-file: Home button pressed : Restart Beginning");
  };

  React.useEffect(() => {
    //TODO: get questions
    fetchCategories(changeAllOptions);
  }, []);

  console.log(allOptions);

  return (
    <React.Fragment>
      <Header reset={reset} />
      <OptionButton gameStart={gameStart} />
    </React.Fragment>
  );
}

export default App;
