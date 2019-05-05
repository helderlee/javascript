/**
 * Events
 */

const clearTasks = document.querySelector('.clear-tasks');

// clearTasks.addEventListener('click', function(event) {
//     console.log('Hello Click');

//     /**
//      * Fill href with # 
//      * or use event.preventDefault()
//      * to prevent default behaviour
//      * of going forward to href
//      */
//     //event.preventDefault(); 
// });

clearTasks.addEventListener('click', onClick);

function onClick(event) {
    //console.log('Hello Click');
    let val;

    val = event;
    console.log(val);

    val = event.target;
    console.log(val);

    val = event.type;
    console.log(val);

}
