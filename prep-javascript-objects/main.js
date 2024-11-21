const person = {
  firstName: 'Tony',
  lastName: 'Balony',
  hobby: 'youTube',
};

console.log(person);

let fullName =
  "The person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'lunch meat';
console.log("The person's current job is " + person.job);
person['previousJob'] = 'break fast sandwich';
console.log("The person's previous job is: " + person['previousJob']);
console.log(person);
