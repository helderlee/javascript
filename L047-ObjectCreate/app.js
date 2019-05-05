/**
 * Object Create
 */

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Johnson';

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Williams'}
});

console.log(brad.greeting());