/*
Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de 
el primer desarrollador de cierto lenguaje que se haya inscripto.
const list1 = [
 { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
 { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
 { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];
return ('Python')==> Victoria from Puerto Rico was the first Python developer in the conference
return ('C#')==> There are no C# developers in the conference

*/

function firstup(word) 
{
  return word[0].toUpperCase() + word.slice(1);
}


const list = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];


function findercountry(list,languajetofind)
{
  
  languajetofind = languajetofind.toLowerCase(); 
  languajetofind = firstup(languajetofind);

    var response = list.find(finde => finde.language == languajetofind);

    if(response == undefined)
    {
      console.log(`There are no ${languajetofind} developers in the conference`);
    }
    else
    {
     console.log(`${response.firstName} from ${response.country} was the first ${languajetofind} developer in the conference`);
    }
    //console.log(findlanguaje);
    //console.log(response2);
};

findercountry(list,'pyTHON');