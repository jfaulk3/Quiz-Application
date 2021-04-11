import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import ShowOptions from "./ShowOptions";
import { Question, Result, Options } from "./customInterfaces";

const initialOptionsState: Options = {
  numQuestions: 10,
  category: "",
  difficulty: "",
  type: "",
};

const arrayQuestions: Question[] = []; //default questions | empty for now
const url: string = "https://opentdb.com/api.php?";

function App() {
  const [mode, setMode]: [string, (mode: string) => void] = React.useState(
    "options"
  );
  const [options, setOptions]: [
    Options,
    (options: Options) => void
  ] = React.useState({ ...initialOptionsState });

  React.useEffect(() => {
    //TODO: get questions
    const fetchData = async () => {
      const result: Result = await axios.get(`${url}amount=10`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const {
        data: { results },
      } = result;
      console.log(results);
    };
    fetchData();
  }, []);

  const reset = () => {
    setOptions({ ...initialOptionsState });
    setMode("options");
    console.log("Reset Successful");
  };

  return (
    <React.Fragment>
      <Header reset={reset} />
      <ShowOptions
        mode={mode}
        setMode={setMode}
        options={options}
        setOptions={setOptions}
      />
    </React.Fragment>
  );
}

export default App;
