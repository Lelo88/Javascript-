//primitivo
let nombre ="leandro";
console.log(nombre.length)
//objeto 

let nombre1=new String("Leandro");

//Escaping

console.log("Leandro dijo: \"Hola\""); //se utiliza un contrabarra para utilizar las comillas dentro de un comentario

//template literals

let template = `Hola ${nombre} como estas?` //es una notacion con comillas al costado y la variable dentro de ella, acompañado de unas llaves y el simbolo de moneda

//ejercicio de ingresar un mes ingresando 01, 02, 03 ... 

let month = ('Ingresa tu mes de nacimiento');
if(month.length == 1){
  month = '0'+month;
  console.log(`Ya veo, naciste en el mes ${month}`);
}

let mes = Math.ceil(Math.random()*12);
let num;
if(mes < 10){
    num = `0${mes}`;
}
else{
    num = mes;
}
console.log(num);

//local compare

console.log("a".localeCompare("b")); // nos devuelve 1 o -1 acorde al orden alfabetico
console.log("b".localeCompare("a"));

console.log("a".toLowerCase().localeCompare("A".toLowerCase())); //para que me de cero tengo que igualar los caracteres

//subcadenas y posiciones

console.log("Hola"[0]);

let saludo = "Hola mundo";
console.log(saludo.substring(2,7)); // imprimed una cadena desde una posicion inicial a una posicion final indicada
console.log(saludo.substring(8,2));
console.log(saludo.slice(3)); //mas o menos parecido a substring

//busqueda de cadenas

let cadena = "hola como estas"
console.log(cadena.indexOf("como"));

if (cadena.indexOf("estas") > 0) console.log("Encontrado"); //al posicionarse en una posicion mayor a cero se encuentra
if (cadena.includes("hola")) console.log("Encontrado");
if (cadena.startsWith("estas")) console.log ("Encontrado") ; console.log("No encontrado")
if (cadena.endsWith("hola")) console.log ("Encontrado") ; console.log("No encontrado")

console.log(cadena.trimEnd());
console.log(cadena.repeat(2));
console.log(cadena.replace("hola","chau"));