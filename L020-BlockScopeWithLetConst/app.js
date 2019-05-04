/**
 * Block Scope
 */

// Global Scope

var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope', a, b, c);

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope', a, b, c);
}

test();

console.log('Global Scope', a, b, c);

if (true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Block Scope', a, b, c);
}

console.log('Global Scope', a, b, c);