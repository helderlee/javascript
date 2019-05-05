/**
 * Creating Elements
 */

 // Create element
const li = document.createElement('li');

// Add id
li.id = 'new-item';

// Add class
li.className = 'collection-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add classes to link
link.className = 'delete-item secondary-content';

// Create icon element
const icon = document.createElement('i');
icon.className = 'fa fa-remove';

// Append icon to link
link.appendChild(icon);

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


