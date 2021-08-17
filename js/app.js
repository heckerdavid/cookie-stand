'use strict';

const salesDiv = document.getElementById("salesData")
// Tokyo
// Dubai
// Paris
// Lima

// seattle
const SeattleStore = {
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

    for (let i = 0; i < SeattleStore.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = SeattleStore.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < SeattleStore.salesByHour.length; i++) {
      total += SeattleStore.salesByHour[i]
    };
    return total;
  },
}

const TokyoStore = {
  location: 'Tokyo',
  hourOpen: 6,
  hourClose: 20,
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minCustomerHour: 3,
  maxCustomerHour: 24,
  aveCookieCustomer: 1.2,
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

    for (let i = 0; i < TokyoStore.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = TokyoStore.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < TokyoStore.salesByHour.length; i++) {
      total += TokyoStore.salesByHour[i]
    };
    return total;
  },
}

const DubaiStore = {
  location: 'Dubai',
  hourOpen: 6,
  hourClose: 20,
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minCustomerHour: 11,
  maxCustomerHour: 38,
  aveCookieCustomer: 3.7,
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
  saleHoursListed: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
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

    for (let i = 0; i < DubaiStore.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = DubaiStore.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < DubaiStore.salesByHour.length; i++) {
      total += DubaiStore.salesByHour[i]
    };
    return total;
  },
}

const ParisStore = {
  location: 'Paris',
  hourOpen: 6,
  hourClose: 20,
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minCustomerHour: 20,
  maxCustomerHour: 38,
  aveCookieCustomer: 2.3,
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

    for (let i = 0; i < ParisStore.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = ParisStore.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < ParisStore.salesByHour.length; i++) {
      total += ParisStore.salesByHour[i]
    };
    return total;
  },
}

const LimaStore = {
  location: 'Lima',
  hourOpen: 6,
  hourClose: 20,
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minCustomerHour: 2,
  maxCustomerHour: 16,
  aveCookieCustomer: 4.6,
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

    for (let i = 0; i < LimaStore.salesByHour.length; i++) {
      const liElem = document.createElement('li')
      liElem.textContent = LimaStore.salesByHour[i]
      olElem.appendChild(liElem)
    }
    const h2Elem = document.createElement('h2')
    salesDiv.appendChild(h2Elem)
    h2Elem.textContent = `Total sales today: ${this.dailySales()}`
  },
  // Calculating the sum of these hourly totals
  dailySales: function() {
    let total = 0;
    for (let i = 0; i < LimaStore.salesByHour.length; i++) {
      total += LimaStore.salesByHour[i]
    };
    return total;
  },
}

// locations array
const storeLocations = [SeattleStore, TokyoStore, DubaiStore, ParisStore, LimaStore]
// loop thru locations araay and render
function renderStores(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].updateSalesByHour();
    array[i].renderSales();
  }
}

renderStores(storeLocations)

