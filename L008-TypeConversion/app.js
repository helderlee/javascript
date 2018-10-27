/**
 * Type Conversion
 */

let val;

/**
 * number to string
 */

val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(500);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 6);
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * boolean to string
 */

val = true;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * Date to string
 */

val = new Date();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * array to string
 */

val = [1,2,3,4,5];
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * toString()
 */

val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * string to number
 */

val = '5';
console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number('hello');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * boolean to number
 */

val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * null to number
 */

val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * array to number
 */

val = Number([1,2,3]);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * parseInt
 */

val = parseInt('100');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt('100.50');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * parseFloat
 */

val = parseFloat('100.50');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

/**
 * Operations
 */
let v1 = 5;
let v2 = 6;

val = v1 + v2;
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

v1 = String(5);
v2 = 6;

val = v1 + v2;
console.log(val);
console.log(typeof val);

