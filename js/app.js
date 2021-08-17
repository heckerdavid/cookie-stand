'use strict';

const salesDiv = document.getElementById("salesData")
// locations array
cookieStore.storeLocations = []
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

new cookieStore("Seattle", '6', '20', 23, 65, 6.3)
new cookieStore('Tokyo', 6, 20, 3, 24, 1.2)
new cookieStore('Dubai', 6, 20, 11, 38, 3.7)
new cookieStore('Paris', 6, 20, 20, 38, 2.3)
new cookieStore('Lima', 6, 20, 2, 16, 4.6)

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
  let timeSpentOpen = (this.hourClose - this.hourOpen)
  for (let i = 0; i < timeSpentOpen; i++) {
    this.salesByHour.push(this.cookiesSold());
  }
},


// Calculating the sum of these hourly totals
cookieStore.prototype.dailySales = function() {
  let total = 0;
  for (let i = 0; i < this.salesByHour.length; i++) {
    total += this.salesByHour[i]
  };
  return total;
},


// Display the values of each array as unordered lists in the browser
cookieStore.prototype.renderSales = function(salesArray) {
  const articleElem = document.createElement('article');
  const h1Elem = document.createElement('h1')
  salesDiv.appendChild(h1Elem)
  h1Elem.textContent = this.location
  const olElem = document.createElement('ol');
  salesDiv.appendChild(articleElem)
  articleElem.appendChild(olElem)
  olElem.setAttribute("start", "6")
  
  for (let i = 0; i < this.salesByHour.length; i++) {
    const liElem = document.createElement('li')
    liElem.textContent = this.salesByHour[i]
    olElem.appendChild(liElem)
  }
  const h2Elem = document.createElement('h2')
  salesDiv.appendChild(h2Elem)
  h2Elem.textContent = `Total sales today: ${this.dailySales()}`
}


// loop thru locations araay and render
cookieStore.prototype.renderAllStores = function() {
  for (let i = 0; i < cookieStore.storeLocations.length; i++) {
    cookieStore.storeLocations[i].updateSalesByHour();
    cookieStore.storeLocations[i].renderSales();
  }
}

cookieStore.prototype.renderAllStores()

