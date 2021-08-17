'use strict';

const salesDiv = document.getElementById("salesData");
// locations array
cookieStore.storeLocations = [];
// Tokyo
// Dubai
// Paris
// Lima
// seattle

function cookieStore(location, hourOpen, hourClose, minCustomerHour, maxCustomerHour, aveCookieCustomer, salesByHour=[]) {
  // input data
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  this.location = location;
  this.hourOpen = hourOpen;
  this.hourClose = hourClose;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.aveCookieCustomer = aveCookieCustomer;
  // Store the results for each location in a separate array… perhaps as a property of the object representing that location
  this.salesByHour = salesByHour
  // 
  cookieStore.storeLocations.push(this);
}

new cookieStore("Seattle", '6', '20', 23, 65, 6.3);
new cookieStore('Tokyo', 6, 20, 3, 24, 1.2);
new cookieStore('Dubai', 6, 20, 11, 38, 3.7);
new cookieStore('Paris', 6, 20, 20, 38, 2.3);
new cookieStore('Lima', 6, 20, 2, 16, 4.6);

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
cookieStore.prototype.generateRandCustomer = function() {
  let number = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour) + this.minCustomerHour);
  // console.log(number);
  return number;
}

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
cookieStore.prototype.cookiesSold = function() {
  return Math.floor(this.generateRandCustomer() * this.aveCookieCustomer);
}

//   // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
cookieStore.prototype.updateSalesByHour = function() {
  let timeSpentOpen = (this.hourClose - this.hourOpen);
  for (let i = 0; i < timeSpentOpen; i++) {
    this.salesByHour.push(this.cookiesSold());
  }
},


// Calculating the sum of these hourly totals
cookieStore.prototype.dailySales = function() {
  let total = 0;
  for (let i = 0; i < this.salesByHour.length; i++) {
    total += this.salesByHour[i];
  };
  return total;
},


// Display the values of each array as unordered lists in the browser
cookieStore.prototype.renderSales = function() {
  const articleElem = document.createElement('article');
  const h1Elem = document.createElement('h1');
  salesDiv.appendChild(h1Elem);
  h1Elem.textContent = this.location;
  const olElem = document.createElement('ol');
  salesDiv.appendChild(articleElem);
  articleElem.appendChild(olElem);
  olElem.setAttribute("start", "6");
  
  for (let i = 0; i < this.salesByHour.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = this.salesByHour[i];
    olElem.appendChild(liElem);
  }
  const h2Elem = document.createElement('h2');
  salesDiv.appendChild(h2Elem);
  h2Elem.textContent = `Total sales today: ${this.dailySales()}`
}


// loop thru locations araay and render
cookieStore.prototype.renderAllStores = function() {
  for (let i = 0; i < cookieStore.storeLocations.length; i++) {
    cookieStore.storeLocations[i].updateSalesByHour();
    cookieStore.storeLocations[i].renderSales();
  }
}

