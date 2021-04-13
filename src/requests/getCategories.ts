interface Name extends Object {
  name: string;
}
const getCategories = (array: Array<Name>) => {
  //Will return an array of Objects each with two keys
  //id which points to num and name which points to string
  let newArray: Array<string> = [""];
  array.forEach(({ name }) => newArray.push(name));
  return newArray;
};

export default getCategories;
