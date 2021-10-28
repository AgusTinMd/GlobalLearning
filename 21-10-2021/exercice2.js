/*
Ejercicio 2: Teniendo en cuenta la misma conferencia anterior, necesitamos saber 
quienes son los desarrolladores con mayor edad.
const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

return ==>
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

*/

const list = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 49, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

function highyear(list)
{

    let aux = [];
    var high = list[0];

    for(i=1; i<list.length;i++)
    {  

        if(list[i].age > high.age)
        {
            high = list[i];
        }

    }
    
    aux = list.filter(number => number == high.age);

    /*
    var j=0;

    for(i=0; i<list.length;i++)
    {  

        if(list[i].age == high.age)
        {
           aux[j] = list[i];
           j++;
        }

    }
   */
   console.log(aux);

};

highyear(list);