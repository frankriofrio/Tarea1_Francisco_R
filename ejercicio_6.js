/*
6. Replica el comportamiento del siguiente código que usa la
sentencia switch Utilizando if, else y else if

1. const tipoDeMatricula = "Basic";
2. switch (tipoDeMatricula) {
3. case "Free":
4. console.log("Solo puedes tomar los cursos gratis");
5. break;
6. case "Basic":
7. console.log("Puedes tomar casi todos los cursos de ITI
durante un mes");
8. break;
9. case "Expert":
10. console.log("Puedes tomar casi todos los cursos de ITI
durante un año");
11. break;
12. case "ExpertPlus":
13. console.log("Tú y alguien más pueden tomar TODOS los
cursos de ITI durante un año");
14. break;
15. }
16.

*/

// Uso del else if

var tipos_programador = "Junior";

if(tipos_programador === "Junior"){
    console.log("Eres un Programador Junior");
  } else if(tipos_programador === "Senior"){
    console.log("Eres un Programador Senior");
  } else if(tipos_programador === "Master"){
    console.log("Eres un Programador Master");
  } else{
    console.log("No eres Programador");
  }


// Uso del If
  if(tipos_programador === "Junior"){
    console.log("Eres un Programador Junior"); 
  }
  
  if(tipos_programador === "Senior"){
    console.log("Eres un Programador Senior");
  }
  
  if(tipos_programador === "Master"){
    console.log("Eres un Programador Master"); 
  }

// Uso del swich

const tipoDeSuscripcion = "basic";

switch (tipos_programador) {
   case "Junior":
       console.log("Eres un Programador Junior");
       break;
   case "Senior":
       console.log("Eres un Programador Senior");
       break;
   case "Master":
       console.log("Eres un Programador Master");
       break;
  
}




