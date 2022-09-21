miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//las llamadas de funcion son de manera secuencial
//se ejecuta la primera llamada que realizo

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
} //reicbimos dos argumentos y otro mas, pero este ultimo es una funcion

sumar(5,3, imp);