'use strict'

try{
  let x=10;
  //miFuncion();
  throw 'Mi error'; //el  bloque catch se termina ejecutando
}
catch(error){
   console.log(error);
}
finally{
    console.log('Termina la revision de errores');
}
//nos indica que tenemos un error de referencia y que x no está definida
/*x=10;
console.log('continuamos'); //cuando provocamos el error, la linea no se ejecuta*/

console.log('Continuamos'); //ahora nos deja continuar

//el bloque finally siempre va a funcionar, nos arroje o no un error

'use strict'
let resultado = '';

try{
    if (isNaN(resultado)) throw 'No es un numero';
    else if(resultado==='') throw 'Es una cadena';
    else if(resultado>=0) throw 'Valor positivo';
    else if(resultado<=0) throw 'Valor negativo'
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
