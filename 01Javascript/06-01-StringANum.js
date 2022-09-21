let numero="10";

console.log(numero);
console.log(typeof numero);

let edad=Number(numero);

console.log(edad);
console.log(typeof edad);

if (edad>=18){
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

let resultado = (edad>=18) ? "Vota":"No vota";
console.log(resultado);

//funcion isNan;

let miNumero="18x";
let otroNum=Number(miNumero);

console.log(otroNum);

if (isNaN(miNumero)){
    console.log("No es un numero")
}else{
    console.log("Es un numero");
}

let resultado2=(isNan(miNumero)) ? "No es un numero":"Es un numero";
console.log(resultado2);

//precedencia


