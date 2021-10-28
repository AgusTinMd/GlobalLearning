/*

hubo una conferencia de programación hace poco y 
necesitamos saber quienes fueron las personas que 
estuvieron en el evento. Sabemos que la información 
está guardada en un array de objetos. Necesitamos 
saber cuántas personas de “Europa” asistieron

const list = [
  { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Maria, country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

*/
class person
{
    firstname
    country
    continent
    age
    languaje
    constructor (firstname,country,continent,age,languaje)
    {
       this.firstname = firstname;
       this.country = country;
       this.continent = continent;
       this.age = age;
       this.languaje = languaje;
    }
}

let list = [];

const prompt = require('prompt-sync')({sigint: true});

var europe = 0;

var i = prompt('Number of persons: ');
i= Number(i);

for(j=0;j<i;j++)
{
  console.log(`Person Number ${j+1}\n`);

    var Firstname = prompt('Firstname: ');
    var Country = prompt('Country: ');
    var Continent = prompt('Continent:');
    var Age = prompt('Age: ');
    var Languaje = prompt('Languaje: ');

    //console.log(`Hello good friend ${Firstname}`);

   var auxperson = new person (Firstname,Country,Continent,Age,Languaje);

  list[j] = auxperson;

  if(list[j].country.toLowerCase() == "europe")
  {
      europe++;
  }

}

console.log(`The conference was attended by ${europe} Europeans`);

//console.log(list);








