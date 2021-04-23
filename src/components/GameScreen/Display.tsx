import React, { useState, useEffect } from "react";
import { shuffle, decodeString } from "../../helper/util";
import Next from "./Next";
import "./style.css";

interface Props {
  showQuestion: any;
  nextQuestion: () => void;
}
const Display: React.FC<Props> = ({ showQuestion, nextQuestion }) => {
  const [readyForNext, setReadyForNext]: [
    boolean,
    (readyForNext: boolean) => void
  ] = useState<boolean>(false);

  const [answers, setAnswers] = useState([""]);
  useEffect(() => {
    if (showQuestion) {
      setAnswers(
        shuffle([
          showQuestion.correct_answer,
          ...showQuestion.incorrect_answers,
        ])
      );
    }
  }, [showQuestion]);

  const checkAnswer = ({ target }: any) => {
    if (target.value === correct_answer) {
      target.className = "col-4 m-4  text-success";
      setReadyForNext(true);
    } else {
      target.className = "col-4 m-4  text-danger";
      setReadyForNext(true);
    }
  };

  if (!showQuestion) return null;
  const { category, question, difficulty, correct_answer } = showQuestion;
  return (
    <React.Fragment>
      <div className="row">
        <h5 className="text-center">
          [Category: {category} | Difficulty: {difficulty}]
        </h5>
        <h3 className="text-center">{decodeString(question)}</h3>
      </div>
      <div className="row text-center justify-content-center">
        {answers.map((answer) => (
          <button
            key={answer}
            value={answer}
            type="button"
            onClick={checkAnswer}
            className={`col-4 m-4`}
          >
            {decodeString(answer)}
          </button>
        ))}
      </div>
      <Next readyForNext={readyForNext} nextQuestion={nextQuestion} />
    </React.Fragment>
  );
};

export default Display;
