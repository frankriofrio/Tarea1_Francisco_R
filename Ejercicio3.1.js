

/*  1 ORDENACIÓN DE TRES NÚMEROS
Construir un programa que pida por pantalla 3 números y luego
diga cuál es el mayor, el del medio y el menor de los números
ingresados.*/

function ordenar3numeros() {

    let a = prompt('Ingrese el Numero 1');
    let b = prompt('Ingrese el Numero 1');
    let c = prompt('Ingrese el Numero 1');
    if(a>b && b>c){
        console.log ("Numero Mayor "+a)
        console.log ("Numero Medio "+b)
        console.log ("Numero Memor "+c)
    } else if (a>c && c>b) {
        console.log ("Numero Mayor "+a)
        console.log ("Numero Medio "+c)
        console.log ("Numero Memor "+b)
    } else if (b>a && a>c) {
        console.log ("Numero Mayor "+b)
        console.log ("Numero Medio "+a)
        console.log ("Numero Memor "+c)
    }else if (b>c && c>a) {
        console.log ("Numero Mayor "+b)
        console.log ("Numero Medio "+c)
        console.log ("Numero Memor "+a)
    } else if (c>a && a>b) {
        console.log ("Numero Mayor "+c)
        console.log ("Numero Medio "+a)
        console.log ("Numero Memor "+b)
    }else if (c>b && b>a){
     console.log ("Numero Mayor "+c)
        console.log ("Numero Medio "+b)
        console.log ("Numero Memor "+a)
    }else{
        
    }
           
}

ordenar3numeros();

/*2 AÑO BICIESTO
Construir un programa que pida un año y luego determine si el
año es bisiesto o no. Tenga en cuenta que los años bisiestos son
los números múltiplos de 4, pero que no son múltiplos de 100 y si
son múltiplos de 100 y múltiplos de 400 sí son bisiestos.
 */

function checkBisiestYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year,' año bisiesto');
    } else {
        console.log(year, ' no es año bisiesto');
    }
}
checkBisiestYear(2022);



/*3 DESCUENTOS
Un almacén de escritorios hace los siguientes descuentos: si el
cliente compramenos de 5 unidadesse le da un descuento del 10%
sobre la compra;si el número de unidades es mayor o igual a cinco,
pero menos de 10 se le otorga un
20% y, si son 10 o más se le da un 40% */

function descuento (valor_escritorio,n_escritorios){
    let compra;
    if (n_escritorios<5){
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.10);
    console.log ("Recibe un descuento del 10%  Total a Pagar =", compra);
    }else if ((n_escritorios>=5 )&&(n_escritorios<=10)){
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.20);
        console.log ("Recibe un descuento del 20%  Total a Pagar =", compra);
    }else{
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.40);
        console.log ("Recibe un descuento del 40%  Total a Pagar =", compra);
    }
    }
    
    descuento(200,13);









