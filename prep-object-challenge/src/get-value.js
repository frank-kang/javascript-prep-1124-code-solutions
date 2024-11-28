/* exported getValue */
const getValue = (object, property) => {
  return object[property];
};

const name = getValue(dave, firstName);
console.log(name);
