/*
Return an English translated sentence of the passed binary string.
*/

function binaryAgent(str) {
  var arr = [];
  var words = [];
  var word;
  arr = str.split(" ");

  for(var z=0; z < arr.length; z++){
    var ascii = 0;
    word = arr[z];
    for(var x= word.length; x >= 0; x--){
      if(x === 7 && word[x] == 1){
        ascii = ascii + 1;
      } if (x===6 && word[x] == 1){
        ascii = ascii + 2;
      } if (x===5 && word[x] == 1){
        ascii = ascii + 4;
      } if (x===4 && word[x] == 1){
        ascii = ascii + 8;
      } if (x===3 && word[x] == 1){
        ascii = ascii + 16;
      } if (x===2 && word[x] == 1){
        ascii = ascii + 32;
      } if (x===1 && word[x] == 1){
        ascii = ascii + 64;
      } if (x===0 && word[x] == 1){
        ascii = ascii + 64;
      } else if (word[x] === " "){
        words.push(" ");
      }
    }
    words.push(ascii);
  }
  var newArr = [];
  for(var j=0; j < words.length; j++){
    newArr.push(String.fromCharCode(words[j]));
  }
  return newArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
