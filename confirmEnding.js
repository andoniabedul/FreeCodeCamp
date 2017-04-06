/*
Comprobar si una cadena de carácteres
termina con el valor que le des en target.
Puede ser una letra, varias o una palabra.
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lengthTarget = target.length;
  var lastChars = str.substr(str.length-lengthTarget, lengthTarget);
  if (lastChars === target){
    return true;
  } else {
    return false;
  }
  return str;
}

confirmEnding("Bastian", "n");