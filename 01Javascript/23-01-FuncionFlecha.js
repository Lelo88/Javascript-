//las funciones flecha son anonimas, la asignamos a una variable

function miFuncion(){
    console.log('Esta es una funcion');
}

miFuncion();

let miFuncionFlecha = () =>{
    console.log('Esta es una funcion flecha');
} //no usamos la palabra reservada function, sino que la asignamos a una variable 
  //siempre hay que usarla luego de definirla, a diferencia de las funciones convencionales
miFuncionFlecha();

const miFuncionFlecha2 = () => console.log('Esta es una nueva funcion flecha');//si es una sola linea lo ponemos sin abrir el cuerpo de la funcion

miFuncionFlecha2();

const saludar = () => { //podemos darle un retorno de una cadena
    return 'Saludos desde esta funcion flecha';
}

console.log(saludar());

//si queremos regresar un objeto 
const regresaObjeto = () => ({nombre: 'Juan'}); //asi podemos devolver un objeto
console.log(regresaObjeto());

//funcion con parametros
const funcionParametro = mensaje => console.log(mensaje);
funcionParametro('Saludos desde funcion parametro');

const funcionParametro2 = (op1, op2) => op1+op2;
console.log(funcionParametro2(4,5));

const funcionParamtro3 = (op1,op2) => {
    let resultado = op1+op2;
    return `Resultado: ${resultado}`;
}

console.log(funcionParamtro3(2,3));

const funcionParametro4 = (num1,num2) => {
    let resultado = num1*num2;
    if(isNaN(resultado)){
    return `No hay ningun resultado para mostrar`;       
    } else { 
    return `El resultado es: ${resultado}`;
    }
}

console.log(funcionParametro4(5,6));
console.log(funcionParametro4(4,"a"));