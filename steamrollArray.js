/*
Sacar los elementos de todos los array y meterlos en uno solo

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  function away(array){
    for(var z=0; z < array.length; z++){
      if(Array.isArray(array[z])){
        away(array[z]);
      } else {
        newArr.push(array[z]);
      }
    }
  }
  for(var i=0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      away(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
