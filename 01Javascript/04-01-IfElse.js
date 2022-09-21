//preguntamos si el numero que ingresamos es un numero par o no

let a=9;

if(a%2==0)
{
    console.log("Es un numero par");
} 
else {
    console.log("No es un numero par");
}


//////////////////

let edad=20, adulto=18;

if(edad>=adulto){
    console.log("Es un adulto");
} else {
    console.log("Es menor de edad")
}

//operadores ternarios

let estado = true

let accion = estado ? 'continuar' : 'detenerse'; //si el estado es true, se ejecuta la primera, sino la segunda

console.log(accion);