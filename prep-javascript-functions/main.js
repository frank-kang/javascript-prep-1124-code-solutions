function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hour) {
  return hour * 60;
}

const minutes = convertHoursToMinutes(2);
console.log(minutes);

const getGreeting = (name) => {
  return `Hello ${name}!`;
};

const greeting = getGreeting('World');
console.log(greeting);

const addAndMultiplyBy5 = (num1, num2) => {
  return (num1 + num2) * 5;
};
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(sumTimesFive);

const multiplyAndDivideBy5 = (num1, num2) => {
  return (num1 * num2) / 5;
};
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive);

const subtractTwoNumbers = (num1, num2) => {
  return num1 - num2;
};
const difference = subtractTwoNumbers(22, 7);
console.log(difference);

const getCircleCircumference = (radius) => {
  return 2 * 3.14 * radius;
};
const circumference = getCircleCircumference(5);
console.log(circumference);

const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};

const fullName = getFullName('Frank', 'Kang');
console.log(fullName);

const cube = (number) => {
  return number * number * number;
};
const cubed = cube(5);
console.log(cubed);
