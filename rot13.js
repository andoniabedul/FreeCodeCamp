/*
Cifrado de Cesar: restas o sumas 13 carácteres dependiendo de la posición. Cifrado ROT13.
*/

function rot13(str) { // LBH QVQ VG!
  var charCode;
  var newValue;
  var newString = [];
  for(var i=0; i < str.length; i++){
    if(str[i] !== " " && str[i] !== "!" && str[i] !== "." && str[i] !== "?"){
      charCode = str[i].charCodeAt(0);
      if(charCode <= 77){
        newValue = charCode+13;
      }else {
        newValue = charCode-13;
      }
      newString.push(String.fromCharCode(newValue));
    } else {
      newString.push(str[i]);
    }
  }
  str = newString.join("");
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
