/**
 * Event Bubbling & Delegation
 */

// BUBBLING
// const cardTitle = document.querySelector('.card-title')

// cardTitle.addEventListener('click', titleEvent);

// function titleEvent(event) {
//     console.log('card title');
// }

// const cardContent = document.querySelector('.card-content')

// cardContent.addEventListener('click', contentEvent);

// function contentEvent(event) {
//     console.log('card content');
// }

// const card = document.querySelector('.card')

// card.addEventListener('click', cardEvent);

// function cardEvent(event) {
//     console.log('card');
// }



// DELEGATION

// const di = document.querySelector('.delete-item');

// di.addEventListener('click', deleteItem);

const bd = document.body;

bd.addEventListener('click', deleteItem);

function deleteItem(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        event.target.parentElement.parentElement.remove();
    }
}