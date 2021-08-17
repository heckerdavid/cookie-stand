'use strict';

// Tokyo
// Dubai
// Paris
// Lima

// seattle
const storeFront = {
  location: 'Seattle',
  hourOpen: 6,
  hourClose: 20,
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minCustomerHour: 23,
  maxCustomerHour: 65,
  aveCookieCustomer: 6.3,
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  randCustomer: function() {
    let number = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    // console.log(number);
    return number;
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  cookiesSold: function() {
    return Math.floor(this.randCustomer() * this.aveCookieCustomer)
  },
  // Store the results for each location in a separate array… perhaps as a property of the object representing that location
  salesByHour: [],
  updateSalesByHour: function() {
    for (let i = 0; i < 14; i++) {
      this.salesByHour.push(this.cookiesSold());
    }
  },
  // Display the values of each array as unordered lists in the browser
  renderSales: function(salesArray) {
    const articleElem = document.createElement('article');
    const h1Elem = document.createElement('h1')
    salesDiv.appendChild(h1Elem)
    h1Elem.textContent = this.location
    const olElem = document.createElement('ol');
    salesDiv.appendChild(articleElem)
    articleElem.appendChild(olElem)
    olElem.setAttribute("start", "6")

    for (let i = 0; i < storeFront.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = storeFront.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < storeFront.salesByHour.length; i++) {
      total += storeFront.salesByHour[i]
    };
    return total;
  },
}

const salesDiv = document.getElementById("salesData")


storeFront.updateSalesByHour()
console.log("sales by hour is: " + storeFront.salesByHour)
console.log("daily sales: " + storeFront.dailySales())
storeFront.renderSales()