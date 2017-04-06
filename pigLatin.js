/*
	Traducir a PigLatin (buscar en Wikipedia para saber que es)
	Un juego gringo.
*/


function translatePigLatin(str) {
  str = str.toLowerCase();
  var arr = str.split('');
  var vowals = ['a','e','i','o','u'];
  var firstTime = true;
  function itsVocal(fTime){
    var string = arr.join('');
    for(var i=0; i < vowals.length; i++){
      if(fTime === true){
        if(string.startsWith(vowals[i]) === true){
          arr.push("w","a","y");
          return true;
        }
      } else {
        if(string.startsWith(vowals[i]) === true){
          arr.push('a','y');
          return true;
        }
      }
    }
    return false;
  }
  if(itsVocal(firstTime) === false){
    arr.push(str[0]);
    arr.shift();
    firstTime = false;
    if(itsVocal(firstTime) === false){
      arr.push(str[1],'a','y');
      arr.shift();
    }
  }
  return arr.join('');
}

translatePigLatin("autoctono");