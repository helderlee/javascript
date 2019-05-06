/**
 * Async & Await
 */

// First example

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         return resolve('Hello');
//       } else {
//         return reject('Something went wrong');
//       }
//     }, 1000);
//   });
//   const response = await promise; // wait until promise is resolved
//   return response;
// }

// myFunc()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));


// Second example
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it is resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
