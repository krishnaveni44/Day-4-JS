// Request to server using API
// 1.	Use the rest countries API url ->https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json  and display all the country flags in console

// 1. Create request Object
var request = new XMLHttpRequest();

// 2. Open my request connection
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

//3. Send a request
request.send();

// 4. Data after response
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for(var i=0; i<data.length; i++){
        console.log(data[i].flag);
    }
    
}