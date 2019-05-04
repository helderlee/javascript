/**
 * Selectors for Single Elements
 */

// getElementById - old
const taskTitle = document.getElementById('task-title');

console.log(taskTitle);

console.log(taskTitle.id);

console.log(taskTitle.innerText);

taskTitle.style.background = 'gray';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';

// taskTitle.style.display = 'none';

taskTitle.textContent = 'Task List';

// querySelector - new - replaces jQuery for DOM

let selection = document.querySelector('#task-title');

console.log(selection);

selection = document.querySelector('.card-title');

console.log(selection);

selection = document.querySelector('h5');

console.log(selection);

document.querySelector('li').style.color = 'red'; // only the first

document.querySelector('li:last-child').style.color = 'green'; // the last li

document.querySelector('li:nth-child(3)').style.color = 'blue'; // the 3rd li

document.querySelector('li:nth-child(odd)').textContent = 'only the first odd';

document.querySelector('li:nth-child(even)').textContent = 'only the first even';