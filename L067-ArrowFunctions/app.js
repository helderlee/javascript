/**
 * Arrow Functions
 */

const sayHello1 = function () {
  console.log('Hello');
}
sayHello1();

const sayHello2 = () => {
  console.log('Hello');
}
sayHello2();

const sayHello3 = () => console.log('Hello');
sayHello3();

const sayHello4 = () => 'Hello';
console.log(sayHello4());

const sayHello5 = () => ({msg: 'Hello'});
console.log(sayHello5());

const sayHello6 = name => `Hello ${name}`;
console.log(sayHello6('John'));

const sayHello7 = (firstName, lastName) => `Hello ${firstName} ${lastName}`;
console.log(sayHello7('John','Doe'));

const users = ['Nathan', 'John', 'William'];
const nameLengths = users.map(user => user.length);
console.log(nameLengths);