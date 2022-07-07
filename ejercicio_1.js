//1.- Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
/*
• Nombre                                  String
• Apellido                                String   
• Nombre de usuario en ITI                String 
• Edad                                    Entero 
• Correo electrónico                      String
• Mayor de edad                           Booleano
• Dinero ahorrado                         Decimal
• Deudas                                  Entero
*/ 

/*2.- Traduce a código JavaScript las variables del ejemplo anterior y
adjunta una captura
 */

const nombre = "Francisco", apellido = "Riofrio";
var nombre_usuario_en_iti, edad, correo_electronico, adulto, ahorros, deudas;

/* 
Calcula e imprime las siguientes variables a partir de las variables
del ejemplo anterior:
• Nombre completo (nombre y apellido)
• Dinero real (dinero ahorrado menos deudas)
*/

const nombre1 = "Francisco", apellido1 = "Riofrio";
var usuario, edad, correo, adulto, ahorros, deudas;

ahorros = 430000;
deudas = 8000;

console.log(`Como estan amigos me llamo ${nombre} ${apellido}. y actualmente el dinero que tengo ahorrado es de = ${ahorros - deudas}. dolares`)