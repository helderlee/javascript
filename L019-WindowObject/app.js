/**
 * Window Object
 */

console.log(123); // window.console.log(123);

window.alert('Hello');

const input = prompt();
console.log(input);

if (confirm('Are you sure?')) {
  console.log('YES');
} else {
  console.log('NO');
}

let val;

val = window.outerHeight;

console.log(val);

val = window.scrollY;

console.log(val);

val = window.location;

console.log(val);

val = window.navigator;

console.log(val);

val = window.navigator.platform;

console.log(val);