/*
Transforma cualquier string a spinalCase es decir esto-es-spinal-case
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var underline = new RegExp("([\-])|([_])|([' *'])","g");
  var camelCase = new RegExp(/([A-Z])/g);

  if(str.match(camelCase).length > 1){
    str = str.replace(/([a-z0-9])([A-Z])/g,'$1 $2');
    if(str.search(" ") > 0 || str.search("_") > 0){
      str = str.replace(underline,"-").toLowerCase();
    }
  }
  return str;
}

spinalCase('thisIsSpinalTap');
