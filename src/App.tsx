import React, { useState } from "react";
import Header from "./components/Header";
import GameScreen from "./components/GameScreen";
import OptionButton from "./components/OptionButton";
import StartButton from "./components/OptionButton/StartButton";

const initialOptionValue = {
  numQuestions: 1,
  numCategories: 0,
  numDifficulty: 0,
  numTypes: 0,
};

const initialAllOptions = {
  categories: [],
  difficulty: ["", "Easy", "Medium", "Hard"],
  types: ["", "Multiple Choice", "True/False"],
};

function App() {
  const [isGameStart, setIsGameStart]: [
    boolean,
    (isGameStart: boolean) => void
  ] = useState<boolean>(false);

  const [allOptions, setAllOptions]: [
    any,
    (allOptions: any) => void
  ] = useState({ ...initialAllOptions });

  const [optionVal, setOptionVal]: [any, (optionVal: any) => void] = useState({
    ...initialOptionValue,
  });

  const [triviaCategories, setTriviaCategories] = useState([]);

  const changeOptionVal = (key: string, value: number) => {
    setOptionVal({
      ...optionVal,
      [key]: value,
    });
  };

  React.useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async (url: string) => {
      try {
        //Will return an object that points to an array of values from opentdb API
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        return data;
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };
    fetchData("https://opentdb.com/api_category.php").then(
      ({ trivia_categories }) => {
        const array: Array<string> = trivia_categories.map(
          ({ name }: { name: string }) => name
        );
        setAllOptions({
          categories: ["", ...array],
          difficulty: ["", "Easy", "Medium", "Hard"],
          types: ["", "Multiple Choice", "True/False"],
        });
        setTriviaCategories(trivia_categories);
      }
    );
    console.log("Categories API CALL");
    return () => abortController.abort();
  }, []);

  const beginGame = () => {
    setIsGameStart(true);
    console.log("App-file: Start button pressed : Quiz Beginning");
  };

  const reset = () => {
    setIsGameStart(false);
    window.location.reload(false);
    console.log("App-file: Home button pressed : Restart Beginning");
  };

  return (
    <React.Fragment>
      <Header reset={reset} />
      <OptionButton
        isGameStart={isGameStart}
        name={"Number of Questions"}
        type={"numQuestions"}
        options={optionVal.numQuestions}
        value={optionVal.numQuestions}
        changeOptionVal={changeOptionVal}
        minValueAllowed={1}
        maxValueAllowed={50}
      />
      <OptionButton
        isGameStart={isGameStart}
        name={"Select a Category"}
        type={"numCategories"}
        options={allOptions.categories}
        value={optionVal.numCategories}
        changeOptionVal={changeOptionVal}
        minValueAllowed={0}
        maxValueAllowed={allOptions.categories.length - 1}
      />
      <OptionButton
        isGameStart={isGameStart}
        name={"Select a Difficult"}
        type={"numDifficulty"}
        options={allOptions.difficulty}
        value={optionVal.numDifficulty}
        changeOptionVal={changeOptionVal}
        minValueAllowed={0}
        maxValueAllowed={allOptions.difficulty.length - 1}
      />
      <OptionButton
        isGameStart={isGameStart}
        name={"Select Question Type"}
        type={"numTypes"}
        options={allOptions.types}
        value={optionVal.numTypes}
        changeOptionVal={changeOptionVal}
        minValueAllowed={0}
        maxValueAllowed={allOptions.types.length - 1}
      />
      <StartButton isGameStart={isGameStart} beginGame={beginGame} />
      <GameScreen
        triviaCategories={triviaCategories}
        isGameStart={isGameStart}
        optionVal={optionVal}
        allOptions={allOptions}
        reset={reset}
      />
    </React.Fragment>
  );
}

export default App;
