/**
 * Keyboard & Input Events
 */

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

taskInput.value = '';

//form.addEventListener('submit', runEvent);

taskInput.addEventListener('keypress', runEvent);

taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent); // opposite of focus

taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('copy', runEvent);

taskInput.addEventListener('input', runEvent); // any input event

function runEvent(event) {
    console.log(`Event Type: ${event.type}`);

    // console.log(taskInput.value);

    // event.preventDefault();
}