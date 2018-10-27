/**
* Variables
*/

var name = 'John Doe';
console.log(name);
name = 'Steve';
console.log(name);

/**
* Init var
*/
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

/**
 * Letters, numbers, _, $
 * Can not start with number
 */

/**
 * Multi word vars
 */

var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case

/**
 * 'let'
 * It has a smaller scope than 'var'
 */

let name2 = 'John Doe';
console.log(name2);
name2 = 'Steve';
console.log(name2);

/**
 * Const
 * Can not reassign
 * Have to assign a value
 */
const constName = 'Const Name';
console.log(constName);

/**
 * Contents of an object or array can be changed
 * but they can not be reassigned
 */

const person = {
    name: 'John',
    age: 30
}

person.age = 31;

console.log(person);

const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);