//operadores logicos

//operador and

let a=-41;
let minimo=0, maximo=10;

if(a>=minimo && a<=maximo){
    console.log("Dentro de rango");
} else{
    console.log("Fuera de rango");
}

//operador or

let vacaciones=false, descanso=true;

if(vacaciones||descanso){
    console.log("El padre puede asistir al juego");
}else {
    console.log("El padre está ocupado")
}

//operador ternario

let resultado = (3>2) ? "verdadero":"falso"; //en vez de un comentario puedo retornar un resultado
console.log(resultado);

//en la misma variable hago la pregunta para no usar if

let numero=9;
resultado=(numero%2==0) ? "Numero par":"Numero impar";
console.log(resultado);