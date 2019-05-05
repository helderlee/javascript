/**
 * Removing and replacing elements
 */

// Replace element

const newHeading = document.createElement('h4');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.querySelector('#task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// Remove element

const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul.collection');

// Remove list item
lis[0].remove();

// Remove child element
ul.removeChild(lis[2]);

