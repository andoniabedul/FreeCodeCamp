/* 
	Replaza la palabra indicada en el segundo argumento
	en el string del primer argumento, por la palabra 
	indicada en el tercer argumento.
	Si la palabra del string, tiene su primera letra 
	en mayúscula, la palabra por la que 
	sustituyas (2do argumento) deberá estar 
	en mayúscula también.
*/ 


function myReplace(str, before, after) {
  var arr = [];
  //after = after[0].toUpperCase();
  //after = after.substring(0,1).toUpperCase() + after.substring(1);
  arr = str.split(" ");
  
  
  for(var i=0; i < arr.length; i++){
    if(arr[i] === before){
      if(arr[i].substring(0,1) === arr[i].substring(0,1).toUpperCase()){
        after = after.substring(0,1).toUpperCase() + after.substring(1);
        arr[i] = after;
      } else {
        arr[i] = after;
      }
    }
  }
   
  
  str = arr.join(" ");
  return str;
}

myReplace("His name is Tom", "Tom", "john");
