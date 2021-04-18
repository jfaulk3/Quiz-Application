import React, { useState, useEffect } from "react";
import Display from "./Display";
import { generateUrl } from "./../../helper/util";

interface Props {
  triviaCategories: Array<any>;
  isGameStart: boolean;
  optionVal: any;
  allOptions: any;
  reset: () => void;
}
const GameScreen: React.FC<Props> = ({
  triviaCategories,
  isGameStart,
  optionVal,
  allOptions,
  reset,
}) => {
  const url: any = isGameStart
    ? generateUrl(triviaCategories, optionVal, allOptions)
    : null;
  const [questions, setQuestions]: [any, (questions: any) => void] = useState(
    []
  );

  const [roundNumber, setRoundNumber]: [
    number,
    (roundNumber: number) => void
  ] = useState(0);

  const nextQuestion = () => {
    if (roundNumber === optionVal.numQuestions) {
      console.log("GAME FINISHED");
      reset();
    }
    setRoundNumber(roundNumber + 1);
  };

  useEffect(() => {
    if (url) {
      const abortController = new AbortController();
      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal: abortController.signal });
          const data = await response.json();
          const { results } = data;
          setQuestions(results);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      };
      fetchData();
      console.log("Questions API CALL");
      return () => abortController.abort();
    }
  }, [url]);
  if (!isGameStart || !questions) return null;
  return (
    <Display
      showQuestion={questions[roundNumber]}
      nextQuestion={nextQuestion}
    />
  );
};

export default GameScreen;
