var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/Ultra%20Trail%20Races.csv"
//these are all of the colomn variables we need for our app
var Country = getColumn(url,4);
var Distance = getColumn(url,5);
var Elevation = getColumn(url,6);
// var event = getColumn (url,2);
var race = getColumn(url,2);

// this function is what gets and prints our results
//this is a parameterCHANGE
function printRace(){
   var userElevation = document.getElementById("elevation").value;
    var userDistance =  document.getElementById("distance").value;
    var matches = [];

    console.log(matches);
for(var i = 0; i < Elevation.length; i++){
    if(Country[i].includes(country) && Elevation[i] < userElevation && Distance[i]<userDistance){
        matches.push(race[i]);
      


    }
}
console.log(matches);
document.getElementById("output").innerHTML = matches.join("<br><br>");
//this creates line breaks into the results 
}

//prints 
function distanceNum(){
    document.getElementById("distanceShow").innerHTML = document.getElementById("distance").value;
    console.log(document.getElementById("distance").value);
}
//these two are the sliders for the app... the one on top is a slider for distance and the bottom is for elevation
function elevationNum(){
    document.getElementById("elevationNum").innerHTML = document.getElementById("elevation").value;
    
}


