/*
  Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

  For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

*/
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  if(Object.keys(source).length === 1){
    for(var i=0; i < collection.length; i++){
      if(collection[i].hasOwnProperty(Object.keys(source))){
        if(collection[i][Object.keys(source)] === source[Object.keys(source)]){
          arr.push(collection[i]);
        }
      }
    }
  } else {
    var valueSource = Object.keys(source);
    for(var x=0; x < valueSource.length; x++){
      for(var z=0; z < collection.length; z++){
        var collectionSource = Object.keys(collection[z]);
        if(collection[z].hasOwnProperty(valueSource[x])){
          if(collection[z][valueSource[x]] === source[valueSource[x]]){
            if(collection[z][valueSource[x+1]] === source[valueSource[x+1]]){
              x++;
              arr.push(collection[z]);
            }
          }
        }
      }
    }
  }
  // Only change code above this line
  console.log(arr);
  return arr;
}
var usuario =
[{
  "nombre":"Andoni",
  "apellido":"Abedul",
  "ci":19000876,
  "fechaNacimiento":"09/07/1994"
},
{
  "nombre":"Ernesto",
  "apellido":"Murrugarra",
  "ci":19967477,
  "fechaNacimiento":"22/02/90"
},
{
  "nombre":"Pepito",
  "apellido":"Lazares",
  "ci":21312312,
  "fechaNacimiento":"12/12/12"
},
{
  "nombre":"Leo",
  "apellido":"Messi",
  "ci":12312312,
  "fechaNacimiento":"10/10/2010"
},
{
  "nombre":"Leo",
  "apellido":"Julepe",
  "ci":12312312,
  "fechaNacimiento":"19/10/2010"
}
];

whatIsInAName(usuario,{"nombre":"Leo"});
