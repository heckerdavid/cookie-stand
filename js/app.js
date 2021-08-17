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
  let hoursArray = ['Store', '0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', 'Daily Total']
  
  for(let i = 0; i < hoursArray.length; i++) {
    const th1Elem = document.createElement('th')
    th1Elem.textContent = hoursArray[i]
    row1.appendChild(th1Elem)
  }

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

    let total = 0;
    for (let j = 0; j < cookieStore.storeLocations[i].salesByHour.length; j++) {
      // add data from salesByHour array
      const th2Elem = document.createElement('th')
      th2Elem.textContent = cookieStore.storeLocations[i].salesByHour[j]
      row.appendChild(th2Elem)
      // calculate and table add total
      total += cookieStore.storeLocations[i].salesByHour[j]
      
    }
    const totalElem = document.createElement('th')
    totalElem.textContent = total
    row.appendChild(totalElem)

  }

}
cookieStore.prototype.renderTableDataByHourTotal = function() {
  const tableElem = document.getElementById('dataTable')
  const row = document.createElement('tr');
  tableElem.appendChild(row);

  const th1Elem = document.createElement('th')
  th1Elem.textContent = 'Total'
  row.appendChild(th1Elem)


  for(let i = 0; i < 14; i++) {
    let total = 0
    for(let j=0; j< cookieStore.storeLocations.length; j++) {
      total += cookieStore.storeLocations[j].salesByHour[i]
    }
    const hourElem = document.createElement('th')
    hourElem.textContent = total
    row.appendChild(hourElem)

  }

}


cookieStore.prototype.renderAllStores();
cookieStore.prototype.renderTableHeader();
cookieStore.prototype.renderTableData();

cookieStore.prototype.renderTableDataByHourTotal();