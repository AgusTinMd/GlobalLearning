/*
Haga una función que solo reciba arreglos con más de 5 elementos y 
luego elimine los últimos 3
*/

function highdelete(x)
{
  if(x.length > 5)
  {
    for(i=0;i<3;i++)
    {
      x.pop();
    }
    console.log("El array CONTIENE mas de 5 elementos, se eliminaran los ultimos 3");
  }
  else
  {
      console.log("El array NO contiene mas de 5 elementos");
  }
    console.log(x);
}

//const x = [1,2,3,4,5,6];

highdelete([1,2,3,4,5,6,7,8]);
