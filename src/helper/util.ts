export function generateUrl(
  triviaCategories: Array<any>,
  optionVal: any,
  allOptions: any
) {
  const URL_BASE = "https://opentdb.com/api.php?";

  const amount = `amount=${optionVal.numQuestions}`;

  const chosenCategory = allOptions.categories[optionVal.numCategories];
  const findCategory = triviaCategories.find(
    ({ name }) => name === chosenCategory
  );

  const id = findCategory ? findCategory.id : null;

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

export const shuffle = (array: Array<any>) => {
  // Fisher-Yates (aka Knuth) Shuffle.
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const decodeString = (str: string) => {
  //function taken from: https://www.codegrepper.com/code-examples/javascript/how+to+decode+html+entities+in+javascript
  const htmlEntities: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/([&<>"'])/g, (match) => htmlEntities[match]);
};
