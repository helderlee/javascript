/**
 * Fetch API
 */

document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector('#output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getJson() {
  fetch('posts.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}