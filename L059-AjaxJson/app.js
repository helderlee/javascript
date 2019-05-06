document.querySelector("#customerBtn").addEventListener('click', loadCustomer);
document.querySelector("#customersBtn").addEventListener('click', loadCustomers);

function loadCustomer(event) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.querySelector('#customer').innerHTML = output;
    }
  }

  xhr.send();
}

function loadCustomers(event) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function (customer) {
        output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
      })

      document.querySelector('#customers').innerHTML = output;
    }
  }

  xhr.send();
}