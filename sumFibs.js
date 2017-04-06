/*
Suma todos los numeros impares de la secuencia fibonacci
hasta num
*/
function sumFibs(num) {
  function itsOdd(n){
    return n%2;
  }
  var number = 0;
  var nextNumber = 1;
  var total = 1;
  var odds = 0;

  while(total <= num){
    if(itsOdd(total) === 1){
      odds = total + odds;
    }
    total = number + nextNumber;
    number = nextNumber;
    nextNumber = total;

  }

  return odds;
}

sumFibs(4000000);
