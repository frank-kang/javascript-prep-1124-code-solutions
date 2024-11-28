/* exported getValues */
const getValues = (object) => {
  let newArray = [];
  for (key in object) {
    newArray.push(object[key]);
  }
  return newArray;
};
