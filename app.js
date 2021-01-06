'use strict';


var hoursofoperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Locations(name, maxhourlycustomer, minhourlycustomer, avgSale) {
    this.name = name;
    this.maxhourlycustomer = maxhourlycustomer;
    this.minhourlycustomer = minhourlycustomer;
    this.avgSale = avgSale;
    this.avgCustomersHour = [];
    this.total = 0;

}

function customersHour(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}


Locations.prototype.avgHour = function () {
 
    for (var index = 0; index < hoursofoperation.length; index++) {
       
            this.avgCustomersHour[index] = Math.floor(customersHour(this.minhourlycustomer, this.maxhourlycustomer) * this.avgSale);
            this.total =this.total + this.avgCustomersHour[index];
            console.log(this.total);
        

    }

    
}










var parentElement = document.getElementById("list");

var article = document.createElement('article');
parentElement.appendChild(article);

var table = document.createElement('table');
article.appendChild(table);

//  Locations.prototype.tabell = function () {

   

//     var SecondRow = document.createElement('tr');
//     table.appendChild(SecondRow);
//     var header = document.createElement('th');
//     header.textContent = 'Times';
//     SecondRow.appendChild(header);

//     var headerOne = document.createElement('th');
//     headerOne.textContent = '6:00am';
//     SecondRow.appendChild(headerOne);

//     var headerTwo = document.createElement('th');

//     headerTwo.textContent = '7:00am';
//     SecondRow.appendChild(headerTwo);

//     var headerThree = document.createElement('th');

//     headerThree.textContent = '8:00am';
//     SecondRow.appendChild(headerThree);

//     var headerFour = document.createElement('th');

//     headerFour.textContent = '9:00am';
//     SecondRow.appendChild(headerFour);

//     var headerFive = document.createElement('th');

//     headerFive.textContent = '10:00am';
//     SecondRow.appendChild(headerFive);

//     var headerSix = document.createElement('th');

//     headerSix.textContent = '11am';
//     SecondRow.appendChild(headerSix);


//     var headerSix = document.createElement('th');

//     headerSix.textContent = '12pm';
//     SecondRow.appendChild(headerSix);


//     var headerSeven = document.createElement('th');

//     headerSeven.textContent = '1:00pm';
//     SecondRow.appendChild(headerSeven);


//     var headerEigth = document.createElement('th');

//     headerEigth.textContent = '2:00pm';
//     SecondRow.appendChild(headerEigth);


//     var headerNine = document.createElement('th');

//     headerNine.textContent = '3:00pm';
//     SecondRow.appendChild(headerNine);


//     var headerTen = document.createElement('th');

//     headerTen.textContent = '4:00pm';
//     SecondRow.appendChild(headerTen);


//     var headerEleven = document.createElement('th');

//     headerEleven.textContent = '5:00pm';
//     SecondRow.appendChild(headerEleven);


//     var coloums = document.createElement('th');

//     coloums.textContent = '6:00pm';
//     SecondRow.appendChild(coloums);


//     var headerThe = document.createElement('th');

//     headerThe.textContent = '7:00pmm';
//     SecondRow.appendChild(headerThe);


//     var headerDaily = document.createElement('th');

//     headerDaily.textContent = 'Daily Location Total';
//     SecondRow.appendChild(headerDaily);

// }

Locations.prototype.houres = function() {
    for (var h = 0; index < hoursofoperation.length; h++) {
        var SecondRow = document.createElement('tr');
        table.appendChild(SecondRow);
        var header = document.createElement('th');
        header.textContent = [];
        SecondRow.appendChild(header);
        
        
    }
}




Locations.prototype.bodyTable = function () {
   

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

}

var LocationOne = new Locations('seattle', 65, 23, 6.3);
LocationOne.avgHour()
console.log(LocationOne);
 LocationOne.hours
LocationOne.bodyTable();


var LocationTwo = new Locations('tokyo', 24, 3, 1.2);
LocationTwo.avgHour()
console.log(LocationTwo);

LocationTwo.bodyTable();

var LocationThree = new Locations('dubai', 38, 11, 3.7);
LocationThree.avgHour()
console.log(LocationThree);

LocationThree.bodyTable();

var LocationFour = new Locations('paris', 38, 20, 2.3);
LocationFour.avgHour()
console.log(LocationFour);

LocationFour.bodyTable();

var LocationFive = new Locations('lima', 16, 2, 4.6);
LocationFive.avgHour()
console.log(LocationFive);

LocationFive.bodyTable();






