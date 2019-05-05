/**
 * Constructors
 */

// Person constructor - old
function Person(name, dateOfBirthday) {
  this.name = name;
  this.birthday = new Date(dateOfBirthday);
  this.age = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person('Brad', '1973-08-17');
const john = new Person('John', '1980-09-13');

console.log(brad.age());
console.log(john);