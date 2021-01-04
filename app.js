'use strict';



var locationSeattle = {
    name: 'Seattle',
    maxhourlycustomer: 65,
    minhourlycustomer: 23,
    avgSale: 6.3,
    totalNumCookies: [],
    avgCustomersHour: function () {
        return Math.floor(Math.random() * (this.maxhourlycustomer - this.minhourlycustomer) + this.minhourlycustomer);

    }



};
console.log(locationSeattle.avgCustomersHour());

var locationTokyo = {
    name: 'tokyo',
    maxhourlycustomer: 24,
    minhourlycustomer: 3,
    avgSale: 1.2,
    totalNumCookies: [],

    avgCustomersHour: function () {
        return Math.floor(Math.random() * (this.maxhourlycustomer - this.minhourlycustomer) + this.minhourlycustomer);

    }



};


var locationDubai = {
    name: 'dubai',
    maxhourlycustomer: 38,
    minhourlycustomer: 11,
    avgSale: 3.7,
    totalNumCookies: [],

    avgCustomersHour: function () {
        return Math.floor(Math.random() * (this.maxhourlycustomer - this.minhourlycustomer) + this.minhourlycustomer);


    }



};

var locationParis = {
    name: 'paris',
    maxhourlycustomer: 38,
    minhourlycustomer: 20,
    avgSale: 2.3,
    totalNumCookies: [],
    avgCustomersHour: function () {
        return Math.floor(Math.random() * (this.maxhourlycustomer - this.minhourlycustomer) + this.minhourlycustomer);

    }



};

var locationLima = {
    name: 'lima',
    maxhourlycustomer: 16,
    minhourlycustomer: 2,
    avgSale: 4.6,
    totalNumCookies: [],
    avgCustomersHour: function () {
        return Math.floor(Math.random() * (this.maxhourlycustomer - this.minhourlycustomer) + this.minhourlycustomer);

    }



};


var allLocation = [
    locationSeattle,
    locationTokyo,
    locationDubai,
    locationParis,
    locationLima
]

var hoursofoperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var total = 0

for (var index = 0; index < allLocation.length; index++) {
    for (var i = 0; i < hoursofoperation.length; i++) {

        allLocation[index].totalNumCookies[i] = Math.floor(allLocation[index].avgSale * allLocation[index].avgCustomersHour());
        total = total + allLocation[index].totalNumCookies[i];
    }
}
console.log(allLocation);
console.log(total);

var perant = document.getElementById("list");
for(var k =0; k< allLocation.length;k++){
    var h2 = document.createElement('h2');
    h2.textContent = allLocation[k].name;
    perant.appendChild(h2);
    var unorder = document.createElement('ul');
    perant.appendChild(unorder);
    for(var c = 0 ;c < allLocation[k].totalNumCookies.length;c++  ){
        var listItem = document.createElement('li'); 
        listItem.textContent = hoursofoperation[c] + ":"+ allLocation[k].totalNumCookies[c];
        unorder.appendChild(listItem); 
    }
}
