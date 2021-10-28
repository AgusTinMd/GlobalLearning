/*Ejercicio 1: Pensemos que tenemos que hacer un 
juego. Y lo primero que necesitamos es que se puedan
crear héroes en el juego. Haga una función o una 
clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores.

Nombre = 'heroe'
posicion '00'
vida 100
daño 5
experiencia 0
*/

class newcharacter
{
    name
    position
    health
    damage
    experience
    constructor (name,position,health,damage,experience)
    {
        this.name = name;
        this.position = position;
        this.health = health;
        this.damage = damage;
        this.experience = damage;
    }
}

const character = new newcharacter('Heroe','00',100,5,0);

console.log(character);