cookieStore.prototype.renderTableHeader = function() {
  // create an article within the sales div
  const articleElem = document.createElement('article');
  salesDiv.appendChild(articleElem);
  // add a table to article
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);
  tableElem.setAttribute("id", "dataTable")
  // add table header
  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  // add 16 cells to table header
  const th1Elem = document.createElement('th')
  th1Elem.textContent = 'Store'
  row1.appendChild(th1Elem)

  const th2Elem = document.createElement('th')
  th2Elem.textContent = '0600'
  row1.appendChild(th2Elem)

  const th3Elem = document.createElement('th')
  th3Elem.textContent = '0700'
  row1.appendChild(th3Elem)

  const th4Elem = document.createElement('th')
  th4Elem.textContent = '0800'
  row1.appendChild(th4Elem)

  const th5Elem = document.createElement('th')
  th5Elem.textContent = '0900'
  row1.appendChild(th5Elem)

  const th6Elem = document.createElement('th')
  th6Elem.textContent = '1000'
  row1.appendChild(th6Elem)

  const th7Elem = document.createElement('th')
  th7Elem.textContent = '1100'
  row1.appendChild(th7Elem)

  const th8Elem = document.createElement('th')
  th8Elem.textContent = '1200'
  row1.appendChild(th8Elem)

  const th9Elem = document.createElement('th')
  th9Elem.textContent = '1300'
  row1.appendChild(th9Elem)

  const th10Elem = document.createElement('th')
  th10Elem.textContent = '1400'
  row1.appendChild(th10Elem)

  const th11Elem = document.createElement('th')
  th11Elem.textContent = '1500'
  row1.appendChild(th11Elem)

  const th12Elem = document.createElement('th')
  th12Elem.textContent = '1600'
  row1.appendChild(th12Elem)

  const th13Elem = document.createElement('th')
  th13Elem.textContent = '1700'
  row1.appendChild(th13Elem)

  const th14Elem = document.createElement('th')
  th14Elem.textContent = '1800'
  row1.appendChild(th14Elem)

  const th15Elem = document.createElement('th')
  th15Elem.textContent = '1900'
  row1.appendChild(th15Elem)

  const th16Elem = document.createElement('th')
  th16Elem.textContent = 'Total'
  row1.appendChild(th16Elem)
}
// rander data from object to table
cookieStore.prototype.renderTableData = function() {
  // add store location
  for(let i = 0; i < cookieStore.storeLocations.length; i++) {
    const tableElem = document.getElementById('dataTable')
    const row = document.createElement('tr');
    tableElem.appendChild(row);
  
    const th1Elem = document.createElement('th')
    th1Elem.textContent = cookieStore.storeLocations[i].location
    row.appendChild(th1Elem)

  }
  
  // // add 16 cells to table header
  // for (let i = 0; i < 14; i++)

  // const th2Elem = document.createElement('th')
  // th2Elem.textContent = '0600'
  // row1.appendChild(th2Elem)

  // const th3Elem = document.createElement('th')
  // th3Elem.textContent = '0700'
  // row1.appendChild(th3Elem)

  // const th4Elem = document.createElement('th')
  // th4Elem.textContent = '0800'
  // row1.appendChild(th4Elem)

  // const th5Elem = document.createElement('th')
  // th5Elem.textContent = '0900'
  // row1.appendChild(th5Elem)

  // const th6Elem = document.createElement('th')
  // th6Elem.textContent = '1000'
  // row1.appendChild(th6Elem)

  // const th7Elem = document.createElement('th')
  // th7Elem.textContent = '1100'
  // row1.appendChild(th7Elem)

  // const th8Elem = document.createElement('th')
  // th8Elem.textContent = '1200'
  // row1.appendChild(th8Elem)

  // const th9Elem = document.createElement('th')
  // th9Elem.textContent = '1300'
  // row1.appendChild(th9Elem)

  // const th10Elem = document.createElement('th')
  // th10Elem.textContent = '1400'
  // row1.appendChild(th10Elem)

  // const th11Elem = document.createElement('th')
  // th11Elem.textContent = '1500'
  // row1.appendChild(th11Elem)

  // const th12Elem = document.createElement('th')
  // th12Elem.textContent = '1600'
  // row1.appendChild(th12Elem)

  // const th13Elem = document.createElement('th')
  // th13Elem.textContent = '1700'
  // row1.appendChild(th13Elem)

  // const th14Elem = document.createElement('th')
  // th14Elem.textContent = '1800'
  // row1.appendChild(th14Elem)

  // const th15Elem = document.createElement('th')
  // th15Elem.textContent = '1900'
  // row1.appendChild(th15Elem)

  // const th16Elem = document.createElement('th')
  // th16Elem.textContent = '2000'
  // row1.appendChild(th16Elem)

}

cookieStore.prototype.renderAllStores();
cookieStore.prototype.renderTableHeader();
cookieStore.prototype.renderTableData();
