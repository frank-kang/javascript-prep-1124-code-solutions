/* exported getWords */
const getWords = (string) => {
  if (string.length > 0) {
    let myArray = string.split(' ');
    console.log(myArray);
    return myArray;
  }
};
