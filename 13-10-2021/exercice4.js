/*

Ejercicio 5: Teniendo en cuenta la misma conferencia anterior, 
necesitamos saber si van a haber programadores de cierto 
lenguaje para poder preparar contenido específico. Por lo tanto, 
necesitamos una function que nos devuelva “true” o “false” 
cuando le preguntemos por cierto lenguaje. Por ejemplo:
const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
return ('Ruby' )==> true

*/
function firstup(word) 
{
  return word[0].toUpperCase() + word.slice(1);
}


const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];


function finderlanguaje(list,findlanguaje)
{
  
  response2 = true;
  findlanguaje = findlanguaje.toLowerCase(); 
  findlanguaje = firstup(findlanguaje);

    var response = list.find(finde => finde.language == findlanguaje);

    if(response == undefined)
    {
      var response2 = false;
    }
    //console.log(findlanguaje);
    console.log(response2);
};

finderlanguaje(list,'ruBY');
