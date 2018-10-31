/**
 * If
 */

const id = '100';

// equals to
if (id == 100) {
  console.log(true);
}

if (id == 101) {
  console.log(true);
} else {
  console.log(false);
}

if (id != 101) {
  console.log(true);
} else {
  console.log(false);
}

// equals to by value and type
if (id === 100) {
  console.log(true);
}

if (id === 101) {
  console.log(true);
} else {
  console.log(false);
}

if (id !== 101) {
  console.log(true);
} else {
  console.log(false);
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');