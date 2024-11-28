/* exported initial */
const initial = (array) => {
  const anotherArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    anotherArray.push(array[i]);
  }
  return anotherArray;
};
