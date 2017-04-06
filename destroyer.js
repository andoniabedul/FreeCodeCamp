/* Usando Array.filter() elimina los elementos de un array (primer argumento, es decir el array) que se encuentren en los argumentos fuera del array
*/


function destroyer(arr) {
  // Remove all the values
  var newArray = arr.slice(0);
  var finalArray = [];
  var args = Array.prototype.slice.call(arguments, 1);
  function check(value){
    for(var i=0; i < args.length; ++i){
      if(value === args[i]){
        return false;
      }
    }
    return true;
  }
  
  
  return newArray.filter(check);
}

destroyer(["tree", "hamburger", 53], "tree", 53);