import React, { useState } from "react";
import { shuffle } from "../../helper/util";
import Next from "./Next";

interface Props {
  showQuestion: any;
  nextQuestion: () => void;
}
const Display: React.FC<Props> = ({ showQuestion, nextQuestion }) => {
  const [readyForNext, setReadyForNext]: [
    boolean,
    (readyForNext: boolean) => void
  ] = useState<boolean>(false);
  if (!showQuestion) return null;
  const {
    category,
    question,
    difficulty,
    correct_answer,
    incorrect_answers,
  } = showQuestion;

  const answers = shuffle([correct_answer, ...incorrect_answers]);
  const checkAnswer = ({ target }: any) => {
    if (target.value === correct_answer) {
      target.className += " text-success";
      setReadyForNext(true);
    } else {
      target.className += " text-danger";
      setReadyForNext(true);
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <h5 className="text-center">
          [Category: {category} | Difficulty: {difficulty}]
        </h5>
        <h3 className="text-center">{question}</h3>
      </div>
      <div className="row text-center justify-content-center">
        {answers.map((answer, index) => (
          <button
            key={index}
            value={answer}
            type="button"
            onClick={checkAnswer}
            className="col-4 m-4"
          >
            {answer}
          </button>
        ))}
      </div>
      <Next readyForNext={readyForNext} nextQuestion={nextQuestion} />
    </React.Fragment>
  );
};

export default Display;
