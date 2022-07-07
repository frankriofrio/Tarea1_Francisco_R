/*4. Convierte el siguiente código en una función, pero, cambiando
cuando sea necesario las variables constantes por parámetros y
argumentos en una función:

1. const name = "Juan David";
2. const lastname = "Castro Gallego";
3. const completeName = name + lastname;
4. const nickname = "juandc";
5.
6. console.log("Mi nombre es " + completeName + ", pero prefiero
que me digas " + nickname + ".");
7.


 */

// Constantes
const name = "Francisco", lastName = "Riofrio", nick = "Campeón";
const completeName = `${name} ${lastName}`;

// Creacion de la funcion
function funcion_presentar(name, nickName){
  console.log("Me llamo " + name + ", y mi apodo es " + nickName + ".");
}

// Uso de la funcion
funcion_presentar(completeName, nick);