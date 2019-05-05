/**
 * Mouse Events
 */

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);
//clearBtn.addEventListener('mousedown', runEvent);
//clearBtn.addEventListener('mouseup', runEvent);
//card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

function runEvent(event) {
    console.log(`Event Type: ${event.type}`);
}