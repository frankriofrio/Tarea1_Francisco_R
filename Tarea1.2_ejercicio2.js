/*
5. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2 
• Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. 

Pista: puedes usar la función prompt de JavaScript.

*/

var preg = prompt('Estimado Usuario cuánto es 2 + 2 ');
        if (Number(preg) === 4){
          console.log("felicitaciones");
        }else{
          console.log("volvemos a empezar");
        }
