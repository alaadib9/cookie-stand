'use strict';
var avgCustomer = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function All(name, maxhourlycustomer, minhourlycustomer, avgSale, avgCustomersHour, total) {
    this.name = name;
    this.maxhourlycustomer = maxhourlycustomer;
    this.minhourlycustomer = minhourlycustomer;
    this.avgSale = avgSale;
    this.avgCustomersHour = [];
    this.total = 0;
    this.dailyTotal = [];

}
// function random
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// method 
All.prototype.avgHour = function () {
    for (var index = 0; index < avgCustomer.length; index++) {
        this.avgCustomersHour[index] = Math.floor(getRandomArbitrary(this.maxhourlycustomer, this.minhourlycustomer) * this.avgSale);
        this.total = this.total + this.avgCustomersHour[index];

    }
    this.dailyTotal.push(this.total);
    console.log(this.dailyTotal);

}



/// creat a table 
var parentElement = document.getElementById('table');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');
article.appendChild(table);
All.prototype.tabel = function () {
    var hourRow = document.createElement('tr');
    table.appendChild(hourRow);
    var header = document.createElement('th');
    header.textContent = '';
    hourRow.appendChild(header);
    for (var i = 0; i < avgCustomer.length; i++) {
        var restHour = document.createElement('th');
        restHour.textContent = avgCustomer[i];
        hourRow.appendChild(restHour)
    }
    var headerDaily = document.createElement('th');

    headerDaily.textContent = 'Daily Location Total';
    hourRow.appendChild(headerDaily);

}


All.prototype.bodyTable = function () {


    var newRow = document.createElement("tr");
    table.appendChild(newRow);
    var starterHead = document.createElement('th');
    starterHead.textContent = this.name;
    newRow.appendChild(starterHead);

    for (var index = 0; index < this.avgCustomersHour.length; index++) {
        var creatColoum = document.createElement('td');
        creatColoum.textContent = this.avgCustomersHour[index];
        newRow.appendChild(creatColoum);

    }
    var dailytotalC = document.createElement('td')
    dailytotalC.textContent = this.dailyTotal[0];
    newRow.appendChild(dailytotalC)

}

// var locations = [
//     'seattle',
//     'tokyo',
//     'dubai',
//     'paris',
//     'lima'
// ]

// All.prototype.lastLine = function () {
//     var final = document.createElement('td');
//     final.textContent = 'Totals'


//     var endTotal = 0;
//     for (var i = 0; i < avgCustomer.length; i++) {
//         var totalPerHour = 0;
//         var hour = document.createElement('td')
//         for (var d = 0; d < locations.length; d++) {
//             totalPerHour += locations[d].avgCustomersHour[i]

//         }


//     }

// }





var locationOne = new All('seattle', 65, 23, 6.3);
// locationOne.avgHour()
console.log(locationOne)
locationOne.tabel()
locationOne.avgHour()
locationOne.bodyTable();

// object constructor 

var locationTwo = new All('tokyo', 24, 3, 1.2);
locationTwo.avgHour()
console.log(locationTwo)
locationTwo.bodyTable();


var locationThree = new All('dubai', 38, 11, 3.7);
locationThree.avgHour()
console.log(locationThree)
locationThree.bodyTable();



var locationFour = new All('paris', 38, 20, 2.3);
locationFour.avgHour()
console.log(locationFour)
locationFour.bodyTable();


var locationFive = new All('lima', 16, 2, 4.6);
locationFive.avgHour()
locationFive.bodyTable();





var addNewLocation = document.getElementById("addNewLocation");
addNewLocation.addEventListener('submit' , function (event) {
    event.preventDefault();
    var loctionName = event.target.loctionName.value;
    var maxhourlycustomer = event.target.maxhour.value;
    var minmum = event.target.minhour.value;
    var avg = event.target.avghour.value;
    var newLocation = new All (loctionName, maxhourlycustomer, minmum, avg)
    console.log(newLocation)
    newLocation.avgHour();
    newLocation.bodyTable();
} );





