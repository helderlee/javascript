/**
 * General Loops
 */

// FOR LOOP

for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }

  if (i === 5) {
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

// WHILE LOOP

let i = 0;

while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// DO WHILE LOOP

i = 100;

do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

// FOREACH

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car) {
  console.log(car);
});

cars.forEach(function(car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});


// MAP

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Karen'}
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// FOR IN

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}