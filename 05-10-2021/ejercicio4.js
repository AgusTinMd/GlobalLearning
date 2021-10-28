/*
Haga una función que reciba un número y retorne un arreglo que 
el tamaño del número recibido. El contenido del arreglo deben
ser números desde el 0 hasta el número recibido -1 (0 a n-1)
*/

function creacion(x)
{
  var z =[];
  for(i=0;i<x;i++)
  {
    z[i] = i;
  }
console.log(z);
}
creacion(5);
