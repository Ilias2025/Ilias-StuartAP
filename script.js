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
function printFood(){
  var userProtein = document.getElementById("proteinSlider").value;
   var userCalorie =  document.getElementById("calorieSlider").value;
   var matches = [];

   console.log(matches);
for(var i = 0; i < CalorieNum.length; i++){
   if(TypeName[i].includes(type) && ProteinNum[i] < userProtein && CalorieNum[i]<userCalorie){
       matches.push(FoodName[i]);
     


   }
}
console.log(matches);
document.getElementById("output").innerHTML = matches.join("<br><br>");
//this creates line breaks into the results 
}


  //next you will use function calls and get columns..


  //first program requirments..
  //defines proccedures name and return type (if necessary)
  //contains and uses one/more paremeters that have effect on funciton of procedure
  //implements an algorithm that includes sequencing, selection, and iteratio





  //second program should show ehere student developed procedure is being called







function calorienum(){
  document.getElementById("calorieShow").innerHTML = document.getElementById("calorieSlider").value;
  console.log(document.getElementById("calorieSlider").value);
}
//these two are the sliders for the app... the one on top is a slider for distance and the bottom is for elevation
function proteinnum(){
  document.getElementById("proteinShow").innerHTML = document.getElementById("proteinSlider").value;
  console.log(document.getElementById("porteinSlider").value);
  
}
