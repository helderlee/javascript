/**
 * Selectors for Multiple Elements
 */

// getElementsByClassName - old

const items = document.getElementsByClassName('collection-item');

console.log(items);

// querySelectorAll

const listItems = document.querySelectorAll('ul.collection li.collection-item');

console.log(listItems);

const oddItems = document.querySelectorAll('ul.collection li:nth-child(odd)');
const evenItems = document.querySelectorAll('ul.collection li:nth-child(even)');

oddItems.forEach(function(oddItem, index) {
    oddItem.style.background = 'lightgray';
});
evenItems.forEach(function(evenItem, index) {
    evenItem.style.background = 'whitesmoke';
});

console.log(oddItems);

