let condicion=0;

for(condicion=0;condicion<3;condicion++){
    console.log(condicion);
}

for(let contador=0;contador<=10;contador++){
    if(contador%2==0){ //imprimo los numeros pares pero le agrego el break para que imprima el primer par y rompa el ciclo
    console.log(contador);
    break;    
}
}

for(let contador=0;contador<=10;contador++){
    if(contador%2!==0){ //imprimo los numeros pares pero le agrego el break para que imprima el primer par y rompa el ciclo
    continue;//va a la siguiente iteracion    
}else{
    console.log(contador)
}
}

//puedo usar un for in para iterar elementos de un arreglo u objeto

let datosPersona = {
    nombre: 'Leandro',
    apellido: 'Villalba',
    edad: 33,
    mail: 'villalbaleandrogabriel@mail.com'
}

for (dato in datosPersona){
    console.log(dato); //imprime el nombre de la propiedad del objeto, en este caso
    console.log(datosPersona[dato]); //imprime el valor de la propiedad 
}