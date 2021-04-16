export function generateUrl(
  triviaCategories: Array<any>,
  optionVal: any,
  allOptions: any
) {
  const URL_BASE = "https://opentdb.com/api.php?";

  const amount = `amount=${optionVal.numQuestions}`;

  const chosenCategory = allOptions.categories[optionVal.numCategories];
  const id = triviaCategories.find(({ name }) => name === chosenCategory).id;

  const difficultyChoices = ["", "easy", "medium", "hard"];
  const chosenDifficulty = difficultyChoices[optionVal.numDifficulty];

  const typeChoices = ["", "multple", "boolean"];
  const chosenType = optionVal.numTypes;
  const typeValue = typeChoices[chosenType];

  const category = chosenCategory ? `&category=${id}` : "";
  const difficulty = chosenDifficulty ? `&difficulty=${chosenDifficulty}` : "";
  const type = chosenType ? `&type=${typeValue}` : "";

  const url = URL_BASE + amount + category + difficulty + type;
  return url;
}

export function parseUrl(url: string) {
  return null;
}
