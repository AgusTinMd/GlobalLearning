/*
 Hay un arreglo con varios números donde todos son iguales 
 excepto uno. Haga una función que lo identifique
findUniq([1,1,1,1,2,1,1,1]) ==> return (2)
*/

function findUniq(z)
{

var igual,distinto;

for(i=0;i<z.length;i++)
{
 
    if(z[i] == z[i+1])
    {
        igual = z[i];
    }
    else 
    {
    
        if(z[i+2] == z[i])
        {
            distinto = z[i+1];
        }
        else
        {
            distinto = z[i];
            igual = z[i+1];
            break;
        }
    }
    
}

console.log("El valor distinto es "+distinto+" Todos los demas valores son "+igual );

}

findUniq([2,2,2,3]);
