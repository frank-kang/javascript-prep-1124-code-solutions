/* exported compact */
const compact = (array) => {
  truthy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    } else {
      console.log(`This ${array[i]} is not truthy`);
    }
  }
  return truthy;
};
