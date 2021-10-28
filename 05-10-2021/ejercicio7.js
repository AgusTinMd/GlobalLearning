/*
Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
// 5 * 10 = 50
*/

function adjacentElementsProduct(x)
{
  
    mayor = x[0] * x[1];
    for(i=0;i<x.length-1;i++)
    {
         z = x[i] * x[i+1];
        if(z > mayor)
        {
            mayor = z;
        }

    }
console.log(mayor);

}

adjacentElementsProduct(x= [1,2,3,8,2,1,8,8])

