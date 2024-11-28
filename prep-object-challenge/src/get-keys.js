/* exported getKeys */
const getKeys = (object) => {
  newArray = [];
  for (key in object) {
    newArray.push(key);
  }
  return newArray;
};
