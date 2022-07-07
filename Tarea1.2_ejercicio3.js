/*
6. Tienes un array de productos con los siguientes atributos: 
• name 
• price 
• stock 

Debes agregar y calcular una nueva propiedad llamada "iva", los impuestos deben ser del 12% con base al precio base. 
Por ejemplo, si aplicamos el 12% de impuestos para un producto con precio de $1000 el resultado de los "IVA" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales. 


*/

let productos = [ "name", "price", "stock" ];
productos.push("iva");
for (let i of productos) {
    var preg = prompt('Ingresa el'.i);
    console.log(preg);
}