/* exported compact */
const compact = (array) => {
  truthy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy[i] = array[i];
    } else {
      console.log(`This ${array[i]} is not truthy`);
    }
  }
  console.log(truthy);
  const newArray = truthy.filter((element) => element !== '');
  return newArray;
};
