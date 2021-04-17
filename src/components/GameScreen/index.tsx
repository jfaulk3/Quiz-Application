import React, { useState, useEffect } from "react";
import Display from "./Display";
import { generateUrl } from "./../../helper/util";

interface Props {
  triviaCategories: Array<any>;
  isGameStart: boolean;
  optionVal: any;
  allOptions: any;
}
const GameScreen: React.FC<Props> = ({
  triviaCategories,
  isGameStart,
  optionVal,
  allOptions,
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

  useEffect(() => {
    if (url) {
      const abortController = new AbortController();
      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal: abortController.signal });
          const data = response.json();
          return data;
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      };
      fetchData().then((data) => {
        setQuestions(data);
      });
      console.log("Questions API CALL");
      return () => abortController.abort();
    }
  }, [url]);
  console.log(questions);

  if (!isGameStart) return null;
  return <Display questions={questions} />;
};

export default GameScreen;
