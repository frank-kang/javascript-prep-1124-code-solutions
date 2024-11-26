// create your loops here.
const whileLoop1 = () => {
  let myArray = [];
  let i = 0;
  while (i <= 9) {
    myArray.push(i);
    i++;
  }
  return myArray;
};

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

const whileLoop2 = () => {
  let myArray2 = [];
  let i = 0;
  while (i < 20) {
    myArray2.push(i);
    i += 2;
  }
  return myArray2;
};

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

const forLoop1 = () => {
  let myArray3 = [];
  for (let i = 0; i < 10; i++) {
    myArray3.push(i);
  }
  return myArray3;
};
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

const forLoop2 = () => {
  for (let i = 100; i >= 0; i--) {
    console.log('Time to explosion ' + i + '!');
  }
};
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
const forInLoop1 = (object) => {
  let myArray4 = [];
  for (key in object) {
    myArray4.push(key);
  }
  return myArray4;
};
const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

const forInLoop2 = (object) => {
  let myArray5 = [];
  for (key in object) {
    myArray5.push(object[key]);
  }
  return myArray5;
};
const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
