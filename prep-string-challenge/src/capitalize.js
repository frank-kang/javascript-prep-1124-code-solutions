/* exported capitalize */
const capitalize = (str) => {
  let capstrings;
  capstrings = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return capstrings;
};
