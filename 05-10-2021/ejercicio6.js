/*
Dado un arreglo de números enteros, encuentre la menor suma 
posible entre ellos 
minSum([7,4,2,3]) ==> return (5)
*/

function minSum(x)
{
//var menorsuma;

//sort no funciona con numero, ordena alfabeticamente, A=1, B=2, AB=12
//Se usa una funcion de comparacion y listo, tenes todo ordenado de menor a mayor
x.sort(function(a, b){return a - b});

//menorsuma = x[0] + x[1];

console.log("La menor suma posible es entre los valores "+x[0]+"+"+x[1]+"="+(x[0]+x[1]));
//console.log(x);
}
minSum(x=[8,5,4,16]);
