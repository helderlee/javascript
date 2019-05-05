/**
 * Local Storage
 */

// // set local storage item
// localStorage.setItem('name', 'John');
// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('name');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

document.querySelector('form').addEventListener('submit', function(event) {
    const task = document.querySelector('#task').value;
    
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});