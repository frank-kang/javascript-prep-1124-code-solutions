/* exported toObject */
const toObject = ([key, value]) => {
  newObject = {};
  newObject[`${key}`] = value;
  return newObject;
};
