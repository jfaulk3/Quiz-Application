const fetchCategories = async (
  changeAllOptions: (key: string, value: Object) => void
) => {
  //Will return an array of current categories from
  //opentdb API
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  const { trivia_categories } = data;

  const objOfCategories: { index: number; value: Array<string> } = {
    index: 0,
    value: [""],
  };
  trivia_categories.forEach(({ name }: { name: string }) =>
    objOfCategories.value.push(name)
  );
  changeAllOptions("allCategories", objOfCategories);
  // return newArray;
};

export { fetchCategories };
