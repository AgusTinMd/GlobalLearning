/*
Teniendo un arreglo numérico, tenemos que sumarle un número 
(por parámetro) a cada elemento de nuestro arreglo
*/

function sumar(x, y)
{
    /*
    for(i=0;i < x.length;i++)
    {
        x[i] = x[i] + y;
    }
    */
     
    x.forEach(function(valor, indice) {
        x[indice] += y;
    });

    console.log(x);
}
let z = [1,2,3,4,5];
const w = 1;
sumar(z,w);
