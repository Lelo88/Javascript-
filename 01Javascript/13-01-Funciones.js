//declaracion de funciones

function miFuncion(a,b){
    console.log("Suma: "+ (a+b));
}

//puedo llamar cuantas veces quiera a la funcion, antes o despues
miFuncion(8,9);
miFuncion(2,3);

//return 

function miFuncion2(a,b){
    return a+b;
}

let resultado=miFuncion2(7,8);
console.log(resultado);

let x=function(a,b){return a+b}; //la funcion se designa a la variable x, funcion de tipo expresion 
resultado2=x(1,2);
console.log(resultado2);

//Llamar a la funcion dentro de la funcion

(function(a,b){
    console.log('Ejecutando la función ' + (a+b));
})(3,4)

//funciones como objeto

console.log(typeof miFuncion);

function mifuncion3(a,b){
    console.log(arguments.length);
    return a+b;
}

//las funciones al ser objetos tienen propiedades
var miFunciontexto=miFuncion.toString();
console.log(miFunciontexto);

//funciones flecha

/*let sumar = function(a,b){return a+b};

resultado3=sumar(3,2);
console.log(resultado3);*/

const sumarFuncionTipoFlecha = (a,b) => a + b; //definimos los argumentos y luego el operador flecha. es lo mismo que dice en la linea 47
resultado3=sumarFuncionTipoFlecha(3,2);
console.log(resultado3)

//parametros y argumentos en javascript

//cuando definimos una funcion, dentro de los parentesis se definen los paramentros
//cuando le pasamos valores al llamar a la funcion, le estamos pasando argumentos

let sumar = function(a,b){
    console.log(arguments[0]); //el primer argumento que estoy pasando al parametro "a" es 3
    console.log(arguments[1]); //el segundo argumento que estoy pasando al parametro "b" es 2
    return a+b};

resultado3=sumar(3,2);
console.log(resultado3);

//Ejemplo de ejercicio
let resultado4=sumarTodo(5,4,13,10,9);
console.log(resultado4);

function sumarTodo(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma += arguments[i];
    } return suma;
} //por cada elemento se va a ir sumando y se va agregando a la variable suma

//paso por valor y referencia en funciones de Javascript

let x1=10;//valor primitivo. no tienen atributos ni metodos

function cambiarValor(a){
    a=20;
}

//a=x1
//a=10
cambiarValor(x1);
console.log(x1);

//la variable x1 solo paso su valor, por lo tanto a=10. esto es paso por valor

//console.log(a);//la variable a solo se usa dentro de la funcion, por lo que no la puedo mostrar en consola

//paso por referencia
//crearemos un objeto 
//definimos una variable constante


const persona={ //objeto
    nombre: 'Juan', //referencia 
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){ //funciona como un puntero. Estamos escribiendo sobre la memoria del objeto
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);//mientras se ejecute este metodo, la funcion se va a seguir cumpliendo
console.log(persona);


//funciones anonimas

let tienda = {
    nombre: 'La tienda de Ciudad Evita',
    costo: function(valor1,valor2){
        return valor1 + valor2;
    }, 
    saludar: function(){
        let saludo='hola';
        return saludo;
    }
};

console.log(tienda.nombre);
console.log(tienda.costo(10,20));
console.log(tienda.saludar());

/*let btnSaludar=document.getElementById('btnSaludar');
btnSaludar.addEventListener('click', function(){
    console.log(tienda.saludar());
})*/

function cuadrado(numero){
    return numero*numero;
}

console.log(cuadrado(10));

//codigo facilito
//arrow functions y operador this

let estudiante =  {
    nombre: 'leandro',
    saludar: () => {console.log("Hola soy " + this.nombre)}, 
    saludarAlt: function(){console.log("Hola soy " + this.nombre)}
}

estudiante.saludar(); // el valor de this va a ser dificil para las funciones 
estudiante.saludarAlt();

function Estudiante2 (){
    this.nombre = "leandro",
    this.saludar = () => console.log("Hola, soy " + this.nombre);
}

let e = new Estudiante2;
e.saludar();