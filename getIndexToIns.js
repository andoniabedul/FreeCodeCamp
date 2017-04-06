/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a,b){
    return a-b;
  });
  var indexValue;
  var index;
  for(var i=0; i < arr.length; i++){
    if(i+1 >= arr.length){
      if(num >= arr[i]){
        index = i;
      }
    }else{
      if(num >= arr[i] && num <= arr[i+1]){
        index = i;
      }  
    }
  }
  arr.splice(index+1,0,num);
  indexValue = arr.indexOf(num);
  return indexValue;
}

getIndexToIns([40, 60], 50);
