//tipo de dato string

var nombre="Carlos";
console.log(typeof nombre);

nombre=145;

console.log(typeof nombre);

/*Ejemplo de tipos de datos en javascript*/ 

//tipo de dato numerico
var numero=1000;

console.log(numero);

//tipo de dato objeto

var objeto={
    nombre: "Leandro",
    apellido: "Villalba"
};

console.log(objeto);
console.log(typeof objeto);

/*tipo de dato booleano*/

var bandera=true;

console.log(bandera);
console.log(typeof bandera);

//tipo de dato funcion 

function miFuncion(){}

console.log(typeof miFuncion);

//tipo de dato symbol

var simbolo=Symbol("Mi simbolo");
console.log(simbolo)

//tipo clase es una funcion 

class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

console.log(typeof Persona)

//tipo de dato undefined

var x;
console.log(x)
console.log(typeof x)

//tipo de variable null

var y=null;
console.log(y)


//tipo de dato array

var autos=["BMW","Audi","Volvo"];

console.log(autos);
console.log(typeof autos);

//tipo de dato vacio

var z="";
console.log(z);

//concatenar cadenas

var nombre="Leandro";
var apellido="Villalba"

var nombreCompleto= nombre + ' ' + apellido;
console.log(nombreCompleto);