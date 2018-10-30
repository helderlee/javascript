/**
 * String
 */
let val;
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;

val = firstName + ' ' + lastName;
console.log(val);

val = firstName;
val += ' ';
val += lastName;
console.log(val);

val = 'My name is ' + firstName;
val += ' and I am ';
val += age;
console.log(val);

/**
 * Escaping
 */
val = "That's awesome, I can't wait";
console.log(val);

val = 'That\'s awesome, I can\'t wait';
console.log(val);

/**
 * Length
 */
val = firstName.length;
console.log(val);

/**
 * Concat
 */
val = firstName.concat(' ', lastName);
console.log(val);

/**
 * Change Case
 */
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

/**
 * Index
 */
val = firstName[0];
console.log(val);

val = firstName.indexOf('a');
console.log(val);

val = firstName.indexOf('l');
console.log(val);

val = firstName.lastIndexOf('l');
console.log(val);

val = firstName.charAt(1);
console.log(val);

/**
 * Substring
 */
val = firstName.substring(0, 4);
console.log(val);

/**
 * Slice
 */
val = firstName.slice(0, 4);
console.log(val);

val = firstName.slice(-3);
console.log(val);

/**
 * Split
 */
val = lastName.split('h');
console.log(val);

/**
 * Replace
 */
val = firstName.replace('W','B');
console.log(val);

/**
 * Includes
 */
val = firstName.includes('liam');
console.log(val);

val = firstName.includes('x');
console.log(val);
