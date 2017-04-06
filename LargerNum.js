/*
Se debe devolver un array con los números
más grandes de cada sub-array. 
*/

function largestOfFour(arr) {
  // You can do this!
  var largerNums = [];
  for(var i=0; i < arr.length; i++){
    var sorted = arr[i].sort(function(a, b){return a-b;});
    largerNums.push(sorted[arr.length-1]);
  }
  return largerNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
