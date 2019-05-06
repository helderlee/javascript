/**
 * Callback Functions
 */

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Synchronous way

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000); // after 2 seconds
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000); // after 1 second
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// Callback

function createPost(post, callback) {
  posts.push(post);
  callback();
}

function getPosts() {
  let output = '';
  posts.forEach(function (post) {
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
