var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Fast%20Food%20Nutrition.csv"
//This can be used for utils or in script
function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  function getCol(matrix, col){
    var column = [];
    for(var i=1; i<matrix.length-1; i++){
       column.push(matrix[i][col]);
    }
    return column;
 }



 //START CODE
 var FoodName = getColumn(url,1);
 var TypeName = getColumn(url,2);
 var VenderName = getColumn(url,3);
 var CalorieNum = getColumn(url,4);
 var ProteinNum = getColumn(url,6);



// CHANGE BELOW TO PRINT FAST FOOD RESTAURANT
 function FoodChoice (){
  var userElevation = document.getElementById("calorie").value;
   var userDistance =  document.getElementById("protein").value;
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


  //next you will use function calls and get columns..


  //first program requirments..
  //defines proccedures name and return type (if necessary)
  //contains and uses one/more paremeters that have effect on funciton of procedure
  //implements an algorithm that includes sequencing, selection, and iteratio





  //second program should show ehere student developed procedure is being called







function calorienum(){
  document.getElementById("calorienum").innerHTML = document.getElementById("calorie").value;
  console.log(document.getElementById("calorie").value);
}
//these two are the sliders for the app... the one on top is a slider for distance and the bottom is for elevation
function elevationNum(){
  document.getElementById("elevationNum").innerHTML = document.getElementById("elevation").value;
  
}

