/**
 * Dates & Times
 */

let val;

const today = new Date();
const birthday = new Date(1970, 1, 20);

val = today;
console.log(val);
console.log(typeof val);

val = today.getDate(); // day of the month
console.log(val);

val = today.getDay(); // day of the week
console.log(val);
