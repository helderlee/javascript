/**
 * Prototypes Explained
 */

// Object.prototype

function Person(firstName, lastName, dateOfBirthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dateOfBirthday);
}

// Calculate age
Person.prototype.age = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'Doe', '1973-08-17');
const mary = new Person('Mary', 'Smith', '1976-12-15');

console.log(mary);
console.log(john.age());
console.log(john.fullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('fullName'));