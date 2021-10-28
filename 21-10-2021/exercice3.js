/*
Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos crear
 nombre de usuario a cada persona registrada dependiendo del nombre y el año en el 
 que nacieron. Este nombre de usuario tiene que agregarse como una nueva propiedad 
 llamada “userName

const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];


return ==> 
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    userName: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    userName: 'nore2000' }
]

*/

// objeto Date(); que nos da la fecha actual.
const actualyear = new Date();
const actualyears = actualyear.getFullYear();



const list = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

  function userNamecreator(list)
{

 var aux;

   for(i=0;i<list.length;i++)
   {

     aux = list[i];
     list[i].userName = list[i].firstName.toLowerCase() + list[i].lastName.toLowerCase() + actualyears;
     
     list[i].userName = list[i].userName.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
     
   }

   console.log(list);

};

userNamecreator(list);
