/* exported tail */
const tail = (array) => {
  const array2 = [];
  for (let i = 1; i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
};
