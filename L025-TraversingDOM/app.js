/**
 * Traversing the DOM
 */

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list.childNodes;

console.log(val);

val = list.children;

console.log(val);

// Node Types
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children[3];

console.log(val);

val = listItem.nextElementSibling;

console.log(val);
