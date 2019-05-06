// readyState Values
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if (this.status === 200) {
      document.querySelector('#output').textContent = this.responseText;
      //console.log(this.responseText);
    }
  }

  xhr.onreadystatechange = function() {
    console.log(`Ready State: ${this.readyState}`);
  }

  xhr.send();
}