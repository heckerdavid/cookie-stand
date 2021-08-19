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

let seattleLocation = new cookieStore("Seattle", 6, 20, 23, 65, 6.3);
let tokyoLocation = new cookieStore('Tokyo', 6, 20, 3, 24, 1.2);
let dubaiLocation = new cookieStore('Dubai', 6, 20, 11, 38, 3.7);
let parisLocation = new cookieStore('Paris', 6, 20, 20, 38, 2.3);
let limaLocation = new cookieStore('Lima', 6, 20, 2, 16, 4.6);

// helper function, accept tag, parent, and optional content, create and append tag to parent, insert optional content
function _makeElem(tag, parent, text=null, attribute, attributeValue) {
  let Elem = document.createElement(tag);
  parent.appendChild(Elem);
  if (text) {
    Elem.textContent = text;
  }  
  if (attribute) {
    Elem.setAttribute(attribute, attributeValue);
  }
  return Elem;
}

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
cookieStore.prototype.generateRandCustomer = function() {
  return ( Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour) + this.minCustomerHour));
}

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
cookieStore.prototype.cookiesSold = function() {
  return Math.floor(this.generateRandCustomer() * this.aveCookieCustomer);
}

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
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

//TODO 
// Display the values of each array as unordered lists in the browser
cookieStore.prototype.renderSales = function() {

  _makeElem('h1', salesDiv, this.location)
  _makeElem('article', salesDiv)
  _makeElem('ol', 'article', null, 'start', '6')

  for (let i = 0; i < this.salesByHour.length; i++) {
    // append data from salesByHour array to data table
    _makeElem('li', 'ol', this.salesByHour[i])
  }
  _makeElem('h2', salesDiv, `Total sales today: ${this.dailySales()}`)
}


// loop thru locations array and render
cookieStore.prototype.renderAllStores = function() {
  for (let i = 0; i < cookieStore.storeLocations.length; i++) {
    cookieStore.storeLocations[i].updateSalesByHour();
    }
}
// IDK WHY THIS DOESN'T WORK WITH THE HELPER FUNCTION
cookieStore.prototype.renderTableHeader = function() {
  // create an article within the sales div
  // _makeElem('article', salesDiv)
  const articleElem = document.createElement('article');
  salesDiv.appendChild(articleElem);
  // add a table to article
  // _makeElem('table', "article", null, 'id', 'dataTable')
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);
  tableElem.setAttribute("id", "dataTable")
  // add table header
  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  // add 16 cells to table header
  let hoursArray = ['Store', '0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', 'Daily Total']
  
  for(let i = 0; i < hoursArray.length; i++) {
    _makeElem('th', row1, hoursArray[i])
  }

}
// render data from object to table
cookieStore.prototype.renderTableData = function() {
  // add store location
  for(let i = 0; i < cookieStore.storeLocations.length; i++) {
    const tableElem = document.getElementById('dataTable')
    const row = document.createElement('tr');
    tableElem.appendChild(row);

    _makeElem("th", row, cookieStore.storeLocations[i].location);
    // const th1Elem = document.createElement('th')
    // th1Elem.textContent = cookieStore.storeLocations[i].location
    // row.appendChild(th1Elem)

    let total = 0;
    for (let j = 0; j < cookieStore.storeLocations[i].salesByHour.length; j++) {
      // add data from salesByHour array

      _makeElem("th", row, cookieStore.storeLocations[i].salesByHour[j]);
      // const th2Elem = document.createElement('th')
      // th2Elem.textContent = cookieStore.storeLocations[i].salesByHour[j]
      // row.appendChild(th2Elem)

      // calculate  total
      total += cookieStore.storeLocations[i].salesByHour[j]
    }
    //  append total to table
    _makeElem('th', row, total, 'class', 'total')
    // const totalElem = document.createElement('th')
    // totalElem.textContent = total
    // totalElem.setAttribute("class", "total")
    // row.appendChild(totalElem)

  }

}

cookieStore.prototype.renderTableDataByHourTotal = function() {
  const tableElem = document.getElementById('dataTable')
  const row = document.createElement('tr');
  tableElem.appendChild(row);

  _makeElem('th', row, 'Hourly Total')

  // const th1Elem = document.createElement('th')
  // th1Elem.textContent = 'Hourly Total'
  // row.appendChild(th1Elem)


  let totalValue = 0
  for(let i = 0; i < 14; i++) {
    let total = 0
    for(let j=0; j< cookieStore.storeLocations.length; j++) {
      total += cookieStore.storeLocations[j].salesByHour[i]
    }
    _makeElem('th', row, total)
    // const hourElem = document.createElement('th')
    // hourElem.textContent = total
    // row.appendChild(hourElem)

  }
  // calc grand total
  const value = document.getElementsByClassName('total')
  for(let i =0; i < value.length; i++) {
    totalValue += parseInt( value[i].textContent )
  }
  // append grand total to table
  _makeElem('th', row, totalValue)
  // const totalhourElem = document.createElement('th')
  //   totalhourElem.textContent = totalValue
  //   row.appendChild(totalhourElem)

}



cookieStore.prototype.renderAllStores();
cookieStore.prototype.renderTableHeader();
cookieStore.prototype.renderTableData();
cookieStore.prototype.renderTableDataByHourTotal();
// cookieStore.prototype.calcTotals();