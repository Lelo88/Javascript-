//basicamente todo lo que se maneja en javascript son objetos
//la diferencia es que una variable comun no contiene propiedades o metodos, como si lo tiene el objeto

let persona ={ //objeto en memoria con propiedades
    nombre: 'Leandro', //-->propiedad
    apellido: 'Villalba',
    edad: 33,
    email: 'lvillalba@mail.com'
}

console.log(persona.nombre); //accedo al atributo nombre
console.log(persona.edad);
console.log(persona);

//agregar metodos a objetos

let persona2 ={ //objeto en memoria con propiedades  --> Javascript Object Notation(JSON)
    nombre: 'Leandro', //-->propiedad
    apellido: 'Villalba',
    edad: 33,
    email: 'lvillalba@mail.com',
    nombreCompleto: function(){ //propiedad que apunta a una funcion
        return this.nombre + ' ' + this.apellido; //agregando la funcion, accedo a las propiedades con el apuntador 'this'
    }
}

console.log(persona2.nombreCompleto());

let persona3=new Object(); // otra forma de crear objetos
persona3.nombre='Carlos';
persona3.direccion='Saturno 15';
persona3.tel='555445';

console.log(persona3.nombre);

//acceder a las propiedades de los objetos javascript
//tambien podemos acceder a sus propiedades como si fuera un arreglo
persona2['apellido'];
console.log(persona2['apellido']);

//podemos usar el ciclo for in para recorrer el objeto

for(nombrePropiedad in persona2){
    console.log(nombrePropiedad); //accedo al nombre de la propiedad del objeto
    console.log(persona2[nombrePropiedad]) //accedo al contenido de cada propiedad del objeto
}

//agregar propiedades al objeto

persona2.telefono='56165165';
console.log(persona2);

//eliminar propiedad
delete persona2.telefono;
console.log(persona2);

//distintas formas de imprimir un objeto
//al estar en un navegador web, por ejemplo, no es lo mismo que imprimirlo en consola

//podemos concatenar cada valor de cada propiedad

console.log(persona2.nombre + ' ' + persona.apellido);

//otra forma es usando for in

for(nombreProp in persona2){
    console.log(persona2[nombreProp]);
}

//otra forma es con el metodo object.value

let personaArray=Object.values(persona2); //nos regresa un arreglo con los valores de las propiedades del objeto persona
console.log(personaArray);

//con JSON

let personasString=JSON.stringify(persona2);
console.log(personasString);

//get simplifica la sintaxis de funcion. es un metodo para acceder a la informacion

let persona4 ={ //objeto en memoria con propiedades
    nombre: 'Leandro', //-->propiedad
    apellido: 'Villalba',
    edad: 33,
    email: 'lvillalba@mail.com',
    get nombreCompleto(){ //propiedad que apunta a una funcion
        return this.nombre + ' ' + this.apellido; //agregando la funcion, accedo a las propiedades con el apuntador 'this'
    }
}

console.log(persona4.nombreCompleto);

//metodo set

//podemos agregar algunas validaciones

let persona5 ={ //objeto en memoria con propiedades
    nombre: 'Leandro', //-->propiedad
    apellido: 'Villalba',
    edad: 33,
    email: 'lvillalba@mail.com',
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){ //propiedad que apunta a una funcion
        return this.nombre + ' ' + this.apellido; //agregando la funcion, accedo a las propiedades con el apuntador 'this'
    }
}

console.log(persona5.lang)

//cambio el idioma. set me va a permitir reconocer que el idioma se cambie
persona5.lang='en';
console.log(persona5.lang)

//metodo constructor 
//un constructor es una funcion especial. 

function Persona(nombre, apellido, mail){
    this.nombre = nombre; //this va a apuntar a un objeto, en este caso a un paramentro que recibira como argumento un nombre, en este caso
    this.apellido=apellido;//estamos definiendo propiedades
    this.mail=mail;
    this.nombreCompleto=function(){
        return this.nombre + ' '+ this.apellido;
    }
}//funcion constructor

