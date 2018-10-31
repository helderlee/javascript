/**
 * Object Literals
 */
let val;

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  birthday: new Date(1970, 1, 1),
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getAge: function () {
    return ~~((Date.now() - this.birthday) / (31557600000));
  }
}

val = person;
console.log(val);

val = person.firstName;
console.log(val);

val = person['firstName'];
console.log(val);

val = person.getAge();
console.log(val);