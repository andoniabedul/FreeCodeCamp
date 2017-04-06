/*
Write a function that takes two or more arrays and returns
a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.
*/


function uniteUnique(arr) {
  var newArray = [];
  var finalArray = [];
  for(var i=0; i < arguments.length; i++){
    newArray = newArray.concat(arguments[i]);
  }

  finalArray = newArray;
  for (var z=0; z < newArray.length; z++){
    for(var x=z+1; x < finalArray.length; x++){
      if (newArray[z] === finalArray[x]){
        finalArray[x] = '';
      }
    }
  }

  function filtro(pos){
    return pos !== '';
  }
  console.log("finalArray: " + finalArray.filter(filtro));
  return finalArray.filter(filtro);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1,7]);
