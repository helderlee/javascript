/**
 * Template Literals
 */

const name = 'John';
const age = 30;
const job = 'Web Developer';

let html;

/**
 * Without template string (ES5)
 */
html = '<ul><li>Name: ' + name + '</li></ul>';
document.body.innerHTML = html;

/**
 * With template string (ES6)
 */
function hello() {
  return 'Hello';
}

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under or equals 30'}</li>
</ul>
`;
document.body.innerHTML = html;