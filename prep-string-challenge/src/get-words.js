/* exported getWords */
const getWords = (string) => {
  let myArray = [];
  if (string.length > 0) {
    myArray = string.split(' ');
  }
  return myArray;
};
