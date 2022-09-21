//let autos = new Array('BMW', 'Mercesdes Benz', 'Volvo');

const autos=['BMW', 'Mercesdes Benz', 'Volvo'];
console.log(autos);

//recorrer elementos de un arreglo

//accediendo de manera individual
console.log(autos[0]);
console.log(autos[2]);

//recorriendo con un ciclo

for(let i=0;i<autos.length;i++){
    console.log(autos[i])
}

//modificar un arreglo

autos[1]='Renault';
console.log(autos[1]);

//agregar elemento

autos.push('Ferrari');
console.log(autos);

//el indice de un arreglo comienza en 0

console.log(autos.length)
autos[autos.length]='Cadillac'

console.log(autos);

autos[6]='Porsche';
console.log(autos);

console.log(Array.isArray(autos)); //me permite ver si es un arreglo o no
console.log(autos instanceof Array);

//formas de recorrer un array

for(let i=0;i<autos.length;i++){
    console.log(autos[i]);
}

autos.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})

autos.unshift('Chevrolet'); //permite agregar un elemento al principio
console.log(autos);

autos.pop(); //elimina el ultimo elemento de un array
console.log(autos);

autos.shift(); //se elimina el primer item, la inversa de unshift
console.log(autos) 

let posicion = autos.indexOf('BMW'); // me indica el indice en donde está ubicado el elemento que se encuentra dentro del parentesis correspondiente al array autos
console.log(posicion);


//codigo facilito: operaciones funcionales con arreglos
/*for(let i = 0;i < arreglo.length; i++){
    let element = arreglo[i];
    console.log(element);
 }*/
 
 /*arreglo.forEach(function(element){ console.log(element) });*/

 let lenguajes = ["ruby","java","javascript","python"];

 lenguajes.forEach(function(lenguaje, indice){ // recibe como primer paramentro el objeto, el segundo el indice. puede recibir mas
     console.log(lenguaje, indice + 1);
 }) // reemplazaria a la sentencia for que conocemos comunmente

 //metodo map

 let numeros = [2,3,4,34]; //--> de aqui obtendremos los cuadrados de cada elemento

 let cuadrados = numeros.map(function(numero){
     return numero*numero;
 }) //cada elemento del arreglo numeros se eleva al cuadrado y se guarda dentro de cuadrados a 

 console.log(cuadrados);

 let numerosString = ["10","20","30"]; 
  
 let numerosAint= numerosString.map(function(numero){
    let numint=parseInt(numero); 
    return numint;
 });

console.log(numerosAint);

//FILTER
//filtra de acuerdo a lo que retornemos. en este caso retorna  todos los numeros que sean pares

let numeros2 = [8,4,6,9,17,18,55,31];

let nuevosNum = numeros2.filter(function(numero){
    return numero%2===0;
});

console.log(nuevosNum);

//reduce

let numeros3 = [1,2,3,4,5];

let suma = numeros3.reduce(function(acumulador,elemento){
    return acumulador += elemento;
},0);

console.log(suma);

let lenguajesProg = ["ruby","java","python"];

console.log(lenguajesProg.indexOf("java")) //devuelve la posicion del elemeno del array
console.log(lenguajesProg.includes("ruby",1)) //me devuelve si existe o no el elemento a buscar a partir de una posicion en particular

let respuesta =  lenguajesProg.find(function(elemento, posicion, arreglo){
   return elemento === "ruby";

});

console.log(respuesta);

//metodo some

let respuesta1 = lenguajesProg.some(function(elemento, posicion, arreglo){
    return elemento === "java";
})

console.log(respuesta1); // some me devuelve true o false

console.log(...lenguajesProg);