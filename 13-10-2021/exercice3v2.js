class person
{
    firstname
    country
    continent
    age
    languaje
    greeting
    constructor (firstname,country,continent,age,languaje,greeting)
    {
       this.firstname = firstname;
       this.country = country;
       this.continent = continent;
       this.age = age;
       this.languaje = languaje;
       this.greeting = greeting;
    }
}
const list = [
{ firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
{ firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
{ firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const prompt = require('prompt-sync')({sigint: true});

var europe = 0;

var i = prompt('Number of persons: ');
i= Number(i);

for(j=0;j<i;j++)
{
  console.log(`Person Number ${j+1}\n`);
  /*
    var Firstname = prompt('Firstname: ');
    var Country = prompt('Country: ');
    var Continent = prompt('Continent:');
    var Age = prompt('Age: ');
    var Languaje = prompt('Languaje: ');
  */  
    console.log(`Greeting for ${list.firstname}`);
    var Greeting = prompt('Greeting: ');

    //console.log(`Hello good friend ${Firstname}`);
  

   var auxperson = new person (list[i].Firstname,list[i].Country,list[i].Continent,list[i].Age,list[i].Languaje,list[i].Greeting);

  list[j] = auxperson;
}

console.log(list);


