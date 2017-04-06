/*
Repetir el string(str) el número de veces indicado (num). 
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0){
    return "";
  }
  var list = [];
  for(var i=0; i < num; i++){
    list.push(str);
  }
  str = list.join('');
  return str;
}

repeatStringNumTimes("*", 3);
