/*
Ejercicio 1: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las personas
registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra función devuelva True 
si todos los lenguajes son iguales, o que nos devuelva False si hay por lo menos uno que sea distinto
const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

*/


function firstup(word) 
{
  return word[0].toUpperCase() + word.slice(1);
}


const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


function finddiferent(list,languajetofind)
{
  
  languajetofind = languajetofind.toLowerCase(); 
  languajetofind = firstup(languajetofind);

    for(i=0; i<list.length;i++)
    {
        if(list[i].language != languajetofind)
        {
            return false;
        }
        
    }

    return true;
   
};

console.log(finddiferent(list,'pyTHON'));