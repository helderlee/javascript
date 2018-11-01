/**
 * Functions declarations
 */

function greet(firstName) {
  if (typeof firstName === 'undefined') {
    firstName = 'John';
  }
  return `Hello, ${firstName}`;
}

console.log(greet());
console.log(greet('Smith'));

/**
 * Functions expressions
 */

const square = function (x = 3) {
  return x * x;
}

console.log(square(8));
console.log(square());

/**
 * Immediately invokable function expression - IIFEs
 */
(function(){
  console.log('IIFE ran...');
})();

(function(name){
  console.log(`Hello, ${name}`);
})('David');

/**
 * Property methods
 */

 const todo = {
   add: function() {
     console.log('Add todo...');
   }
 }

 todo.add();

 todo.delete = function() {
   console.log('Delete todo...');
 }

 todo.delete();