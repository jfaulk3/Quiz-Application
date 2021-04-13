import React from "react";
import "./App.css";
import Header from "./Header";
import ShowOptions from "./ShowOptions";
import getCategories from "./requests/getCategories";

const initialOptionsState: object = {
  numQuestions: 10,
  category: 0,
  numDifficulty: 0,
  numType: 0,
};

const url: string = "https://opentdb.com/";

function App() {
  const [mode, setMode]: [string, (mode: string) => void] = React.useState(
    "options"
  );
  const [options, setOptions] = React.useState({ ...initialOptionsState });

  const changeMode = (str: string) => setMode(str);

  const changeOption = (key: string, value: number) => {
    if (key === "numQuestions") {
      value = Math.min(Math.max(value, 1), 50);
      setOptions({
        ...options,
        [key]: value,
      });
    }
  };

  const [categories, setCategories]: [
    Array<string>,
    (categories: Array<string>) => void
  ] = React.useState([""]);

  React.useEffect(() => {
    //TODO: get questions
    const fetchData = async () => {
      const response = await fetch(`${url}api_category.php`);
      const data = await response.json();
      const { trivia_categories } = data;
      setCategories(getCategories(trivia_categories));
    };
    fetchData();
  }, []);

  console.log(categories);

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
        changeMode={changeMode}
        options={options}
        changeOption={changeOption}
      />
    </React.Fragment>
  );
}

export default App;
