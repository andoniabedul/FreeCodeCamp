/*
Comprobar si las letras dadas (segunda posición del arreglo), 
están en un string (primera posición del arreglo)
*/


function mutation(arr) {
  var count = 0;
  var letters = arr[1].toLowerCase().split('');
  var string = arr[0].toLowerCase();
  for(var i=0; i<letters.length; i++){
    var cnt = string.indexOf(letters[i]);
    if(cnt !== -1){
      count++;
    }
  }
  if(count === letters.length){
    return true;
  }else {
    return false;
  }
}

mutation(["Mary", "Army"]);