//ahora creamos varios objetos del tipo persona 

let padre = new Persona('Juan','Perez','jperez@mail.com'); // creamos una variable que se convertira en objeto, ya que contendra los datos especificados en la estructura persona
console.log(padre);

let madre = new Persona('Maria', 'Gonzalez','mgonzalez@mail.com');
console.log(madre);

padre.nombre='Carlos';
//los cambiors se hicieron sobre el objeto padre
console.log(padre);
console.log(madre);

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

//distintas formas de crear objetos en javascript

let miObjeto=new Object(); // esta es la mas recomendable para usar
let miObjeto2={};

//uso de prototype

Persona.prototype.tel='44332211';//le asigno a todos los objetos creados la propiedad de telefono y su valor
padre.tel='998877' //puedo cambiar el valor predeterminado
console.log(padre.tel);

console.log(madre.tel);

//Uso de call en Javascript
//nos permite llamar a un objeto dentro de un objeto

let persona10={
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona20={
    nombre: 'Carlos',
    apellido: 'Perez'
}

//uso de call para usa el metodo persona10.nombreCompleto;

console.log(persona10.nombreCompleto());

persona10.nombreCompleto.call(persona20); // sintaxis para llamar el nombre completo de persona 20
console.log(persona10.nombreCompleto.call(persona20));

//paso de argumentos en call

let persona30={
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo +':'+ this.nombre + ' ' + this.apellido + ',' + tel;
    }
}

let persona40={
    nombre: 'Carlos',
    apellido: 'Perez'
}

console.log(persona30.nombreCompleto('Doctor','77889944'));
console.log(persona30.nombreCompleto.call(persona40,'Ingeniero','44556677'));

//metodo apply
//podemos usarlo igual que call, pero con diferencias


let persona50={
    nombre: 'Pepito',
    apellido:'Gonzalez',
    nombreCompleto: function(titulo,tel){
        return titulo + ':' +  this.nombre + ' ' + this.apellido + ' ' + tel; 
    }
}

let persona60={
    nombre: 'John',
    apellido: 'Gomez'
}

let arreglo=['doctor','445566']

console.log(persona50.nombreCompleto());
console.log(persona50.nombreCompleto.apply(persona60, arreglo)); //le pasamos como argumentos el objeto persona60


const persona100={ // Javascript Object notation -->objeto
    nombre: 'Luna Stella',
    apellido: 'Villalba',
    edad: 4
}

const anios='edad'; // -->le asigno a una constante la propiedad edad de persona 100 para luego llamarla en el console.log
console.log(persona100[anios]);

persona100.hasOwnProperty("nombre");

persona2.nombreCompleto();


//puedo hacer estas notaciones mas cortas para los objetos
let nombre = "leandro";

let user = {nombre};

console.log(user.nombre);

let user2 = {
    nombre: 'leandro',
    edad: 33
}

let esquema = {nivel: 2}

let admin = {...user2, ...esquema} //1º forma de combinar objetos
let admin2 = Object.assign({}, user2, esquema); // segunda forma de combinar objetos

console.log(admin);
console.log(admin2)

//asignacion por destructuracion
/*Asignar varias propiedades de un objeto a distintas variables.
Obtener solo algunas de las propiedades de un objeto y excluir otras.
Separar las propiedades de un objeto que recibamos como argumento de una función en distintas variables.
Separar el retorno de una función en distintas variables.*/

//funciones constructoras

function Curso (){
    this.title="Curso JS";
}

let objeto = new Curso();
console.log(objeto);

//tambien puedo pasarlo como parametro

function Curso2(titulo){
    this.titulo=titulo;
}

let objeto2 = new Curso2("Otro curso");
let objeto3 = new Curso2("Mas cursos de programacion");
console.log(objeto2);
console.log(objeto3)